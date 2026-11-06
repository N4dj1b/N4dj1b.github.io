---
title: "How I structure a CTF writeup"
description: "The template I use to turn a messy solve into a writeup that someone else can actually follow."
date: "2026-10-20"
category: "Notes"
tags: ["ctf", "writing", "methodology"]
featured: false
draft: false
---

A good writeup is not a transcript of what you typed. It's a reconstruction of the reasoning that made the solve possible. Those are very different documents.

This is the structure I use. It keeps writeups consistent and makes them much faster to produce.

## The skeleton

Every writeup starts with metadata, then follows the same five sections:

| Section | Purpose |
| --- | --- |
| Challenge info | Name, event, category, points, files, connection details |
| Recon | What you observe before touching the target |
| Hypothesis | What you think is going on, and why |
| Exploitation | The steps that test the hypothesis |
| Flag & lessons | The result, plus what you'd do differently |

The metadata block is the part people skip. It's also the part that makes a writeup searchable months later:

```yaml
challenge: "Baby SQL"
event: "ExampleCTF 2026"
category: web
points: 250
files: [app.zip, docker-compose.yml]
connection: http://challenge.local:8080
flag: "flag{...}"
```

## Write the dead ends down

The instinct is to publish the clean path: find bug, send payload, get flag. But the clean path is rarely where the learning is.

I keep a scratch file during the challenge with timestamps and short notes:

```text
14:02 - source zip, no .git
14:11 - login form, tried admin/admin
14:18 - single quote returns 500, maybe SQLi
14:26 - UNION with 3 cols works, page reflects col 2
14:31 - information_schema blocked? try sqlite_master
14:40 - flag
```

Those notes become the recon and hypothesis sections almost verbatim. They also prevent the writeup from becoming a fake linear story where everything worked the first time.

## Show the exact input and output

For web challenges, include the raw request or the payload, not a description of it:

```http
POST /api/login HTTP/1.1
Host: challenge.local
Content-Type: application/json

{"username":"admin' -- -","password":"x"}
```

For pwn and reversing, include the offsets, the checksec output, and the script that actually worked. A reader should be able to reproduce the solve without guessing which version of the exploit you ran.

## End with the flag and the lesson

The flag proves the solve. The lesson proves it was worth reading. One or two sentences is enough:

> The filter blocked `UNION` but not `UNI/**/ON`, which is a good reminder that keyword blacklists are a losing game.

## A quick checklist

Before publishing, I check that the writeup:

- [ ] states the challenge and event clearly
- [ ] explains *why* each step was taken, not just *what* was run
- [ ] includes the final payload or script
- [ ] mentions at least one dead end or mistake
- [ ] has the flag (or a redacted version if the event is still running)
- [ ] doesn't include another player's private data or infrastructure

If you're writing your first one, don't wait until you have a perfect solve. A short, honest writeup of an easy challenge is more useful than a polished writeup that never gets published.

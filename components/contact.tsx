"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Send,
  Calendar,
  Linkedin,
  Loader2,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "bd9dbc3f-0e34-47dc-91fc-2e4f96bbb0d7",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Reset status when user starts typing again
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let's Talk</h2>
          <p className="max-w-2xl mb-12 text-lg text-muted-foreground">
            Currently available for internships, junior roles, or freelance
            projects. If you're hiring or just want to chat, I'd love to hear
            from you.
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-semibold">
                What I'm looking for
              </h3>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Internship or junior full-stack role
                    </strong>{" "}
                    where I can contribute to real products and learn from
                    senior engineers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Teams that care about code quality
                    </strong>{" "}
                    I want to write code I'm proud of, not just code that ships.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Roles that value security awareness
                    </strong>{" "}
                    My background means I can spot vulnerabilities others might
                    miss.
                  </p>
                </div>
              </div>

              <div className="pt-6 space-y-4 border-t">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <Link
                    href="mailto:mn.taleb@esi-sba.dz"
                    className="transition-colors hover:text-primary"
                  >
                    mn.taleb@esi-sba.dz
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary shrink-0" />
                  <Link
                    href="https://linkedin.com/in/mohamed-nadjib-taleb"
                    target="_blank"
                    className="transition-colors hover:text-primary"
                  >
                    linkedin.com/in/mohamed-nadjib-taleb
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">
                    Algiers, Algeria (open to remote)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">
                    Available from now
                  </span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Send a message</CardTitle>
                <CardDescription>
                  I typically respond within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or what you'd like to discuss..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Message sent! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="text-sm text-red-600 dark:text-red-400">
                      Something went wrong. Please email me directly at{" "}
                      <Link
                        href="mailto:mn.taleb@esi-sba.dz"
                        className="underline"
                      >
                        mn.taleb@esi-sba.dz
                      </Link>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

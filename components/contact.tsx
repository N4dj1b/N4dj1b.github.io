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
import { Mail, MapPin, Send, Calendar } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let's Talk</h2>
          <p className="max-w-2xl mb-12 text-lg text-muted-foreground">
            Looking for an internship or junior developer role starting Summer
            2026. If you're hiring or just want to chat about a project, I'd
            love to hear from you.
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
                    my background means I can spot vulnerabilities others might
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
                      placeholder="you@company.com"
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
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

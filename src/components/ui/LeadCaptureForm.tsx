"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

interface LeadCaptureFormProps {
  industry?: string;
  city?: string;
  heading?: string;
}

export function LeadCaptureForm({
  industry,
  city,
  heading = "Tell us about your business",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          industry: data.get("industry"),
          city: data.get("city"),
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        setError(body.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-bg-subtle p-8 text-center" role="status">
        <p className="text-xl font-semibold text-primary">
          Thanks! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-4"
    >
      <p className="text-xl font-semibold text-primary">{heading}</p>

      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-text/20 px-4 py-2 focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="lead-email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-text/20 px-4 py-2 focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium mb-1">
          Phone
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-text/20 px-4 py-2 focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={3}
          className="w-full rounded-lg border border-text/20 px-4 py-2 focus:border-accent focus:outline-none"
        />
      </div>

      {industry && <input type="hidden" name="industry" value={industry} />}
      {city && <input type="hidden" name="city" value={city} />}

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Get Started"}
      </Button>
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { Send, AlertCircle, CalendarCheck } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [errorMessage, setErrorMessage] = useState("Please fix the errors below.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");

    const nextErrors: { email?: string; phone?: string } = {};
    if (!EMAIL_PATTERN.test(email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!PHONE_PATTERN.test(phone)) {
      nextErrors.phone = "Please enter a valid phone number (e.g., 403-555-0123)";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setErrorMessage("Please fix the errors below.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong sending your request. Please call us instead.");
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[var(--color-brand-gold)]/30 shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-brand-plum)] to-[var(--color-brand-plum-light)] rounded-xl flex items-center justify-center">
          <CalendarCheck className="w-5 h-5 text-[var(--color-brand-cream)]" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-[var(--color-brand-charcoal)]">
            Request My Appointment
          </h3>
          <p className="text-[var(--color-brand-charcoal)]/60 text-sm">Rachel will get back to you quickly</p>
        </div>
      </div>

      {status === "success" && (
        <div className="bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)] text-[var(--color-brand-caramel-dark)] px-4 py-3 rounded-lg text-sm mb-4">
          Thank you! Your request has been sent — we&apos;ll be in touch shortly to confirm.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
          <AlertCircle className="inline w-4 h-4 mr-2" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-brand-charcoal)] mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-brand-gold)]/40 focus:border-[var(--color-brand-plum)] focus:ring-2 focus:ring-[var(--color-brand-plum)]/20 outline-none transition-all bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal)] placeholder-[var(--color-brand-charcoal)]/40"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-brand-charcoal)] mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="403-555-0123"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-brand-gold)]/40 focus:border-[var(--color-brand-plum)] focus:ring-2 focus:ring-[var(--color-brand-plum)]/20 outline-none transition-all bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal)] placeholder-[var(--color-brand-charcoal)]/40"
            />
            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-brand-charcoal)] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@email.com"
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-brand-gold)]/40 focus:border-[var(--color-brand-plum)] focus:ring-2 focus:ring-[var(--color-brand-plum)]/20 outline-none transition-all bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal)] placeholder-[var(--color-brand-charcoal)]/40"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-brand-charcoal)] mb-2">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-brand-gold)]/40 focus:border-[var(--color-brand-plum)] focus:ring-2 focus:ring-[var(--color-brand-plum)]/20 outline-none transition-all bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal)]"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferred_time" className="block text-sm font-semibold text-[var(--color-brand-charcoal)] mb-2">
            Preferred Date/Time
          </label>
          <input
            type="text"
            id="preferred_time"
            name="preferred_time"
            placeholder="e.g., Saturday afternoon"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-brand-gold)]/40 focus:border-[var(--color-brand-plum)] focus:ring-2 focus:ring-[var(--color-brand-plum)]/20 outline-none transition-all bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal)] placeholder-[var(--color-brand-charcoal)]/40"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-[var(--color-brand-charcoal)] mb-2">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Tell us about the style you want, hair length, or any questions..."
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-brand-gold)]/40 focus:border-[var(--color-brand-plum)] focus:ring-2 focus:ring-[var(--color-brand-plum)]/20 outline-none transition-all resize-none bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal)] placeholder-[var(--color-brand-charcoal)]/40"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[var(--color-brand-plum)] text-[var(--color-brand-cream)] py-4 rounded-full font-bold text-lg hover:bg-[var(--color-brand-plum-light)] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <span>{status === "submitting" ? "Sending..." : "Request My Appointment"}</span>
          <Send className="w-5 h-5" aria-hidden="true" />
        </button>

        <p className="text-center text-sm text-[var(--color-brand-charcoal)]/50">
          Prefer to talk? Call {site.phone} anytime.
        </p>
      </form>
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";

type Errors = { name?: string; email?: string; message?: string };

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your full name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please provide a valid email address.";
    if (!message) nextErrors.message = "Please enter your message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      event.currentTarget.reset();
      setStatus("Thank you. Your message has been sent successfully.");
    } else {
      setStatus("We could not submit your message. Please try again later.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">Full Name</label>
        <input id="name" name="name" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={5} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" className="rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
        Send Message
      </button>
      {status && <p className="text-sm text-slate-700">{status}</p>}
    </form>
  );
}

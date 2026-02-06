"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    spaceType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", spaceType: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-20">
        <p className="font-serif text-3xl md:text-4xl text-white mb-4">
          Thank you.
        </p>
        <p className="font-sans text-base text-white/60">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-transparent border-b border-white/20 text-white font-sans text-base py-4 px-0 outline-none focus:border-white/50 transition-colors duration-300 placeholder:text-white/40";
  const selectClasses =
    "w-full bg-transparent border-b border-white/20 text-white font-sans text-base py-4 px-0 outline-none focus:border-white/50 transition-colors duration-300 appearance-none cursor-pointer [&>option]:bg-black [&>option]:text-white";

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses}
          />
        </div>

        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClasses}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <select
            required
            value={formData.spaceType}
            onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
            className={selectClasses}
          >
            <option value="" disabled>
              Type of Space
            </option>
            <option value="Office">Office</option>
            <option value="Residence">Residence</option>
            <option value="Retail">Retail</option>
            <option value="Event">Event</option>
            <option value="Other">Other</option>
          </select>

          <select
            required
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className={selectClasses}
          >
            <option value="" disabled>
              Budget Range
            </option>
            <option value="Under $5,000">Under $5,000</option>
            <option value="$5,000–$15,000">$5,000 – $15,000</option>
            <option value="$15,000–$50,000">$15,000 – $50,000</option>
            <option value="$50,000+">$50,000+</option>
            <option value="Let's Discuss">Let&apos;s Discuss</option>
          </select>
        </div>

        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClasses} resize-none`}
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-white text-black font-sans text-sm font-medium uppercase tracking-widest px-10 py-4 hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Inquiry →"}
        </button>

        {status === "error" && (
          <p className="font-sans text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </ScrollReveal>
  );
}

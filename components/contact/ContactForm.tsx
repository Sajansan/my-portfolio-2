"use client";

import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { validateContactForm, type ContactFormData } from "@/lib/validate";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error for the field being edited
      setFieldErrors((prev) => {
        if (!prev[name as keyof ContactFormData]) return prev;
        const next = { ...prev };
        delete next[name as keyof ContactFormData];
        return next;
      });
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Prevent duplicate rapid submissions
      if (status === "sending") return;

      // Client-side validation
      const { valid, errors } = validateContactForm(formData);
      if (!valid) {
        setFieldErrors(errors);
        return;
      }

      setFieldErrors({});
      setStatus("sending");
      setServerMessage("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
          setStatus("success");
          setServerMessage("Message sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "", honeypot: "" });
        } else {
          setStatus("error");
          setServerMessage(data.error || "Something went wrong. Please try again.");
          if (data.errors) setFieldErrors(data.errors);
        }
      } catch {
        setStatus("error");
        setServerMessage("Network error. Please check your connection and try again.");
      }
    },
    [formData, status]
  );

  const inputBase =
    "w-full rounded-xl border bg-white/5 border-white/10 px-5 py-3.5 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 focus:bg-white/[0.07]";

  const errorInput = "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative p-7 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group"
    >
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[100px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700" />

      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative z-10 space-y-6"
        id="contact-form"
      >
        <h3 className="text-xl font-bold text-white mb-2">Send me a message</h3>

        {/* Honeypot — hidden from real users */}
        <div className="absolute opacity-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <label htmlFor="honeypot">Do not fill this</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={handleChange}
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-2 ml-1">
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!fieldErrors.name}
            className={`${inputBase} ${fieldErrors.name ? errorInput : ""}`}
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-xs text-red-400 ml-1">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-2 ml-1">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!fieldErrors.email}
            className={`${inputBase} ${fieldErrors.email ? errorInput : ""}`}
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-xs text-red-400 ml-1">{fieldErrors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-2 ml-1">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!fieldErrors.message}
            className={`${inputBase} resize-none ${fieldErrors.message ? errorInput : ""}`}
          />
          {fieldErrors.message && (
            <p className="mt-1.5 text-xs text-red-400 ml-1">{fieldErrors.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full px-10 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold tracking-wide transition-all duration-300 hover:from-amber-400 hover:to-yellow-400 hover:shadow-xl hover:shadow-amber-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
        >
          {status === "sending" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Status messages */}
        <div aria-live="polite" className="min-h-[2.5rem]">
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-5 py-3"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {serverMessage}
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-3"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {serverMessage}
            </motion.p>
          )}
        </div>
      </form>
    </motion.div>
  );
}

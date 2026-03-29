"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "elango12092005@gmail.com",
    href: "mailto:elango12092005@gmail.com",
    color: "#00F5FF",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9176200584",
    href: "tel:+919176200584",
    color: "#7A5FFF",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/elango-project",
    href: "https://github.com/elango-project",
    color: "#00F5FF",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/elango-y",
    href: "https://www.linkedin.com/in/elango-y/",
    color: "#7A5FFF",
  },
];

// WhatsApp number (country code without +)
const WHATSAPP_NUMBER = "919176200584";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Build WhatsApp message text
      const text = encodeURIComponent(
        `📬 *New Portfolio Message*\n\n` +
          `*Name:* ${form.name}\n` +
          `*Email:* ${form.email}\n\n` +
          `*Message:*\n${form.message}`
      );

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

      // Open WhatsApp in a new tab — delivers the message directly to your number
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Small delay to feel like something processed
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent" />

      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00F5FF] text-sm tracking-widest uppercase mb-3">
            // 07. Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to build <span className="gradient-text">something great?</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Available for internships and freelance projects. I usually respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* LEFT: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5"
          >
            <div className="mb-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Let&apos;s work together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently open to internship roles, freelance projects, and collaboration
                opportunities. Reach out — I respond within 24 hours.
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <MapPin size={14} className="text-[#00F5FF]" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card neon-border group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${link.color}12`, border: `1px solid ${link.color}25` }}
                  >
                    <Icon size={18} style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">{link.label}</p>
                    <p className="text-sm text-gray-200 font-medium group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-6 p-10 rounded-2xl glass-card border border-[rgba(0,245,255,0.2)]"
              >
                <div className="w-20 h-20 rounded-full bg-[rgba(0,245,255,0.1)] border border-[rgba(0,245,255,0.3)] flex items-center justify-center shadow-[0_0_40px_rgba(0,245,255,0.2)]">
                  <CheckCircle size={36} className="text-[#00F5FF]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    Message Sent via WhatsApp!
                  </h3>
                  <p className="text-gray-400">
                    WhatsApp opened with your message. Complete sending it to reach me directly on{" "}
                    <span className="text-[#00F5FF]">+91 9176200584</span>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="text-sm text-[#00F5FF] font-mono underline hover:no-underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl glass-card border border-[rgba(0,245,255,0.1)] space-y-5"
              >
                {/* WhatsApp notice */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.12)]">
                  <span className="text-[#00F5FF] mt-0.5 flex-shrink-0">💬</span>
                  <p className="text-xs text-gray-400">
                    Messages are sent directly via{" "}
                    <span className="text-[#00F5FF] font-semibold">WhatsApp</span> to{" "}
                    <span className="text-white font-mono">+91 9176200584</span>
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl neon-input text-sm font-body"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl neon-input text-sm font-body"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl neon-input text-sm font-body resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-sm transition-all duration-300 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #00F5FF, #7A5FFF)",
                    color: "#000",
                    boxShadow: "0 0 30px rgba(0,245,255,0.25)",
                  }}
                  whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 50px rgba(0,245,255,0.45)" } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                  {loading ? (
                    <span className="font-mono text-sm animate-pulse">Opening WhatsApp...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "elango12092005@gmail.com",
    href: "mailto:elango12092005@gmail.com",
    color: "#00F5FF",
    lightColor: "text-cyan-500",
    lightBg: "bg-cyan-50",
    lightBorder: "border-cyan-100",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9176200584",
    href: "tel:+919176200584",
    color: "#7A5FFF",
    lightColor: "text-indigo-500",
    lightBg: "bg-indigo-50",
    lightBorder: "border-indigo-100",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "elango-project",
    href: "https://github.com/elango-project",
    color: "#00F5FF",
    lightColor: "text-cyan-500",
    lightBg: "bg-cyan-50",
    lightBorder: "border-cyan-100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "elango-y",
    href: "https://www.linkedin.com/in/elango-y/",
    color: "#7A5FFF",
    lightColor: "text-indigo-500",
    lightBg: "bg-indigo-50",
    lightBorder: "border-indigo-100",
  },
];

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
      const subject = encodeURIComponent(`New message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      
      window.location.href = `mailto:elango12092005@gmail.com?subject=${subject}&body=${body}`;

      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Elango, I saw your portfolio and would like to connect!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 bg-[var(--bg-color)] relative overflow-hidden">
      <div className="hidden dark:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-cyan-600 dark:text-[#00F5FF] text-sm tracking-widest uppercase mb-3 font-semibold">
            // 05. Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Ready to build <span className="text-slate-900 dark:bg-gradient-to-r dark:from-[#00F5FF] dark:to-[#7A5FFF] dark:bg-clip-text dark:text-transparent">something great?</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-xl mx-auto font-medium">
            Available for internships and full-time roles. I usually respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="mb-8 p-6 lg:p-8 bg-white dark:bg-transparent rounded-2xl border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none">
              <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                Let&apos;s work together
              </h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <div className="flex items-center gap-2 mt-6 text-sm text-slate-500 dark:text-gray-400 font-bold">
                <MapPin size={16} className="text-cyan-500 dark:text-[#00F5FF]" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#1e1e1e] hover:border-slate-300 dark:hover:border-[rgba(0,245,255,0.3)] group transition-all shadow-sm dark:shadow-none card-lift cursor-pointer"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border ${link.lightBg} ${link.lightBorder} dark:bg-transparent dark:border-transparent`}
                      style={{
                        backgroundColor: "var(--dark-bg, transparent)"
                      }}
                    >
                      <Icon size={18} className={`${link.lightColor} dark:text-transparent`} style={{ color: "var(--icon-color, inherit)" }} />
                      
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-gray-500 font-mono font-medium">{link.label}</p>
                      <p className="text-sm text-slate-900 dark:text-gray-200 font-bold dark:group-hover:text-[#00F5FF] transition-colors break-all">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
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
                className="h-full flex flex-col items-center justify-center text-center gap-6 p-10 rounded-2xl bg-white dark:bg-[#121212] border border-emerald-100 dark:border-[rgba(0,245,255,0.2)] shadow-sm dark:shadow-none"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-[rgba(0,245,255,0.1)] border border-emerald-100 dark:border-[rgba(0,245,255,0.3)] flex items-center justify-center dark:shadow-[0_0_40px_rgba(0,245,255,0.2)]">
                  <CheckCircle size={36} className="text-emerald-500 dark:text-[#00F5FF]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                    Message Prepared!
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 font-medium">
                    Your email client should have opened. If not, feel free to reach out directly at{" "}
                    <span className="text-cyan-600 dark:text-[#00F5FF] font-bold">elango12092005@gmail.com</span>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="text-sm text-indigo-500 dark:text-[#00F5FF] font-mono underline hover:no-underline font-bold"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="p-8 lg:p-10 rounded-2xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-[rgba(0,245,255,0.1)] space-y-6 shadow-md dark:shadow-none">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm font-body bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-slate-900 dark:bg-[rgba(18,18,18,0.8)] dark:border-[rgba(0,245,255,0.15)] dark:text-white dark:focus:bg-[rgba(18,18,18,0.95)] dark:focus:border-[#00F5FF] dark:focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm font-body bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-slate-900 dark:bg-[rgba(18,18,18,0.8)] dark:border-[rgba(0,245,255,0.15)] dark:text-white dark:focus:bg-[rgba(18,18,18,0.95)] dark:focus:border-[#00F5FF] dark:focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2 font-bold">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm font-body resize-none bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-slate-900 dark:bg-[rgba(18,18,18,0.8)] dark:border-[rgba(0,245,255,0.15)] dark:text-white dark:focus:bg-[rgba(18,18,18,0.95)] dark:focus:border-[#00F5FF] dark:focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-xl shadow-sm hover:scale-[1.03] transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={!loading ? { scale: 1.03 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? (
                      <span className="font-mono text-sm animate-pulse">Preparing Email...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="flex items-center justify-center pt-4">
                  <span className="text-xs text-gray-500 mr-3 font-mono">OR</span>
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0a0a0a] border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900 rounded-xl transition-all duration-200 text-sm font-semibold"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

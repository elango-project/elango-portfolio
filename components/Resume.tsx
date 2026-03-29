"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Sparkles, Eye } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative p-10 md:p-14 rounded-2xl overflow-hidden bg-[#121212] border border-[#1e1e1e] group"
        >
          {/* Decorative Icon */}
          <motion.div
            className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6"
            style={{
              background: "rgba(0, 245, 255, 0.08)",
              border: "1px solid rgba(0, 245, 255, 0.2)",
            }}
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <FileText size={28} className="text-[#00F5FF]" />
            <motion.div
              className="absolute -top-1 -right-1 text-[#7A5FFF]"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={18} />
            </motion.div>
          </motion.div>

          {/* Content */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            Review My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Explore my journey, technical expertise, and academic achievements.
            Download my resume for a full overview.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#7A5FFF] text-black font-heading font-bold text-sm btn-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={16} /> Preview Resume
            </motion.button>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[rgba(0,245,255,0.3)] text-[#00F5FF] font-heading font-semibold text-sm hover:bg-[rgba(0,245,255,0.06)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={16} /> View Full PDF
            </motion.a>
          </div>
        </motion.div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pdfUrl="/resume.pdf" />
    </section>
  );
}

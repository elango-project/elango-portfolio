"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.15)] to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00F5FF] text-sm tracking-widest uppercase mb-3">
            // Academic Background
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Education <span className="gradient-text">& Learning</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-[#121212] border border-[#1e1e1e] rounded-2xl p-8 hover:border-[rgba(0,245,255,0.15)] transition-all duration-300">
            {/* Degree Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,245,255,0.1)] border border-[rgba(0,245,255,0.2)] flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-[#00F5FF]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    B.Tech – AI & Data Science
                  </h3>
                  <p className="text-[#00F5FF] font-mono text-sm">
                    J.J. College Of Engineering And Technology
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-500 font-mono sm:text-right">
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <Calendar size={12} /> 2023 – 2027
                </span>
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin size={12} /> Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* CGPA */}
            <div className="inline-block px-4 py-2 rounded-lg bg-[rgba(0,245,255,0.06)] border border-[rgba(0,245,255,0.15)] mb-6">
              <span className="text-sm font-mono text-gray-400">CGPA: </span>
              <span className="text-lg font-heading font-bold text-[#00F5FF]">8.0</span>
              <span className="text-sm text-gray-500"> / 10</span>
            </div>

            {/* Relevant Areas */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={14} className="text-gray-500" />
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Relevant Areas of Study
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Machine Learning",
                  "Database Systems",
                  "Object-Oriented Programming",
                  "Web Development",
                  "NLP",
                  "AI Systems",
                ].map((area) => (
                  <span key={area} className="skill-badge hover:scale-105 transition-all duration-300">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

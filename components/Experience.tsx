"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GitBranch } from "lucide-react";

const responsibilities = [
  "Built backend CRUD modules powering 4+ core application features with PHP & MySQL",
  "Integrated REST APIs enabling real-time frontend-backend data communication",
  "Improved UI responsiveness achieving consistent rendering across 5+ device breakpoints",
  "Established Git-based workflow with structured code reviews, reducing merge conflicts by 40%",
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(122,95,255,0.2)] to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#7A5FFF] text-sm tracking-widest uppercase mb-3">
            // 05. Career
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-[#121212] border border-[#1e1e1e] rounded-2xl p-8 hover:border-[rgba(122,95,255,0.2)] transition-all duration-300">
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-[#7A5FFF]" />
                  <h3 className="font-heading text-xl font-bold text-white">
                    Full Stack Developer Intern
                  </h3>
                </div>
                <p className="text-[#00F5FF] font-mono text-sm">Codtech IT Solutions</p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} /> Dec 2024 – Jan 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} /> Remote
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-3 mb-6">
              {responsibilities.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7A5FFF] flex-shrink-0" />
                  {r}
                </motion.li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-[rgba(255,255,255,0.04)]">
              <GitBranch size={13} className="text-gray-600" />
              {["PHP", "MySQL", "JavaScript", "Git", "HTML/CSS"].map((t) => (
                <span key={t} className="skill-badge hover:scale-105 transition-all duration-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GitBranch } from "lucide-react";

const responsibilities = [
  "Developed backend CRUD modules and integrated frontend components using PHP and MySQL.",
  "Improved UI responsiveness and resolved functional defects.",
  "Collaborated with senior developers using Git-based version control.",
  "Achieved 95% project evaluation score.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[var(--bg-color)] relative overflow-hidden">
      <div className="hidden dark:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(122,95,255,0.2)] to-transparent" />
      <div className="dark:hidden absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-indigo-600 dark:text-[#7A5FFF] text-sm tracking-widest uppercase mb-3 font-semibold">
            // 04. Career
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Work <span className="text-slate-900 dark:bg-gradient-to-r dark:from-[#00F5FF] dark:to-[#7A5FFF] dark:bg-clip-text dark:text-transparent">Experience</span>
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
          <div className="relative bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#1e1e1e] rounded-2xl p-6 lg:p-8 hover:border-slate-300 dark:hover:border-[rgba(122,95,255,0.2)] transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.03)] dark:shadow-none card-lift">
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Briefcase size={18} className="text-indigo-500 dark:text-[#7A5FFF]" />
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                    Web Development Intern
                  </h3>
                </div>
                <p className="text-cyan-600 dark:text-[#00F5FF] font-mono text-sm font-bold">CrestaCore ARPA Pvt. Ltd.</p>
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-slate-500 dark:text-gray-500 font-mono font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-slate-400" /> Feb 2025 – May 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-slate-400" /> Remote
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-3 mb-8">
              {responsibilities.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 text-slate-600 dark:text-gray-400 text-sm leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-[#7A5FFF] flex-shrink-0" />
                  <span>{r}</span>
                </motion.li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 flex-wrap pt-5 border-t border-slate-100 dark:border-[rgba(255,255,255,0.04)]">
              <GitBranch size={16} className="text-slate-400 dark:text-gray-600 mr-1" />
              {["PHP", "MySQL", "JavaScript", "Git"].map((t) => (
                <span 
                  key={t} 
                  className="bg-slate-100 text-slate-700 border border-transparent dark:bg-white/5 dark:border-white/10 dark:text-gray-300 px-3 py-1.5 text-xs rounded-md font-mono hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-default font-medium"
                >
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

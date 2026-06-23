"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Brain, Database, Globe, Server, Cpu } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const capabilities = [
  { icon: Globe, label: "Full Stack Apps", color: "#00F5FF", lightColor: "text-cyan-500" },
  { icon: Brain, label: "AI-Powered Systems", color: "#7A5FFF", lightColor: "text-indigo-500" },
  { icon: Database, label: "Database Platforms", color: "#00F5FF", lightColor: "text-cyan-500" },
  { icon: Server, label: "REST APIs", color: "#7A5FFF", lightColor: "text-indigo-500" },
  { icon: Code2, label: "Responsive Interfaces", color: "#00F5FF", lightColor: "text-cyan-500" },
  { icon: Cpu, label: "Data Science", color: "#7A5FFF", lightColor: "text-indigo-500" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--bg-color)] relative overflow-hidden">
      <div className="hidden dark:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent" />
      <div className="dark:hidden absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <p className="font-mono text-cyan-600 dark:text-[#00F5FF] text-sm tracking-widest uppercase mb-3 font-semibold">
            // 01. About Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            The Developer <span className="text-slate-900 dark:bg-gradient-to-r dark:from-[#00F5FF] dark:to-[#7A5FFF] dark:bg-clip-text dark:text-transparent">Behind the Code</span>
          </h2>
        </motion.div>

        {/* --- LIGHT MODE STRUCTURE --- */}
        <div className="dark:hidden grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={1}
              variants={fadeUp}
            >
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">About Me</h3>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  I'm <span className="font-semibold text-slate-900">Elango Yuvaraj</span>, a B.Tech AI & Data Science student from Tamil Nadu, India.
                </p>
                <p>
                  I build high-performance web applications and intelligent systems — from designing robust backend architectures and RESTful APIs to crafting polished, responsive user interfaces.
                </p>
                <p>
                  My background in AI and Data Science allows me to blend machine learning capabilities into real-world software products effectively.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
              variants={fadeUp}
            >
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Education</h3>
              <div className="border-l-2 border-slate-200 pl-5 py-1">
                <p className="font-heading font-bold text-slate-900 text-lg">J.J. College of Engineering and Technology</p>
                <p className="text-slate-600 mt-1">B.Tech Artificial Intelligence & Data Science</p>
                <p className="text-slate-500 text-sm mt-2 font-mono">CGPA: 8.0</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
              variants={fadeUp}
            >
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Current Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Full Stack Development
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Spring Boot
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> AI Applications
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={4}
              variants={fadeUp}
            >
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Tech Stack</h3>
              <p className="text-slate-600 leading-relaxed">
                Java, React, Next.js, Spring Boot, PostgreSQL, MongoDB, Python, Tailwind CSS, Git, Docker, Node.js.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- DARK MODE STRUCTURE (Preserved) --- */}
        <div className="hidden dark:flex flex-col items-center">
          
          {/* Profile visual — Dark Mode (Cyberpunk Ring) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-br from-[#00F5FF] to-[#7A5FFF] shadow-[0_0_40px_rgba(0,245,255,0.15)]">
                <div className="w-full h-full rounded-full bg-[var(--bg-color)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,245,255,0.05)] to-[rgba(122,95,255,0.05)]" />
                  <div className="text-center z-10 select-none">
                    <div className="text-5xl mb-2">👨‍💻</div>
                    <p className="font-heading font-bold text-white text-lg">EY</p>
                    <p className="font-mono text-[#00F5FF] text-xs mt-1">Full Stack Dev</p>
                  </div>
                  <div className="absolute inset-0 shimmer opacity-50" />
                </div>
              </div>
              <motion.div
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg glass-card border border-[rgba(0,245,255,0.2)]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-mono text-[#00F5FF] text-xs font-semibold">CGPA: 8.0</p>
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-lg glass-card border border-[rgba(122,95,255,0.2)]"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <p className="font-mono text-[#7A5FFF] text-xs font-semibold">🏆 2x Winner</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio — centered */}
          <div className="max-w-2xl text-center bg-transparent rounded-2xl p-6 md:p-8 border-transparent shadow-none mb-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
            >
              <p className="font-mono text-sm text-[#00F5FF] mb-2 font-medium">{"<bio>"}</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                Building at the intersection of
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#7A5FFF] bg-clip-text text-transparent"> Web & AI</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-3">
                I&apos;m <span className="text-white font-semibold">Elango Yuvaraj</span>, a B.Tech AI &amp;
                Data Science student from Tamil Nadu, India.
              </p>
              <p className="text-gray-400 leading-relaxed mb-3">
                I build high-performance web applications and intelligent systems —
                from designing robust backend architectures and RESTful APIs
                to crafting polished, responsive user interfaces.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                My background in AI and Data Science allows me to blend
                machine learning capabilities into real-world products.
              </p>
              <p className="font-mono text-sm text-[#00F5FF] mb-2 font-medium">{"</bio>"}</p>
            </motion.div>
          </div>

          {/* Capabilities grid — centered */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 justify-items-center max-w-3xl w-full">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[rgba(18,18,18,0.7)] border border-[rgba(0,245,255,0.08)] shadow-none group hover:scale-105 transition-all duration-200 w-full neon-border"
                >
                  <Icon size={16} className="text-transparent" style={{ color: "var(--icon-color, inherit)" }} />
                  
                  <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {cap.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Location & status — centered */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={8}
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-4 text-sm text-gray-500 font-medium"
          >
            <span className="flex items-center gap-1.5">
              <span className="text-[#00F5FF]">📍</span> Tamil Nadu, India
            </span>
            <span className="w-px h-4 bg-gray-700" />
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to work
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

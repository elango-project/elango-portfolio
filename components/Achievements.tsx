"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Code2, Zap, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "1st Prize – Paper Presentation",
    description: "Secured first place for paper presentation at the national level symposium.",
    org: "Neurax'25 (M.A.M. College)",
    date: "2025",
    color: "#FFD700",
    lightColor: "text-amber-500",
    lightBg: "bg-amber-50",
    lightBorder: "border-amber-100",
  },
  {
    icon: Award,
    title: "2nd Prize – Project Presentation",
    description: "Secured second place in project presentation showcasing innovative web solutions.",
    org: "Gusto'25 (GEC, Erode)",
    date: "2025",
    color: "#C0C0C0",
    lightColor: "text-slate-500",
    lightBg: "bg-slate-50",
    lightBorder: "border-slate-200",
  },
];

const hackathons = [
  { icon: Code2, name: "Smart India Hackathon", desc: "Participant", color: "#00F5FF", lightColor: "text-cyan-500", lightBg: "bg-cyan-50", lightBorder: "border-cyan-100" },
  { icon: Zap, name: "Smart Innovators Hackathon", desc: "Participant", color: "#7A5FFF", lightColor: "text-indigo-500", lightBg: "bg-indigo-50", lightBorder: "border-indigo-100" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-[var(--bg-color)] relative overflow-hidden">
      <div className="hidden dark:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(122,95,255,0.2)] to-transparent" />
      
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
            // 06. Recognition
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Awards & <span className="text-slate-900 dark:bg-gradient-to-r dark:from-[#00F5FF] dark:to-[#7A5FFF] dark:bg-clip-text dark:text-transparent">Achievements</span>
          </h2>
        </motion.div>

        {/* Award Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group h-full"
              >
                <div
                  className="h-full rounded-2xl p-6 lg:p-8 bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#1e1e1e] hover:border-slate-300 dark:hover:border-[rgba(122,95,255,0.2)] transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.03)] dark:shadow-none card-lift flex flex-col"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm border ${a.lightBg} ${a.lightBorder} dark:bg-transparent dark:border-transparent`}
                      style={{
                        backgroundColor: "var(--dark-bg, transparent)"
                      }}
                    >
                      <Icon size={22} className={`${a.lightColor} dark:text-transparent`} style={{ color: "var(--icon-color, inherit)" }} />
                      
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">{a.title}</h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{a.description}</p>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-gray-500 mt-auto font-medium">
                        <span>{a.org}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-700" />
                        <span>{a.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hackathon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-mono text-xs text-slate-500 dark:text-gray-600 uppercase tracking-widest mb-5 text-center font-bold">
            // Hackathon Participations
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {hackathons.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#1e1e1e] hover:border-slate-300 dark:hover:border-[rgba(0,245,255,0.15)] transition-all duration-300 group shadow-sm dark:shadow-none card-lift"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border ${h.lightBg} ${h.lightBorder} dark:bg-transparent dark:border-transparent`}
                    style={{
                      backgroundColor: "var(--dark-bg, transparent)"
                    }}
                  >
                    <Icon size={18} className={`${h.lightColor} dark:text-transparent`} style={{ color: "var(--icon-color, inherit)" }} />
                    
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">{h.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-gray-500 font-mono font-medium">{h.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

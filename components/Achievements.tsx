"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Code2, Zap, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Project Award",
    description: "Recognized for outstanding project: Engineergram – a full-stack ed-tech platform.",
    org: "Academic",
    date: "2024",
    color: "#FFD700",
  },
  {
    icon: Award,
    title: "Runner-Up – Web Dev Competition",
    description: "Secured 2nd place in a web development challenge judged by industry professionals.",
    org: "Inter-College",
    date: "2024",
    color: "#C0C0C0",
  },
];

const hackathons = [
  { icon: Code2, name: "Smart India Hackathon", desc: "National level - Hardware Edition", color: "#00F5FF" },
  { icon: Zap, name: "Hack4Change", desc: "Social Impact Hackathon", color: "#7A5FFF" },
  { icon: Medal, name: "CodeFest 2024", desc: "University Coding Competition", color: "#00F5FF" },
  { icon: Users, name: "Tech Summit", desc: "AI/ML Project Showcase", color: "#7A5FFF" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-[#050505] relative overflow-hidden">
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
            // 06. Recognition
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Awards & <span className="gradient-text">Achievements</span>
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
                whileHover={{ y: -4 }}
                className="group"
              >
                <div
                  className="h-full rounded-2xl p-7 bg-[#121212] border border-[#1e1e1e] hover:border-[rgba(122,95,255,0.2)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: `${a.color}15`, border: `1px solid ${a.color}30` }}
                    >
                      <Icon size={22} style={{ color: a.color }} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white mb-1">{a.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">{a.description}</p>
                      <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                        <span>{a.org}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
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
          <p className="font-mono text-xs text-gray-600 uppercase tracking-widest mb-5 text-center">
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
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-[#121212] border border-[#1e1e1e] hover:border-[rgba(0,245,255,0.15)] transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${h.color}12`, border: `1px solid ${h.color}25` }}
                  >
                    <Icon size={18} style={{ color: h.color }} />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-white">{h.name}</h4>
                    <p className="text-xs text-gray-500 font-mono">{h.desc}</p>
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

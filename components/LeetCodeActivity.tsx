"use client";

import { motion } from "framer-motion";
import { Code2, Trophy, Target, Award, Flame } from "lucide-react";

const LEETCODE_USERNAME = "elango__y";

// Static stats – update these with your real numbers
const leetcodeStats = {
  totalSolved: 156,
  easySolved: 80,
  easyTotal: 750,
  mediumSolved: 60,
  mediumTotal: 1550,
  hardSolved: 16,
  hardTotal: 700,
  ranking: 204561,
  contributions: 120,
};

const difficulties = [
  { label: "Easy", solved: leetcodeStats.easySolved, total: leetcodeStats.easyTotal, color: "#00b8a3" },
  { label: "Medium", solved: leetcodeStats.mediumSolved, total: leetcodeStats.mediumTotal, color: "#ffc01e" },
  { label: "Hard", solved: leetcodeStats.hardSolved, total: leetcodeStats.hardTotal, color: "#ef4743" },
];

const statCards = [
  { icon: Award, label: "Total Solved", value: leetcodeStats.totalSolved.toString(), color: "#7A5FFF" },
  { icon: Trophy, label: "Global Rank", value: leetcodeStats.ranking.toLocaleString(), color: "#00F5FF" },
  { icon: Flame, label: "Contributions", value: leetcodeStats.contributions.toString(), color: "#7A5FFF" },
];

export default function LeetCodeActivity() {
  return (
    <section id="leetcode" className="py-28 bg-[#050505] relative overflow-hidden">
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
            // Problem Solving
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            LeetCode <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Algorithm practice and competitive programming metrics
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10"
        >
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 p-5 rounded-xl bg-[#121212] border border-[#1e1e1e] hover:border-[rgba(122,95,255,0.2)] transition-all duration-300 group"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${stat.color}12`, border: `1px solid ${stat.color}25` }}
                >
                  <Icon size={18} style={{ color: stat.color }} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">{stat.label}</p>
                  <p className="text-lg font-heading font-bold text-white">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Difficulty Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="p-6 md:p-8 rounded-2xl bg-[#121212] border border-[#1e1e1e]"
        >
          <div className="flex items-center gap-2 mb-8">
            <Target size={16} className="text-[#7A5FFF]" />
            <p className="font-heading font-semibold text-white text-sm">
              Difficulty Breakdown
            </p>
          </div>

          {/* Circular stats + bars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {difficulties.map((d) => {
              const pct = Math.round((d.solved / d.total) * 100);
              return (
                <div key={d.label} className="text-center">
                  {/* Circular ring */}
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                      <motion.circle
                        cx="50" cy="50" r="42" fill="none"
                        stroke={d.color}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - pct / 100) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-heading font-bold text-white">{d.solved}</span>
                      <span className="text-[10px] font-mono text-gray-500">/ {d.total}</span>
                    </div>
                  </div>
                  <p className="font-heading font-semibold text-sm" style={{ color: d.color }}>
                    {d.label}
                  </p>
                  <p className="text-xs font-mono text-gray-500 mt-1">{pct}% solved</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* LeetCode Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={`https://leetcode.com/u/${LEETCODE_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.08)] text-gray-400 hover:text-white hover:border-[rgba(122,95,255,0.25)] text-sm font-heading transition-all duration-300"
          >
            <Code2 size={15} />
            View full LeetCode profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

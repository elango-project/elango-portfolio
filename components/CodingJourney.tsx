"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { Github, Code2, GitBranch, Star, Trophy, Database } from "lucide-react";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "elango-project";

const githubStats = [
  { icon: GitBranch, label: "Total Contributions", value: "200+", color: "#7A5FFF", lightColor: "text-indigo-500", lightBg: "bg-indigo-50", lightBorder: "border-indigo-100" },
  { icon: Code2, label: "Public Repositories", value: "10+", color: "#00F5FF", lightColor: "text-cyan-500", lightBg: "bg-cyan-50", lightBorder: "border-cyan-100" },
  { icon: Star, label: "Top Language", value: "Python", color: "#00F5FF", lightColor: "text-cyan-500", lightBg: "bg-cyan-50", lightBorder: "border-cyan-100" },
];

export default function CodingJourney() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="journey" className="py-20 bg-white dark:bg-[var(--bg-color)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-indigo-600 dark:text-[#00F5FF] text-sm tracking-widest uppercase mb-3 font-semibold">
            // Developer Activity
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-gray-100">
            Coding <span className="text-slate-900 dark:bg-gradient-to-r dark:from-[#00F5FF] dark:to-[#7A5FFF] dark:bg-clip-text dark:text-transparent">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-500 mt-4 max-w-xl mx-auto font-medium">
            My open source activity and problem-solving metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* GitHub Activity Area */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {githubStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#1e1e1e] hover:border-slate-300 dark:hover:border-[rgba(0,245,255,0.2)] transition-all duration-300 group shadow-sm dark:shadow-none card-lift"
                  >
                    <div
                      className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border ${stat.lightBg} ${stat.lightBorder} dark:bg-transparent dark:border-transparent`}
                      style={{
                        backgroundColor: "var(--dark-bg, transparent)"
                      }}
                    >
                      <Icon size={18} className={`${stat.lightColor} dark:text-transparent`} style={{ color: "var(--icon-color, inherit)" }} />
                      
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-gray-400 font-mono mb-1 font-medium">{stat.label}</p>
                      <p className="text-lg lg:text-xl font-heading font-bold text-slate-900 dark:text-white">{stat.value}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Contribution Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#1e1e1e] shadow-sm dark:shadow-none card-lift overflow-x-auto"
            >
              <div className="flex items-center justify-between gap-2 mb-8">
                <div className="flex items-center gap-2">
                  <Github size={20} className="text-slate-900 dark:text-[#00F5FF]" />
                  <p className="font-heading font-extrabold text-slate-900 dark:text-white text-lg">
                    Contribution Calendar
                  </p>
                </div>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono font-medium text-slate-500 hover:text-slate-900 dark:hover:text-[#00F5FF] transition-colors bg-slate-50 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10"
                >
                  @{GITHUB_USERNAME}
                </a>
              </div>
              <div className="min-w-[700px] flex justify-center text-slate-900 dark:text-white">
                {mounted && (
                  <GitHubCalendar
                    username={GITHUB_USERNAME}
                    colorScheme="dark"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    theme={{
                      dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* LeetCode Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full p-8 rounded-3xl bg-gradient-to-br from-[#121212] to-transparent border border-[rgba(122,95,255,0.2)] flex flex-col items-center text-center shadow-[0_8px_30px_rgba(15,23,42,0.05)] card-lift hover:shadow-[0_0_30px_rgba(122,95,255,0.1)] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[rgba(122,95,255,0.1)] border border-[rgba(122,95,255,0.3)] mb-6 shadow-none">
                <Code2 size={32} className="text-[#7A5FFF]" />
              </div>
              
              <h3 className="font-heading text-2xl font-extrabold text-white mb-2">
                LeetCode Profile
              </h3>
              
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">
                Consistent problem-solving journey mastering Data Structures & Algorithms.
              </p>

              <div className="w-full bg-black/30 rounded-2xl p-6 border border-gray-800 mb-8 mt-auto shadow-none">
                <div className="text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#7A5FFF] mb-2">
                  150+
                </div>
                <div className="text-xs font-mono text-gray-300 uppercase tracking-wider font-bold">
                  Problems Solved
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm px-4 py-3 rounded-xl bg-white/5 border border-white/10 shadow-none">
                  <span className="flex items-center gap-2 text-gray-400 font-bold">
                    <Database size={16} className="text-cyan-500" /> DSA
                  </span>
                  <span className="font-extrabold text-white">Mastery</span>
                </div>
                <a
                  href={`https://leetcode.com/u/elango__y/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-[#0a0a0a] border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900 rounded-xl transition-all duration-200 text-sm font-heading font-semibold"
                >
                  <Trophy size={16} /> View LeetCode
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { Github, Code2, GitBranch, Star } from "lucide-react";

const GITHUB_USERNAME = "elango-project";

const stats = [
  { icon: Code2, label: "Repositories", value: "10+", color: "#00F5FF" },
  { icon: GitBranch, label: "Contributions", value: "200+", color: "#7A5FFF" },
  { icon: Star, label: "Top Language", value: "Python", color: "#00F5FF" },
];

export default function GitHubActivity() {
  return (
    <section id="github" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent" />

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
            // Developer Activity
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            My open source journey and coding activity
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
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 p-5 rounded-xl bg-[#121212] border border-[#1e1e1e] hover:border-[rgba(0,245,255,0.2)] transition-all duration-300 group"
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

        {/* Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="p-6 rounded-2xl bg-[#121212] border border-[#1e1e1e] overflow-x-auto"
        >
          <div className="flex items-center gap-2 mb-5">
            <Github size={16} className="text-[#00F5FF]" />
            <p className="font-heading font-semibold text-white text-sm">
              Contribution Calendar
            </p>
          </div>
          <div className="min-w-[700px]">
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
          </div>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.08)] text-gray-400 hover:text-white hover:border-[rgba(0,245,255,0.25)] text-sm font-heading transition-all duration-300"
          >
            <Github size={15} />
            View full GitHub profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

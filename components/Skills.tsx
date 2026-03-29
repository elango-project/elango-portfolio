"use client";

import { motion } from "framer-motion";
import { Globe, Server, Database, Cpu, GitBranch } from "lucide-react";
import { type LucideIcon } from "lucide-react";

type Skill = { name: string; icon: string };
type Category = {
  title: string;
  icon: LucideIcon;
  color: string;
  proficiency: number;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Frontend",
    icon: Globe,
    color: "#00F5FF",
    proficiency: 80,
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "#7A5FFF",
    proficiency: 75,
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "PHP", icon: "🐘" },
      { name: "Flask", icon: "🧪" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "#00F5FF",
    proficiency: 70,
    skills: [{ name: "MySQL", icon: "🗄️" }],
  },
  {
    title: "Core CS",
    icon: Cpu,
    color: "#7A5FFF",
    proficiency: 65,
    skills: [
      { name: "Data Structures", icon: "📊" },
      { name: "OOP", icon: "🏗️" },
    ],
  },
  {
    title: "Tools & Design",
    icon: GitBranch,
    color: "#00F5FF",
    proficiency: 70,
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "GitHub", icon: "🐙" },
      { name: "Figma", icon: "🖌️" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-mono text-gray-500">Proficiency</span>
        <span className="text-xs font-mono" style={{ color }}>{value}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />
      </div>
    </div>
  );
}

function SkillCard({ cat }: { cat: Category }) {
  const CatIcon = cat.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="relative h-full bg-[#121212] border border-[#1e1e1e] rounded-xl p-6 transition-all duration-300 hover:border-[rgba(0,245,255,0.2)] overflow-hidden">
        {/* Top gradient border on hover */}
        <div
          className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
          }}
        />

        {/* Category Icon — centered */}
        <div className="flex justify-center mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{
              background: `${cat.color}12`,
              border: `1px solid ${cat.color}25`,
            }}
          >
            <CatIcon size={22} style={{ color: cat.color }} />
          </div>
        </div>

        {/* Category Title — centered */}
        <h3
          className="font-heading text-base font-bold mb-4 text-center"
          style={{ color: cat.color }}
        >
          {cat.title}
        </h3>

        {/* Technology List — centered */}
        <div className="flex flex-wrap justify-center gap-2">
          {cat.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]"
            >
              <span className="text-sm">{skill.icon}</span>
              <span className="font-mono text-gray-300 text-xs">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <ProgressBar value={cat.proficiency} color={cat.color} />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const topRow = categories.slice(0, 3);
  const bottomRow = categories.slice(3);

  return (
    <section id="skills" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(122,95,255,0.25)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.15)] to-transparent" />

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
            // 02. Tech Stack
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            My toolkit for building complete, production-ready applications
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {topRow.map((cat) => (
              <SkillCard key={cat.title} cat={cat} />
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {bottomRow.map((cat) => (
              <div key={cat.title} className="w-full sm:w-[calc(33.333%-8px)]">
                <SkillCard cat={cat} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="font-mono text-sm text-gray-600">
            <span className="text-[#00F5FF]">//</span> Always learning, always building
          </p>
        </motion.div>
      </div>
    </section>
  );
}

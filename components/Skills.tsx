"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, BrainCircuit, Wrench, Code2 } from "lucide-react";
import { type LucideIcon } from "lucide-react";

type Skill = { name: string };
type Category = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Java" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "PHP" },
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Spring Boot" },
      { name: "Django" },
      { name: "Flask" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function SkillRow({ cat }: { cat: Category }) {
  const CatIcon = cat.icon;
  return (
    <motion.div
      variants={rowVariants}
      className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 md:p-6 bg-white dark:bg-[#121212] border border-slate-200 dark:border-[rgba(0,245,255,0.08)] rounded-xl hover:shadow-md hover:border-slate-300 dark:hover:border-[rgba(0,245,255,0.2)] transition-all duration-200 shadow-sm dark:shadow-none"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 sm:w-48 shrink-0">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 text-slate-700 dark:bg-transparent dark:border dark:border-transparent dark:text-[#00F5FF]">
          <CatIcon size={20} />
        </div>
        <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
          {cat.title}
        </h3>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {cat.skills.map((skill) => (
          <div
            key={skill.name}
            className="px-3 py-1.5 rounded-lg text-sm bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:bg-[rgba(255,255,255,0.03)] dark:border-[rgba(255,255,255,0.06)] dark:text-gray-300 font-mono transition-colors duration-200 dark:hover:border-[rgba(0,245,255,0.3)] dark:hover:text-[#00F5FF] cursor-default"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-[var(--bg-color)] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-slate-500 dark:text-[#7A5FFF] text-sm tracking-widest uppercase mb-3 font-semibold">
            // 02. Tech Stack
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-gray-100">
            Skills &amp; <span className="text-slate-900 dark:bg-gradient-to-r dark:from-[#00F5FF] dark:to-[#7A5FFF] dark:bg-clip-text dark:text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-500 mt-4 max-w-xl mx-auto font-medium">
            My toolkit for building complete, production-ready applications
          </p>
        </motion.div>

        {/* Compact Skill Rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4"
        >
          {categories.map((cat) => (
            <SkillRow key={cat.title} cat={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

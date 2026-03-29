"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, BookOpen, Code2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  color: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "Egram",
    description:
      "Full stack ed-tech platform featuring authentication, interactive dashboards, and database-driven content management system for engineering students.",
    features: [
      "Role-based authentication & authorization",
      "Interactive course dashboard system",
      "MySQL database architecture with optimized queries",
      "Responsive admin panel for content management",
    ],
    tech: ["PHP", "MySQL", "HTMl", "JavaScript", "CSS3"],
    color: "#00F5FF",
    image: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/elango-project",
  },
  {
    title: "LexGuard AI",
    description:
      "AI-powered legal assistant chatbot that helps users understand legal information, analyze documents, and navigate legal queries using advanced NLP.",
    features: [
      "Natural language query processing",
      "Legal document analysis & summarization",
      "Context-aware conversational AI interface",
      "REST API integration with Flask backend",
    ],
    tech: ["Python", "AI APIs", "JavaScript", "Flask"],
    color: "#7A5FFF",
    image: "/project2.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/elango-project",
  },
  {
    title: "Fake News Detector",
    description:
      "Machine learning web application that classifies news articles as real or fake using Natural Language Processing and trained classification models.",
    features: [
      "NLP-based text classification pipeline",
      "Trained ML models with 90%+ accuracy",
      "Real-time article analysis via web interface",
      "Flask API serving model predictions",
    ],
    tech: ["Python", "Flask", "NLP", "Scikit-learn"],
    color: "#00F5FF",
    image: "/project3.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/elango-project",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#050505] relative overflow-hidden">
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
            // 03. My Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Real-world applications built with passion and precision
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-[#121212] border border-[#1e1e1e] hover:border-[rgba(0,245,255,0.2)] transition-all duration-300">
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden border-b border-[#1e1e1e]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 mix-blend-overlay opacity-50 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${project.color}40 0%, transparent 100%)` }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#121212] to-transparent" />
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <Code2 size={14} style={{ color: project.color, flexShrink: 0, marginTop: 4 }} />
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                      Key Features
                    </p>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md"
                        style={{
                          color: project.color,
                          background: `${project.color}10`,
                          border: `1px solid ${project.color}20`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[rgba(255,255,255,0.04)]">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
                      style={{ color: project.color, background: `${project.color}10` }}
                    >
                      <ExternalLink size={11} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-gray-400 hover:text-white border border-[rgba(255,255,255,0.06)] transition-colors"
                    >
                      <Github size={11} /> GitHub
                    </a>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-[#7A5FFF] ml-auto border border-[rgba(122,95,255,0.15)] hover:bg-[rgba(122,95,255,0.06)] transition-colors">
                      <BookOpen size={11} /> Case Study
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/elango-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.08)] text-gray-400 hover:text-white hover:border-[rgba(0,245,255,0.25)] text-sm font-heading transition-all duration-300"
          >
            <Github size={15} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

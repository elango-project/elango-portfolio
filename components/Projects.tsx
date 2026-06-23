"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, BookOpen, Code2, Star, Activity, CheckCircle, Users, Video, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  color: string;
  image: string;
  images?: string[];
  liveUrl?: string;
  githubUrl: string;
  caseStudyUrl: string;
};

const featuredProject: Project = {
  id: "egram",
  title: "Egram (EducationGram)",
  description:
    "Egram (EducationGram) is a full-stack e-learning platform built using React, Spring Boot, PostgreSQL, JWT Authentication, Render, and Vercel. The platform enables students to access educational content, assessments, career opportunities, and structured learning resources through a secure and scalable architecture.",
  features: [
    "JWT Authentication",
    "Student Platform",
    "Assessments",
    "Jobs & Internships",
    "Educational Content",
    "Scalable Architecture",
  ],
  tech: ["React", "Spring Boot", "PostgreSQL", "JWT", "Render", "Vercel"],
  color: "#00F5FF",
  image: "/projects/egram/egram-dashboard.png", 
  images: [
    "/projects/egram/egram-dashboard.png",
    "/projects/egram/egram-assessment.png"
  ],
  liveUrl: "https://egram-alpha.vercel.app/",
  githubUrl: "https://github.com/elango-project",
  caseStudyUrl: "/projects/egram",
};

const secondaryProjects: Project[] = [
  {
    id: "lexguard-ai",
    title: "LexGuard AI",
    description:
      "AI-powered legal assistant chatbot that helps users understand legal information, analyze documents, and navigate legal queries using advanced NLP.",
    features: [
      "Natural language query processing",
      "Legal document analysis & summarization",
      "Context-aware conversational AI",
    ],
    tech: ["Python", "Flask", "AI APIs", "JavaScript"],
    color: "#7A5FFF",
    image: "/projects/lexguard/lexguard-dashboard.png",
    githubUrl: "https://github.com/elango-project",
    caseStudyUrl: "/projects/lexguard-ai",
  },
  {
    id: "fake-news-detector",
    title: "Fake News Detector",
    description:
      "Machine learning web application that classifies news articles as real or fake using Natural Language Processing and trained classification models.",
    features: [
      "NLP-based text classification pipeline",
      "Trained ML models with 90%+ accuracy",
      "Flask API serving model predictions",
    ],
    tech: ["Python", "Flask", "NLP", "Scikit-learn"],
    color: "#00F5FF",
    image: "/projects/fake-news-detection/fake-news-detection.png",
    githubUrl: "https://github.com/elango-project",
    caseStudyUrl: "/projects/fake-news-detection",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function Projects() {
  const [egramImageIndex, setEgramImageIndex] = useState(0);
  const egramImages = featuredProject.images || [featuredProject.image];

  return (
    <section id="projects" className="py-20 bg-[var(--bg-color)] relative overflow-hidden">
      <div className="hidden dark:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.2)] to-transparent" />
      <div className="dark:hidden absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-cyan-600 dark:text-[#00F5FF] text-sm tracking-widest uppercase mb-3 font-semibold">
            // 03. My Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-gray-100">
            Featured <span className="text-slate-900 dark:bg-gradient-to-r dark:from-[#00F5FF] dark:to-[#7A5FFF] dark:bg-clip-text dark:text-transparent">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-500 mt-4 max-w-xl mx-auto font-medium">
            Real-world applications built with passion and precision
          </p>
        </motion.div>

        {/* Featured Project - Egram */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariants}
          custom={0}
          className="mb-12 md:mb-16"
        >
          <div className="relative flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-white dark:bg-[#121212] border border-slate-200 dark:border-[rgba(0,245,255,0.2)] shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:shadow-[0_0_40px_rgba(0,245,255,0.1)] card-lift">
            
            {/* Image Section (Left) - Interactive Carousel */}
            <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-[rgba(0,245,255,0.1)] bg-slate-100 dark:bg-[#0a0a0a] group flex items-center justify-center p-6 lg:p-10">
              {/* Decorative Browser Wrapper */}
              <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-black group-hover:scale-105 transition-transform duration-700 ease-out">
                {/* Browser Header */}
                <div className="h-8 bg-slate-100 dark:bg-[#1a1a1a] border-b border-slate-200 dark:border-gray-800 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                </div>
                <div className="relative aspect-video w-full bg-slate-50 dark:bg-black">
                  <Image
                    key={egramImageIndex}
                    src={egramImages[egramImageIndex]}
                    alt={`${featuredProject.title} screenshot ${egramImageIndex + 1}`}
                    fill
                    className="object-cover animate-in fade-in duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Carousel Controls */}
                  {egramImages.length > 1 && (
                    <>
                      <button 
                        onClick={() => setEgramImageIndex((prev) => (prev === 0 ? egramImages.length - 1 : prev - 1))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors z-10"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button 
                        onClick={() => setEgramImageIndex((prev) => (prev === egramImages.length - 1 ? 0 : prev + 1))}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors z-10"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={16} />
                      </button>
                      
                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {egramImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setEgramImageIndex(idx)}
                            aria-label={`Go to screenshot ${idx + 1}`}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === egramImageIndex 
                                ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                                : 'bg-white/40 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Content Section (Right) */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-[rgba(245,158,11,0.1)] border border-amber-200 dark:border-[rgba(245,158,11,0.3)] text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Star size={12} fill="currentColor" /> Featured
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-[rgba(16,185,129,0.1)] border border-emerald-200 dark:border-[rgba(16,185,129,0.3)] text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Activity size={12} /> Live Platform
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-[rgba(0,245,255,0.1)] border border-cyan-200 dark:border-[rgba(0,245,255,0.3)] text-cyan-600 dark:text-[#00F5FF] text-xs font-bold uppercase tracking-wider">
                  <CheckCircle size={12} /> Production Ready
                </span>
              </div>

              <h3 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              {/* Startup Style Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-slate-100 dark:border-gray-800">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Users size={20} className="text-cyan-500 dark:text-[#00F5FF]" /> Full Stack
                  </span>
                  <span className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">Architecture</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Video size={20} className="text-indigo-500 dark:text-[#7A5FFF]" /> Scalable
                  </span>
                  <span className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">Infrastructure</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-md text-slate-700 bg-slate-100 border border-transparent dark:text-gray-200 dark:bg-white/5 dark:border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons - Strict Hierarchy */}
              <div className="flex flex-wrap items-center gap-3 mt-auto pt-4">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-xl shadow-sm hover:scale-[1.03] transition-all duration-200 text-sm"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                <Link
                  href={featuredProject.caseStudyUrl}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-xl shadow-sm hover:scale-[1.03] transition-all duration-200 text-sm"
                >
                  <BookOpen size={16} /> Case Study
                </Link>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a] border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900 rounded-xl transition-all duration-200 text-sm font-semibold ml-auto"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {secondaryProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i + 1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group"
            >
              <div className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#1e1e1e] card-lift transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:shadow-none dark:hover:border-[rgba(122,95,255,0.3)]">
                {/* Image */}
                {project.image ? (
                  <div className="relative h-48 w-full overflow-hidden border-b border-slate-200 dark:border-[#1e1e1e] bg-slate-50 dark:bg-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-black/60 to-transparent opacity-80" />
                  </div>
                ) : (
                  <div className="relative h-48 w-full overflow-hidden border-b border-slate-200 dark:border-[#1e1e1e] bg-slate-100 dark:bg-[#1a1a1a] flex flex-col items-center justify-center">
                    <Code2 size={32} className="text-slate-300 dark:text-gray-700 mb-2" />
                    <span className="text-slate-400 dark:text-gray-500 font-mono text-[10px] uppercase tracking-widest font-bold">Screenshot Pending</span>
                  </div>
                )}

                {/* Card body */}
                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-heading text-xl font-extrabold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <Code2 size={18} className="text-slate-400 dark:text-transparent" style={{ color: "var(--icon-color, inherit)", flexShrink: 0, marginTop: 4 }} />
                    
                  </div>

                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md text-slate-600 bg-slate-100 border border-transparent dark:text-gray-300 dark:bg-white/5 dark:border-white/10 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-5 border-t border-[rgba(255,255,255,0.08)]">
                    <Link
                      href={project.caseStudyUrl}
                      className="flex items-center gap-1.5 px-4 py-2 bg-white text-black font-semibold rounded-xl shadow-sm hover:scale-[1.03] transition-all duration-200 text-xs"
                    >
                      <BookOpen size={14} /> Case Study
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#0a0a0a] border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900 rounded-xl transition-all duration-200 text-xs font-semibold ml-auto"
                    >
                      <Github size={14} /> GitHub
                    </a>
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900 rounded-xl transition-all duration-200 text-sm font-heading font-semibold"
          >
            <Github size={16} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

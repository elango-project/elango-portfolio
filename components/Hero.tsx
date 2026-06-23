"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

const TYPING_STRINGS = [
  "I build scalable web applications.",
  "I craft AI-powered platforms.",
  "I engineer backend systems.",
  "I design database-driven solutions.",
];

function useTypingEffect(strings: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setStrIdx((s) => (s + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx, strings, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypingEffect(TYPING_STRINGS);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-color)] pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(0,245,255,0.06) 0%, rgba(122,95,255,0.04) 40%, transparent 70%)"
          }}
        />
        {/* Border corners - dark mode only */}
        <div className="hidden dark:block absolute top-0 left-0 w-32 h-32 border-t border-l border-[rgba(0,245,255,0.15)]" />
        <div className="hidden dark:block absolute top-0 right-0 w-32 h-32 border-t border-r border-[rgba(122,95,255,0.15)]" />
        <div className="hidden dark:block absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[rgba(122,95,255,0.15)]" />
        <div className="hidden dark:block absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[rgba(0,245,255,0.15)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,245,255,0.25)] bg-[rgba(0,245,255,0.04)] text-sm font-mono text-[#00F5FF]">
                <span className="w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF] animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="text-white">Elango </span>
                <span className="bg-gradient-to-r from-[#00F5FF] to-[#7A5FFF] bg-clip-text text-transparent">Yuvaraj</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-6 max-w-xl">
              <p className="font-heading text-lg sm:text-xl text-gray-400 leading-relaxed font-medium">
                Full Stack Developer building scalable web applications and AI-powered systems.
              </p>
            </motion.div>

            {/* Typing animation */}
            <motion.div variants={itemVariants} className="mb-10 h-8 flex items-center">
              <p className="font-mono text-base sm:text-lg text-gray-300">
                <span className="text-[#00F5FF]">&gt;</span>{" "}
                <span>{typed}</span>
                <motion.span
                  className="inline-block w-0.5 h-5 bg-[#00F5FF] ml-1 align-middle shadow-[0_0_8px_#00F5FF]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-xl shadow-sm hover:scale-[1.03] transition-all duration-200 text-sm font-heading"
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0a0a0a] border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900 rounded-xl transition-all duration-200 text-sm font-heading font-semibold"
              >
                <Mail size={16} />
                Hire Me
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0a0a0a] border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900 rounded-xl transition-all duration-200 text-sm font-heading font-semibold"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              {[
                { value: "150+", label: "LeetCode" },
                { value: "100+", label: "Day Streak" },
                { value: "5+", label: "Projects" },
                { value: "2x", label: "Winner" },
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <p className="font-heading text-2xl font-extrabold text-transparent bg-gradient-to-r from-[#00F5FF] to-[#7A5FFF] bg-clip-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 font-mono font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Professional Image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end order-1 lg:order-2 w-full mb-10 lg:mb-0">
            <div className="group relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl p-1 bg-gradient-to-br from-[#00F5FF] to-[#7A5FFF] shadow-[0_0_30px_rgba(0,245,255,0.15)] transition-all duration-300 ease-out hover:scale-[1.05] hover:-rotate-1 hover:shadow-[0_0_50px_rgba(0,245,255,0.3)] cursor-pointer">
              <div className="w-full h-full rounded-xl overflow-hidden bg-[var(--bg-color)] relative">
                <Image
                  src="/Admin-2.jpg"
                  alt="Elango Yuvaraj"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 384px, 500px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-[#00F5FF] transition-colors group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="group-hover:text-cyan-500 dark:group-hover:text-[#00F5FF]" />
      </motion.button>
    </section>
  );
}

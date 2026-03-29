"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(0,245,255,0.06) 0%, rgba(122,95,255,0.04) 40%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[rgba(0,245,255,0.15)]" />
        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[rgba(122,95,255,0.15)]" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[rgba(122,95,255,0.15)]" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[rgba(0,245,255,0.15)]" />
      </div>

      {/* Main content — everything centered via flex */}
      <div className="relative z-10 w-full px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,245,255,0.25)] bg-[rgba(0,245,255,0.04)] text-sm font-mono text-[#00F5FF]">
              <span className="w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF] animate-pulse" />
              Available for opportunities
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative group">
              <motion.div
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-br from-[#00F5FF] to-[#7A5FFF] shadow-[0_0_40px_rgba(0,245,255,0.2)]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#050505] relative border-4 border-[#050505]">
                  <Image
                    src="/Admin.jpeg"
                    alt="Elango Yuvaraj"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 160px, 192px"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="mb-5 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-white">Elango </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Yuvaraj</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-8 text-center max-w-2xl">
            <p className="font-heading text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
              Building scalable web applications and AI-powered systems
              <span className="text-[rgba(0,245,255,0.5)]"> — </span>
              from robust backends to polished user interfaces.
            </p>
          </motion.div>

          {/* Typing animation */}
          <motion.div variants={itemVariants} className="mb-10 h-10 flex items-center justify-center">
            <p className="font-mono text-base sm:text-lg md:text-xl text-gray-300">
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#7A5FFF] text-black font-heading font-bold text-sm shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_60px_rgba(0,245,255,0.6)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[rgba(0,245,255,0.35)] text-[#00F5FF] font-heading font-semibold text-sm hover:bg-[rgba(0,245,255,0.06)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[rgba(122,95,255,0.35)] text-[#7A5FFF] font-heading font-semibold text-sm hover:bg-[rgba(122,95,255,0.06)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-10"
          >
            {[
              { value: "2+", label: "Years Coding" },
              { value: "5+", label: "Projects Built" },
              { value: "8.0", label: "CGPA" },
              { value: "2x", label: "Award Winner" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1 font-mono">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[#00F5FF] transition-colors group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="group-hover:text-[#00F5FF]" />
      </motion.button>
    </section>
  );
}

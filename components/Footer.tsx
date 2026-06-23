"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/elango-project", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/elango-y/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:elango12092005@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--bg-color)] border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 mb-10">
          {/* Column 1: Branding & About */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-extrabold text-slate-900 dark:text-white text-2xl">
              <span className="text-cyan-500 dark:text-[#00F5FF]">E</span>lango<span className="text-indigo-500 dark:text-[#7A5FFF]">.</span>
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Full Stack Developer crafting highly scalable web applications, robust APIs, and intelligent AI-powered solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-500 mt-2 font-medium">
              <MapPin size={14} className="text-indigo-500 dark:text-[#7A5FFF]" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Socials */}
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">
                Explore
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 dark:text-gray-500 hover:text-cyan-600 dark:hover:text-[#00F5FF] text-sm flex items-center gap-2 transition-colors group font-medium"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-cyan-500 dark:text-[#00F5FF]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">
                Connect
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((l) => {
                  const Icon = l.icon;
                  return (
                    <motion.a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={l.label}
                      className="w-10 h-10 rounded-full border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#121212] shadow-sm dark:shadow-none flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-[#00F5FF] hover:border-cyan-200 dark:hover:border-[#00F5FF] transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-gray-800 to-transparent my-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-gray-500 font-mono font-medium">
          <p>© {year} Elango Yuvaraj. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-indigo-500 dark:text-[#7A5FFF] animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

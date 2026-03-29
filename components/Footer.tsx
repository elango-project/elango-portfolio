"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/elango-project", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/elango-y/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:elango12092005@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side */}
          <div className="flex flex-col text-center md:text-left gap-1">
            <h3 className="font-heading font-bold text-white text-xl">Elango Yuvaraj</h3>
            <p className="text-[#00F5FF] font-mono text-sm">Full Stack Developer</p>
            <p className="text-gray-400 text-sm mt-1">Building Web &amp; AI Systems</p>
          </div>

          {/* Right side: Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((l) => {
              const Icon = l.icon;
              return (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="w-11 h-11 rounded-full border border-gray-800 bg-[#121212] flex items-center justify-center text-gray-400 hover:text-[#00F5FF] hover:border-[#00F5FF] hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600 font-mono">
          <p>© {year} Elango Yuvaraj. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-[#7A5FFF]" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

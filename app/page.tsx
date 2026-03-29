"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

// Dynamically imported to improve load performance
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const GitHubActivity = dynamic(() => import("@/components/GitHubActivity"), { ssr: false });
const LeetCodeActivity = dynamic(() => import("@/components/LeetCodeActivity"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: true });
const Education = dynamic(() => import("@/components/Education"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const Resume = dynamic(() => import("@/components/Resume"), { ssr: true });

// Dynamically imported to avoid SSR issues
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubActivity />
      <LeetCodeActivity />
      <Experience />
      <Achievements />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

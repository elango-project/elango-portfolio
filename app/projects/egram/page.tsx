import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import ScreenshotGallery from "@/components/ScreenshotGallery";

export const metadata: Metadata = {
  title: "Egram | Case Study",
  description:
    "Egram is a full-stack e-learning platform built with React, Spring Boot, and PostgreSQL enabling students to access courses and assessments securely.",
  openGraph: {
    title: "Egram | Case Study",
    description:
      "Egram is a full-stack e-learning platform built with React, Spring Boot, and PostgreSQL enabling students to access courses and assessments securely.",
    images: [{ url: "/projects/egram/egram-dashboard.png", width: 1200, height: 630, alt: "Egram Project" }],
  },
};

export default function EgramCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00F5FF] mb-8 transition-colors font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Hero Banner */}
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 border border-[rgba(0,245,255,0.2)] shadow-2xl">
          <Image
            src="/projects/egram/egram-dashboard.png"
            alt="Egram Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-[rgba(0,245,255,0.2)] border border-[#00F5FF] text-[#00F5FF] text-xs font-bold uppercase tracking-wider">
              Featured Project
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Egram (EducationGram)
            </h1>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap items-center gap-4 mb-16 pb-8 border-b border-gray-200 dark:border-gray-800">
          <a
            href="https://egram-alpha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00F5FF] text-black font-bold text-sm hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all"
          >
            <ExternalLink size={16} /> Live Application
          </a>
          <a
            href="https://github.com/elango-project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-bold transition-all"
          >
            <Github size={16} /> Source Code
          </a>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
            Egram is a comprehensive full-stack e-learning platform that enables students to access courses, educational content, assessments, and career opportunities through a secure and scalable architecture.
          </p>
        </section>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-gray-200 dark:border-gray-800">
            <h3 className="font-heading text-xl font-bold mb-3 text-red-500">The Problem</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Engineering students often struggle with fragmented learning resources and platforms that lack structured tracking. Existing solutions are either too expensive or lack interactive, engineering-focused tools and proper assessment mechanisms.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-[rgba(0,245,255,0.2)]">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#00F5FF]">The Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              A centralized, database-driven platform featuring secure JWT authentication, a structured course management system, and an integrated assessment dashboard. Built for scale using Spring Boot and React, enabling seamless interaction and progress tracking.
            </p>
          </div>
        </div>

        {/* Architecture & Tech Stack */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900 dark:text-white">Architecture & Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["React (Vite)", "Spring Boot", "PostgreSQL (Neon)", "JWT Auth", "Render", "Vercel"].map((tech) => (
              <div key={tech} className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5">
                <CheckCircle size={14} className="text-[#00F5FF]" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The platform utilizes a robust Spring Boot backend coupled with an optimized PostgreSQL database hosted on Neon. The frontend ensures a highly responsive experience using React and Vite, focusing on minimal load times, and is deployed via Vercel while the backend APIs are hosted on Render.
          </p>
        </section>

        {/* Screenshot Gallery */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900 dark:text-white">Screenshot Gallery</h2>
          <ScreenshotGallery 
            accentColor="#00F5FF"
            images={[
              { src: "/projects/egram/egram-dashboard.png", alt: "Egram Dashboard", label: "Student Dashboard" },
              { src: "/projects/egram/egram-assessment.png", alt: "Assessments System", label: "Assessments System" },
            ]}
          />
        </section>

        {/* Challenges & Future Improvements */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">Challenges Faced</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Implementing secure, stateful interactions across a decoupled architecture (React frontend + Spring Boot backend) required careful JWT management and CORS configurations. Handling complex relational data for courses, enrollments, and quiz assessments in PostgreSQL also required optimized JPA queries to prevent N+1 issues and ensure fast load times.
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">Future Improvements</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Integration of WebSockets for real-time notifications and chat.</li>
            <li>Implementation of AI-driven course recommendations based on assessment performance.</li>
            <li>Enhancing the admin panel with detailed analytics and visualization charts.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

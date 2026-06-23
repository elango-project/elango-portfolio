import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, CheckCircle } from "lucide-react";
import ScreenshotGallery from "@/components/ScreenshotGallery";

export const metadata: Metadata = {
  title: "LexGuard AI | Case Study",
  description:
    "LexGuard AI is an AI-powered legal assistant chatbot utilizing advanced NLP to analyze documents and answer legal queries.",
  openGraph: {
    title: "LexGuard AI | Case Study",
    description:
      "LexGuard AI is an AI-powered legal assistant chatbot utilizing advanced NLP to analyze documents and answer legal queries.",
    images: [{ url: "/projects/lexguard/lexguard-dashboard.png", width: 1200, height: 630, alt: "LexGuard AI Project" }],
  },
};

export default function LexGuardCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#7A5FFF] mb-8 transition-colors font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Hero Banner */}
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 border border-[rgba(122,95,255,0.2)] shadow-2xl">
          <Image
            src="/projects/lexguard/lexguard-dashboard.png"
            alt="LexGuard AI Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              LexGuard AI
            </h1>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap items-center gap-4 mb-16 pb-8 border-b border-gray-200 dark:border-gray-800">
          <a
            href="https://github.com/elango-project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7A5FFF] text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(122,95,255,0.4)] transition-all"
          >
            <Github size={16} /> View Source Code
          </a>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
            LexGuard AI is an intelligent legal assistant designed to democratize access to legal information. Leveraging Natural Language Processing, it analyzes legal documents, detects risky clauses, and provides context-aware conversational guidance for users navigating complex legal landscapes.
          </p>
        </section>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-gray-200 dark:border-gray-800">
            <h3 className="font-heading text-xl font-bold mb-3 text-red-500">The Problem</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Legal documents are notoriously dense and difficult for the average person to comprehend. Seeking basic legal advice is often prohibitively expensive, leaving many individuals vulnerable to unfair contract clauses or uninformed about their rights.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-[rgba(122,95,255,0.2)]">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#7A5FFF]">The Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              An AI-driven platform that digests legal jargon and translates it into accessible language. It features an automated risk-detection system for contracts and a conversational agent to guide users through standard legal queries immediately.
            </p>
          </div>
        </div>

        {/* Architecture & Tech Stack */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900 dark:text-white">Architecture & Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Python", "Flask", "NLP APIs", "JavaScript", "REST Architecture", "Data Processing"].map((tech) => (
              <div key={tech} className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5">
                <CheckCircle size={14} className="text-[#7A5FFF]" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The system is built on a Python Flask backend serving RESTful APIs that connect the frontend chat interface to powerful NLP models. Document parsing pipelines process text data securely before executing inference to extract legal entities and risk factors.
          </p>
        </section>

        {/* Screenshot Gallery */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900 dark:text-white">Screenshot Gallery</h2>
          <ScreenshotGallery 
            accentColor="#7A5FFF"
            images={[
              { src: "/projects/lexguard/lexguard-dashboard.png", alt: "LexGuard Dashboard", label: "Dashboard" },
              { src: "/projects/lexguard/lexguard-document-scanner.png", alt: "Document Scanner", label: "Document Scanner" },
              { src: "/projects/lexguard/lexguard-Ai-Legal-Advicer.png", alt: "AI Legal Advisor", label: "AI Legal Advisor" },
              { src: "/projects/lexguard/lexguard-Ai-Legal-Advicer-2.png", alt: "Legal Advisor Result", label: "Legal Advisor Result" },
              { src: "/projects/lexguard/lexguard-past-case-matcher.png", alt: "Case Matcher", label: "Case Matcher" },
              { src: "/projects/lexguard/lexguard-protect-me.png", alt: "Emergency Mode", label: "Emergency Mode" },
            ]}
          />
        </section>

        {/* Challenges & Future Improvements */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">Challenges Faced</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Tuning the NLP context window to maintain state during long, complex legal conversations was technically demanding. Furthermore, ensuring the AI responses were grounded in factual legal principles required implementing stringent prompt-engineering safeguards and retrieval-augmented generation (RAG) techniques.
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">Future Improvements</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Integration of specialized vector databases for faster and larger legal document retrieval.</li>
            <li>Expanding jurisdiction-specific legal knowledge bases.</li>
            <li>Implementing an OCR module for scanning physical legal documents.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

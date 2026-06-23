import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Fake News Detector | Case Study",
  description:
    "A machine learning web application that classifies news articles as real or fake using NLP and trained classification models.",
  openGraph: {
    title: "Fake News Detector | Case Study",
    description:
      "A machine learning web application that classifies news articles as real or fake using NLP and trained classification models.",
  },
};

export default function FakeNewsCaseStudy() {
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
        <div className="relative w-full h-48 rounded-3xl overflow-hidden mb-12 border border-[rgba(0,245,255,0.2)] shadow-2xl bg-gradient-to-br from-slate-900 to-black flex items-center p-8 md:p-12">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Fake News Detector
            </h1>
            <p className="text-gray-400 mt-4 max-w-xl">
              Machine learning web application that classifies news articles as real or fake using Natural Language Processing.
            </p>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap items-center gap-4 mb-16 pb-8 border-b border-gray-200 dark:border-gray-800">
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
            The Fake News Detector is a machine learning-based web application designed to combat misinformation. By utilizing Natural Language Processing (NLP) techniques, the platform processes news text and predicts its authenticity with high accuracy via trained classification models.
          </p>
        </section>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-gray-200 dark:border-gray-800">
            <h3 className="font-heading text-xl font-bold mb-3 text-red-500">The Problem</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              The rapid spread of misinformation online threatens public discourse. Identifying fake news manually is tedious and scales poorly, necessitating automated systems that can analyze text linguistics to detect deceptive patterns quickly.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-[rgba(0,245,255,0.2)]">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#00F5FF]">The Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              A comprehensive NLP pipeline that ingests article text, tokenizes and vectorizes the input, and feeds it into a pre-trained machine learning model, returning an instant authenticity probability score to the user.
            </p>
          </div>
        </div>

        {/* Architecture & Tech Stack */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900 dark:text-white">Architecture & Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Python", "Scikit-Learn", "Flask", "NLTK", "Pandas", "JavaScript", "HTML/CSS"].map((tech) => (
              <div key={tech} className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5">
                <CheckCircle size={14} className="text-[#00F5FF]" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The core machine learning model is trained on diverse datasets using Scikit-Learn and exported as a serialized model. A lightweight Flask API loads this model to serve real-time predictions to a web interface constructed with vanilla web technologies.
          </p>
        </section>

        {/* Challenges & Future Improvements */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">Challenges Faced</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            The primary challenge was data preprocessing—handling varying text structures, removing stop words, and properly vectorizing textual data to prevent overfitting. Optimizing the Flask API response time when loading the Scikit-learn model into memory was also crucial for a smooth user experience.
          </p>

          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">Future Improvements</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Upgrading the model from traditional ML to Deep Learning (e.g., BERT or LSTM) for higher accuracy.</li>
            <li>Adding a web scraping feature to analyze live URLs instead of raw text.</li>
            <li>Implementing crowdsourced feedback loops to retrain the model over time.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

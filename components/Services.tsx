"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Server, BrainCircuit, Database } from "lucide-react";

const services = [
  {
    title: "Full Stack Apps",
    description: "End-to-end web applications with responsive frontends and robust backend architectures.",
    icon: MonitorSmartphone,
    lightColor: "text-slate-700",
    lightBg: "bg-slate-100",
    lightBorder: "border-slate-200",
    darkColor: "#00F5FF",
  },
  {
    title: "Backend APIs",
    description: "Secure, high-performance RESTful APIs and microservices designed for seamless integration and scale.",
    icon: Server,
    lightColor: "text-slate-700",
    lightBg: "bg-slate-100",
    lightBorder: "border-slate-200",
    darkColor: "#7A5FFF",
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems integrating machine learning models, NLP, and AI APIs into real-world products.",
    icon: BrainCircuit,
    lightColor: "text-slate-700",
    lightBg: "bg-slate-100",
    lightBorder: "border-slate-200",
    darkColor: "#00F5FF",
  },
  {
    title: "Database Design",
    description: "Optimized relational and NoSQL database schemas tailored for complex data modeling and fast retrieval.",
    icon: Database,
    lightColor: "text-slate-700",
    lightBg: "bg-slate-100",
    lightBorder: "border-slate-200",
    darkColor: "#7A5FFF",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-[var(--bg-color)] relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <p className="font-mono text-cyan-600 dark:text-[#00F5FF] text-sm tracking-widest uppercase mb-3 font-semibold">
            // What I Can Build
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-gray-100">
            Professional <span className="text-slate-900 dark:bg-gradient-to-r dark:from-[#00F5FF] dark:to-[#7A5FFF] dark:bg-clip-text dark:text-transparent">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="w-full bg-white dark:bg-[rgba(18,18,18,0.7)] border border-slate-200 dark:border-[rgba(0,245,255,0.08)] rounded-xl p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col h-full shadow-sm dark:shadow-none dark:card-lift"
              >
                {/* Icon Container */}
                <div 
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border ${service.lightBg} ${service.lightBorder} dark:bg-transparent dark:border-transparent`} 
                  style={{
                    backgroundColor: "var(--dark-bg, transparent)",
                  }}
                >
                  <Icon 
                    size={20} 
                    className={`${service.lightColor} dark:text-transparent`}
                    style={{ 
                      color: "var(--icon-color, inherit)" 
                    }}
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

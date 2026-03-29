"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { useEffect } from "react";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
};

export default function ResumeModal({ isOpen, onClose, pdfUrl }: ResumeModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col bg-[#0a0a0a] border border-[#00F5FF]/30 rounded-2xl shadow-[0_0_50px_rgba(0,245,255,0.15)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#121212]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(0,245,255,0.1)] flex items-center justify-center border border-[#00F5FF]/20">
                  <FileText size={16} className="text-[#00F5FF]" />
                </div>
                <h3 className="text-white font-heading font-bold">Resume Preview</h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={pdfUrl}
                  download
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgba(0,245,255,0.1)] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all font-mono text-xs font-bold"
                >
                  <Download size={14} />
                  Download
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all font-mono text-xs"
                >
                  <ExternalLink size={14} />
                  Open Full
                </a>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors ml-2"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-1 bg-[#1a1a1a] relative overflow-hidden">
              {/* Fallback loading indicator behind iframe */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-gray-700 border-t-[#00F5FF] animate-spin" />
                <p className="font-mono text-sm tracking-widest uppercase">Loading PDF...</p>
              </div>
              
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="absolute inset-0 w-full h-full border-0 z-10"
                title="Resume PDF Preview"
              />
            </div>

            {/* Mobile Actions Footer */}
            <div className="sm:hidden flex items-center gap-3 px-4 py-4 border-t border-gray-800 bg-[#121212]">
              <a
                href={pdfUrl}
                download
                className="flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-lg bg-[#00F5FF] text-black font-heading font-bold text-sm shadow-[0_0_15px_rgba(0,245,255,0.3)]"
              >
                <Download size={16} />
                Download
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-lg border border-gray-700 text-gray-300 font-heading text-sm"
              >
                <ExternalLink size={16} />
                Open
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

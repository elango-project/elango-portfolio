"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Screenshot = {
  src: string;
  alt: string;
  label: string;
};

export default function ScreenshotGallery({ images, accentColor }: { images: Screenshot[], accentColor: string }) {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="group relative w-full h-48 md:h-56 rounded-xl overflow-hidden border border-slate-200 dark:border-gray-800 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
            style={{ '--hover-color': accentColor } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 z-10 transition-colors duration-300" />
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-4 px-4 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium font-heading">{img.label}</p>
            </div>
            {/* Hover border effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--hover-color)] rounded-xl z-30 transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full transition-colors z-[60]"
            >
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-7xl max-h-[90vh] aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                fill 
                className="object-contain" 
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 pointer-events-none">
                <p className="text-white text-xl md:text-2xl font-bold font-heading">{selectedImage.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

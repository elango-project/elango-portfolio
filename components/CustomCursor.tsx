"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      }
    };

    const detectPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(!!isLink);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", detectPointer);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", detectPointer);
    };
  }, []);

  return (
    <>
      {/* Outer glow ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99999] transition-all duration-150 ease-out"
        style={{ willChange: "transform" }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-200 ${
            isPointer
              ? "border-[#7A5FFF] shadow-[0_0_20px_rgba(122,95,255,0.8)] scale-150"
              : "border-[#00F5FF] shadow-[0_0_15px_rgba(0,245,255,0.6)]"
          }`}
          style={{ opacity: 0.8 }}
        />
      </div>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 pointer-events-none z-[99999] rounded-full transition-all duration-75 ease-out ${
          isPointer ? "bg-[#7A5FFF]" : "bg-[#00F5FF]"
        }`}
        style={{
          boxShadow: isPointer
            ? "0 0 8px rgba(122,95,255,0.9)"
            : "0 0 8px rgba(0,245,255,0.9)",
          willChange: "transform",
        }}
      />
    </>
  );
}

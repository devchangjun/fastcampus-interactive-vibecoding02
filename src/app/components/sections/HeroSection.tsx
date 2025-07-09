"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Transform scroll position to scale value
  const scale = useTransform(scrollY, [0, 1000], [1, 1.3]);
  return (
    <section
      ref={ref}
      className="sticky top-0 z-0 min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Dark Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale,
          transformOrigin: "center center",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Modern Architecture"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Logo Container */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[11rem] font-bold tracking-wider select-none leading-none"
          style={{
            fontFamily:
              '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',
          }}
        >
          {/* THE SPACE */}
          <span className="block relative overflow-hidden">
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                THE SPACE
              </motion.span>
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
                }}
              >
                THE SPACE
              </span>
            </motion.span>
          </span>

          {/* LAB */}
          <span className="block relative overflow-hidden mt-4">
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: "easeInOut",
                }}
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                LAB
              </motion.span>
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
                }}
              >
                LAB
              </span>
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-8 text-white/80 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide"
          style={{
            fontFamily:
              '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',
          }}
        >
          공간에 새로운 가치를 더하는 혁신적인 디자인
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "../commons/TransitionProvider";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { startTransition } = useTransition();

  // Transform scroll position to scale value
  const scale = useTransform(scrollY, [0, 1000], [1, 1.3]);

  const handlePortfolioClick = () => {
    startTransition("/portfolio");
  };

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
          src="/images/background/background.png"
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          {/* 포트폴리오 보기 버튼 */}
          <motion.button
            onClick={handlePortfolioClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="group relative px-10 py-5 bg-white text-black font-semibold tracking-wider text-lg transition-all duration-300 hover:bg-gray-50 overflow-hidden shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              포트폴리오 보기
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          {/* 프로젝트 문의하기 버튼 */}
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Link
              href="/contact"
              className="group relative px-10 py-5 border-2 border-white text-white font-semibold tracking-wider text-lg transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">프로젝트 문의하기</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </motion.svg>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

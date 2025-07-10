"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 1.2, // 검은색 화면이 완전히 사라진 후 나타남
          },
        }}
        exit={{
          opacity: 1,
          transition: {
            duration: 0.1,
          },
        }}
      >
        {children}

        {/* 검은색 트랜지션 오버레이 */}
        <motion.div
          className="fixed inset-0 bg-black z-[9999] origin-bottom"
          initial={{
            scaleY: 0,
            transformOrigin: "bottom",
          }}
          animate={{
            scaleY: [0, 1, 1, 0],
            transformOrigin: "bottom",
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.4, 0.6, 1], // 0-40%: 올라오기, 40-60%: 멈춤, 60-100%: 사라지기
            ease: [0.76, 0, 0.24, 1],
          }}
          exit={{
            scaleY: 0,
            transformOrigin: "bottom",
            transition: {
              duration: 0.1,
            },
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

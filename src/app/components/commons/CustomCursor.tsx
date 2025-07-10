"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);

      // 마우스 위치의 요소들 확인
      const elementsAtPoint = document.elementsFromPoint(e.clientX, e.clientY);
      const hasPortfolioAttr = elementsAtPoint.some((el) => el.getAttribute("data-cursor-hover") === "portfolio");

      if (hasPortfolioAttr && !isHovered) {
        console.log("🎯 Found portfolio element at cursor position!", elementsAtPoint);
        setIsHovered(true);
      } else if (!hasPortfolioAttr && isHovered) {
        console.log("👋 No portfolio element at cursor position");
        setIsHovered(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // 간단한 테스트: 3초마다 포트폴리오 버튼 확인
    const testInterval = setInterval(() => {
      const buttons = document.querySelectorAll('[data-cursor-hover="portfolio"]');
      console.log(`🔍 [${new Date().toLocaleTimeString()}] Found ${buttons.length} portfolio buttons`);

      if (buttons.length > 0) {
        console.log("First button:", buttons[0]);
        console.log("Button style:", window.getComputedStyle(buttons[0] as Element));
      }
    }, 3000);

    // 이벤트 리스너 등록
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(testInterval);
    };
  }, [cursorX, cursorY, isHovered]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          mixBlendMode: "difference",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isHovered ? 2.5 : 1,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
        >
          <motion.div
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
            animate={{
              backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "transparent",
              borderColor: isHovered ? "rgba(255, 255, 255, 1)" : "white",
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
          >
            <motion.span
              className="text-black text-sm font-medium tracking-wider"
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              style={{
                fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              }}
            >
              {isHovered ? "View" : ""}
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

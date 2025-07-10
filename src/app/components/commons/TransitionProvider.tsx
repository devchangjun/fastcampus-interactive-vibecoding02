"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";

interface TransitionContextType {
  startTransition: (href: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};

interface TransitionProviderProps {
  children: ReactNode;
}

export default function TransitionProvider({ children }: TransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const startTransition = (href: string) => {
    setIsTransitioning(true);

    // 1.5초 후에 실제 페이지 이동 (검은 화면이 완전히 덮은 후)
    setTimeout(() => {
      router.push(href);

      // 0.5초 후에 트랜지션 종료
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 1500);
  };

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning }}>
      {children}

      {/* 트랜지션 오버레이 */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{
              scaleY: 0,
              transformOrigin: "bottom",
            }}
            animate={{
              scaleY: [0, 1, 1, 0],
              transformOrigin: "bottom",
            }}
            exit={{
              scaleY: 0,
              transformOrigin: "bottom",
            }}
            transition={{
              duration: 2,
              times: [0, 0.35, 0.65, 1], // 0-35%: 올라오기, 35-65%: 멈춤, 65-100%: 사라지기
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 bg-black z-[9999]"
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

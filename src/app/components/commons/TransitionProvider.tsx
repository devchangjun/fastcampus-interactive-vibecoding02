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

    // 1초 후에 실제 페이지 이동
    setTimeout(() => {
      router.push(href);

      // 0.5초 후에 트랜지션 종료
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 1000);
  };

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning }}>
      {children}

      {/* 트랜지션 오버레이 */}
      <AnimatePresence>
        {isTransitioning && (
          <>
            {/* 메인 원형 트랜지션 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 200 }}
              exit={{ scale: 200, opacity: 0 }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="fixed top-1/2 left-1/2 w-4 h-4 bg-black z-[9999] -translate-x-1/2 -translate-y-1/2"
              style={{
                borderRadius: "50%",
              }}
            />

            {/* 보조 오버레이 (더 부드러운 효과) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="fixed inset-0 bg-black z-[9998]"
            />
          </>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

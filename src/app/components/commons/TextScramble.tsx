"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleChars?: string;
  duration?: number;
  delay?: number;
  trigger?: "inView" | "immediate";
}

const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = "",
  scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?~`",
  duration = 2000,
  delay = 0,
  trigger = "inView",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrambleText = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const originalText = text;
    const textLength = originalText.length;
    let currentIteration = 0;
    const totalIterations = Math.floor(duration / 50); // 50ms interval

    const scrambleInterval = setInterval(() => {
      let newText = "";

      for (let i = 0; i < textLength; i++) {
        if ((currentIteration * textLength) / totalIterations > i) {
          // 이미 완성된 문자는 원본 텍스트 사용
          newText += originalText[i];
        } else {
          // 아직 스크램블 중인 문자는 랜덤 문자 사용
          if (originalText[i] === " ") {
            newText += " ";
          } else {
            newText += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
        }
      }

      setDisplayText(newText);
      currentIteration++;

      if (currentIteration >= totalIterations) {
        setDisplayText(originalText);
        setIsAnimating(false);
        clearInterval(scrambleInterval);
      }
    }, 50);

    return () => clearInterval(scrambleInterval);
  };

  useEffect(() => {
    if (trigger === "immediate") {
      const timeoutId = setTimeout(() => {
        scrambleText();
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [delay, scrambleText, trigger]);

  useEffect(() => {
    if (trigger === "inView" && isInView) {
      const timeoutId = setTimeout(() => {
        scrambleText();
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [isInView, delay, scrambleText, trigger]);

  return (
    <span ref={ref} className={className}>
      {displayText || text}
    </span>
  );
};

export default TextScramble;

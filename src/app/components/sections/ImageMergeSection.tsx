"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ImageMergeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  // 건축물 이미지 데이터
  const architectureImages = [
    {
      id: 1,
      src: "/images/projects/building1.jpg",
      alt: "Modern Skyscraper",
    },
    {
      id: 2,
      src: "/images/projects/building2.jpg",
      alt: "Contemporary Office Building",
    },
    {
      id: 3,
      src: "/images/projects/building3.jpg",
      alt: "Architectural Design",
    },
    {
      id: 4,
      src: "/images/projects/building4.jpg",
      alt: "Modern Architecture",
    },
    {
      id: 5,
      src: "/images/projects/building5.jpg",
      alt: "Urban Building",
    },
    {
      id: 6,
      src: "/images/projects/building6.jpg",
      alt: "Commercial Architecture",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const images = imagesRef.current;

    if (!section || images.some((img) => !img)) return;

    const setupAnimation = () => {
      // 간단한 뷰포트 기준 반지름 (이미지 크기에 맞춰 조정)
      const radius = Math.min(window.innerWidth * 0.28, 400);

      // 각 이미지의 초기 원형 위치 설정
      images.forEach((image, index) => {
        if (!image) return;

        const angle = (index * 360) / images.length;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        // 초기 위치 설정
        gsap.set(image, {
          x: x,
          y: y,
          rotation: angle + 90,
          scale: 1,
          transformOrigin: "center center",
        });
      });

      // 텍스트 초기 설정
      if (textRef.current) {
        gsap.set(textRef.current, {
          scale: 1,
          transformOrigin: "center center",
        });
      }

      // ScrollTrigger 애니메이션 생성
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100vh",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // 애니메이션 진행률
            const progress = self.progress;

            // 이미지 애니메이션
            images.forEach((image, index) => {
              if (!image) return;

              // 목표 위치 (중앙)
              const targetX = 0;
              const targetY = 0;
              const targetRotation = 0;
              const targetScale = 0.8;

              // 현재 위치에서 목표 위치로 보간
              const angle = (index * 360) / images.length;
              const radian = (angle * Math.PI) / 180;
              const startX = Math.cos(radian) * radius;
              const startY = Math.sin(radian) * radius;

              const currentX = startX + (targetX - startX) * progress;
              const currentY = startY + (targetY - startY) * progress;
              const currentRotation = angle + 90 + (targetRotation - (angle + 90)) * progress;
              const currentScale = 1 + (targetScale - 1) * progress;

              gsap.set(image, {
                x: currentX,
                y: currentY,
                rotation: currentRotation,
                scale: currentScale,
              });
            });

            // 텍스트 스케일 애니메이션 (스크롤에 따라 점점 커짐)
            if (textRef.current) {
              const textScale = 1 + progress * 2; // 1배에서 3배까지 커짐
              gsap.set(textRef.current, {
                scale: textScale,
              });
            }
          },
        },
      });

      return tl;
    };

    const animation = setupAnimation();

    return () => {
      animation?.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 w-full h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-25" />
      </div>

      {/* 중앙 컨테이너 */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* PORTFOLIO 텍스트 */}
        <div
          ref={textRef}
          className="absolute z-20 text-6xl sm:text-7xl lg:text-8xl font-bold tracking-wider select-none"
          style={{
            mixBlendMode: "difference",
            color: "white",
            fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          }}
        >
          PORTFOLIO
        </div>

        {/* 이미지들 */}
        {architectureImages.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => {
              imagesRef.current[index] = el;
            }}
            className="absolute z-10"
          >
            <div
              className="relative overflow-hidden"
              style={{
                width: `clamp(200px, 22vw, 288px)`,
                height: `clamp(200px, 22vw, 288px)`,
              }}
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="22vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* 스크롤 힌트 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-500">
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-sm">스크롤하여 탐색하기</p>
        </div>
      </div>
    </section>
  );
}

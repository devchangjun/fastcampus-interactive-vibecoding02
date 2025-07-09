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

  // 건축물 이미지 데이터
  const architectureImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      alt: "Modern Skyscraper",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
      alt: "Contemporary Office Building",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop",
      alt: "Architectural Design",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
      alt: "Modern Architecture",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=1000&auto=format&fit=crop",
      alt: "Urban Building",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000&auto=format&fit=crop",
      alt: "Commercial Architecture",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const images = imagesRef.current;

    if (!section || images.some((img) => !img)) return;

    // 반응형 사이즈 계산
    const getResponsiveValues = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // 모바일
        return { radius: 220 };
      } else if (width < 1024) {
        // 태블릿
        return { radius: 300 };
      } else {
        // 데스크톱
        return { radius: 380 };
      }
    };

    const setupAnimation = () => {
      const { radius } = getResponsiveValues();

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
          },
        },
      });

      return tl;
    };

    let animation = setupAnimation();

    // 리사이즈 이벤트 처리
    const handleResize = () => {
      animation?.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
      animation = setupAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      animation?.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 min-h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-25" />
      </div>

      {/* 중앙 컨테이너 */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 이미지들 */}
        {architectureImages.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => {
              imagesRef.current[index] = el;
            }}
            className="absolute z-10"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 288px"
              />
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

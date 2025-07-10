"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData, ProjectData } from "../../lib/projectData";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalProjects: number;
  scrollYProgress: MotionValue<number>;
}

function ProjectCard({ project, index, totalProjects, scrollYProgress }: ProjectCardProps) {
  const targetScale = 1 - (totalProjects - index) * 0.05;
  const isLast = index === totalProjects - 1;

  const scale = useTransform(
    scrollYProgress,
    [index * (1 / totalProjects), (index + 1) * (1 / totalProjects)],
    [1, targetScale]
  );

  const top = useTransform(
    scrollYProgress,
    [index * (1 / totalProjects), (index + 1) * (1 / totalProjects)],
    ["0%", "-5%"]
  );

  return (
    <motion.div
      className="sticky top-0 flex items-center justify-center overflow-hidden bg-white"
      style={{
        zIndex: 40 + index,
        height: isLast ? "100vh" : "105vh",
      }}
    >
      <motion.div
        className="relative w-full h-screen bg-white origin-top"
        style={{
          scale,
          top,
        }}
      >
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority={index < 2} />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* 카테고리 및 연도 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="px-4 py-2 border border-white/30 text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="text-white/70 text-sm font-medium tracking-wider">{project.year}</span>
              </motion.div>

              {/* 프로젝트 번호 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <span className="text-6xl sm:text-7xl lg:text-8xl font-light text-white/20 tracking-wider">
                  {String(project.id).padStart(2, "0")}
                </span>
              </motion.div>

              {/* 제목 */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
                style={{
                  fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                }}
              >
                {project.title}
              </motion.h2>

              {/* 영문 제목 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/70 font-light tracking-[0.2em] mb-8"
              >
                {project.subtitle}
              </motion.p>

              {/* 설명 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-12"
              >
                {project.description}
              </motion.p>

              {/* CTA 버튼 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href={`/portfolio/${project.id}`}
                  className="group relative inline-block px-8 py-4 border border-white text-white font-medium tracking-wider transition-all duration-300 hover:bg-white hover:text-transparent backdrop-blur-sm cursor-pointer"
                  data-cursor-hover="portfolio"
                >
                  <span className="relative z-10">프로젝트 보기</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 하단 스크롤 인디케이터 (첫 번째 카드에만) */}
        {index === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium tracking-wider uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-px h-12 bg-white/30"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="relative">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          totalProjects={projectsData.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

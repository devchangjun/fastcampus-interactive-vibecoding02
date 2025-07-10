"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import TransitionLink from "../../components/commons/TransitionLink";
import { ProjectData } from "../../lib/projectData";

interface ProjectDetailClientProps {
  project: ProjectData;
  relatedProjects: ProjectData[];
  prevProject: ProjectData | null;
  nextProject: ProjectData | null;
}

export default function ProjectDetailClient({
  project,
  relatedProjects,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // 갤러리 이미지 배열 (메인 이미지 + 갤러리)
  const allImages = [project.image, ...(project.gallery || [])];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            scale: heroScale,
          }}
        >
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        </motion.div>

        <motion.div className="relative z-10 h-full flex items-end" style={{ opacity: heroOpacity }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="max-w-4xl">
              {/* 프로젝트 메타 정보 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4 mb-6"
              >
                <span className="px-4 py-2 border border-white/30 text-white text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="text-white/70 text-sm font-medium tracking-wider">{project.year}</span>
                {project.location && (
                  <span className="text-white/70 text-sm font-medium tracking-wider">{project.location}</span>
                )}
              </motion.div>

              {/* 프로젝트 제목 */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight"
                style={{
                  fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                }}
              >
                {project.title}
              </motion.h1>

              {/* 영문 제목 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 font-light tracking-[0.2em] mb-6"
              >
                {project.subtitle}
              </motion.p>

              {/* 프로젝트 설명 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-white/90 leading-relaxed max-w-2xl mb-8"
              >
                {project.description}
              </motion.p>

              {/* 프로젝트 정보 그리드 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {project.area && (
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">면적</p>
                    <p className="text-white font-medium">{project.area}</p>
                  </div>
                )}
                {project.client && (
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">클라이언트</p>
                    <p className="text-white font-medium">{project.client}</p>
                  </div>
                )}
                {project.architect && (
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">설계</p>
                    <p className="text-white font-medium">{project.architect}</p>
                  </div>
                )}
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">완공</p>
                  <p className="text-white font-medium">{project.year}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium tracking-wider uppercase">더 보기</span>
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
      </section>

      {/* 프로젝트 상세 내용 */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* 프로젝트 컨셉 */}
            {project.concept && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">프로젝트 컨셉</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{project.concept}</p>
              </motion.div>
            )}

            {/* 특징 및 자재 */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* 주요 특징 */}
              {project.features && project.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 특징</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-black flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* 사용 자재 */}
              {project.materials && project.materials.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">사용 자재</h3>
                  <ul className="space-y-3">
                    {project.materials.map((material, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-gray-400 flex-shrink-0" />
                        <span className="text-gray-700">{material}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* 이미지 갤러리 */}
            {allImages.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">프로젝트 갤러리</h3>

                {/* 메인 이미지 */}
                <div className="relative h-[60vh] mb-6 overflow-hidden bg-gray-100">
                  <Image
                    src={allImages[selectedImageIndex]}
                    alt={`${project.title} - 이미지 ${selectedImageIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                </div>

                {/* 썸네일 리스트 */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                  {allImages.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-square overflow-hidden ${
                        selectedImageIndex === index ? "ring-2 ring-black" : "opacity-70 hover:opacity-100"
                      } transition-all duration-300`}
                    >
                      <Image src={image} alt={`${project.title} - 썸네일 ${index + 1}`} fill className="object-cover" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 관련 프로젝트 */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">다른 프로젝트</h2>
              <p className="text-gray-600">더 많은 프로젝트를 만나보세요</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TransitionLink href={`/portfolio/${relatedProject.id}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 mb-4">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {relatedProject.category} • {relatedProject.year}
                      </p>
                      <p className="text-gray-700 line-clamp-2">{relatedProject.description}</p>
                    </div>
                  </TransitionLink>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 네비게이션 */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 이전 프로젝트 */}
            {prevProject ? (
              <TransitionLink href={`/portfolio/${prevProject.id}`} className="group flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-300 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                  <span className="text-sm">←</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">이전 프로젝트</p>
                  <p className="font-medium text-gray-900 group-hover:text-black">{prevProject.title}</p>
                </div>
              </TransitionLink>
            ) : (
              <div />
            )}

            {/* 목록으로 돌아가기 */}
            <TransitionLink
              href="/portfolio"
              className="group px-6 py-3 border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all"
            >
              <span className="font-medium">포트폴리오 목록</span>
            </TransitionLink>

            {/* 다음 프로젝트 */}
            {nextProject ? (
              <TransitionLink href={`/portfolio/${nextProject.id}`} className="group flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">다음 프로젝트</p>
                  <p className="font-medium text-gray-900 group-hover:text-black">{nextProject.title}</p>
                </div>
                <div className="w-8 h-8 flex items-center justify-center border border-gray-300 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                  <span className="text-sm">→</span>
                </div>
              </TransitionLink>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

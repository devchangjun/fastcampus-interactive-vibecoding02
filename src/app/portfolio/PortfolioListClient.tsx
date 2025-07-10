"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "../lib/projectData";

interface PortfolioListClientProps {
  projects: ProjectData[];
}

export default function PortfolioListClient({ projects }: PortfolioListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Transform scroll position to scale value
  const scale = useTransform(scrollY, [0, 100], [1, 2.6]);

  // 카테고리 목록 생성
  const categories = ["전체", ...Array.from(new Set(projects.map((project) => project.category)))];

  // 필터링된 프로젝트
  const filteredProjects =
    selectedCategory === "전체" ? projects : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden bg-black">
        {/* Background Image with Dark Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            scale,
            transformOrigin: "center center",
          }}
        >
          <Image
            src="/images/projects/building1.jpg"
            alt="Portfolio Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{
                fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              }}
            >
              포트폴리오
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              더 스페이스 랩의 혁신적이고 고급스러운 건축 프로젝트들을 만나보세요.
              <br />각 공간마다 담긴 새로운 가치와 디자인 철학을 경험하실 수 있습니다.
            </p>
            <div className="w-20 h-1 bg-white mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 필터링 섹션 */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-black hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 프로젝트 그리드 */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link href={`/portfolio/${project.id}`}>
                  {/* 프로젝트 이미지 */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* 호버 시 카테고리 오버레이 */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* 프로젝트 정보 */}
                  <div className="space-y-3">
                    {/* 메타 정보 */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                      {project.location && (
                        <>
                          <span>•</span>
                          <span>{project.location}</span>
                        </>
                      )}
                    </div>

                    {/* 제목 */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>

                    {/* 영문 제목 */}
                    <p className="text-sm text-gray-500 font-light tracking-wider uppercase">{project.subtitle}</p>

                    {/* 설명 */}
                    <p className="text-gray-700 leading-relaxed line-clamp-2">{project.description}</p>

                    {/* 추가 정보 */}
                    {project.area && (
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>면적: {project.area}</span>
                      </div>
                    )}

                    {/* 보기 링크 */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-black font-medium group-hover:gap-3 transition-all duration-300">
                        자세히 보기
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* 프로젝트가 없을 때 */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">선택하신 카테고리에 해당하는 프로젝트가 없습니다.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* 문의 유도 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">더 많은 프로젝트가 궁금하신가요?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              더 스페이스 랩만의 독창적인 디자인과 공간 철학으로
              <br />
              당신의 꿈을 현실로 만들어보세요.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-black text-white font-medium tracking-wider transition-all duration-300 hover:bg-gray-800"
              >
                <span className="relative z-10">프로젝트 문의하기</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

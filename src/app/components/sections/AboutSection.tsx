"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TextScramble from "../commons/TextScramble";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative z-20 py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="inline-block text-sm font-medium text-gray-500 tracking-wider uppercase"
                >
                  About The Space Lab
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  공간의 가치를
                  <br />
                  <TextScramble
                    text="재정의합니다"
                    className="text-gray-400"
                    duration={1500}
                    delay={800}
                    scrambleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
                  />
                </motion.h2>

                <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  더 스페이스 랩은 고급 주거 및 상업 공간 설계를 전문으로 하는 건축회사입니다. 우리는 단순히 공간을
                  만드는 것이 아니라, 그 안에서 살아갈 사람들의 삶을 디자인합니다.
                </motion.p>
              </div>

              {/* Company Vision */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">우리의 비전</h3>
                <p className="text-gray-600 leading-relaxed">
                  혁신적이고 고급스러운 디자인 철학을 담아내어, 건축 및 디자인 업계에서 공간의 가치를 극대화하는
                  선도적인 브랜드 이미지를 확립합니다.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <button className="group relative px-8 py-4 bg-black text-white font-medium tracking-wider transition-all duration-300 hover:bg-gray-800">
                  <span className="relative z-10">더 알아보기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div variants={itemVariants} className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
              <Image
                src="/images/about-image.jpg"
                alt="Modern Interior Design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

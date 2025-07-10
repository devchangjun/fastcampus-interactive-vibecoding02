"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import TextScramble from "../commons/TextScramble";

const services = [
  {
    id: 1,
    title: "고급 주거 공간",
    subtitle: "RESIDENTIAL SPACE",
    description: "단독 주택, 빌라, 펜트하우스 등 프리미엄 주거공간을 위한 맞춤형 설계 서비스",
    features: ["맞춤형 공간 설계", "고급 자재 선별", "스마트홈 시스템", "친환경 설계"],
    images: [
      { src: "/images/projects/building1.jpg", alt: "Modern Residential Design" },
      { src: "/images/projects/building2.jpg", alt: "Luxury Villa Architecture" },
    ],
    color: "from-slate-900 to-gray-800",
  },
  {
    id: 2,
    title: "상업 공간",
    subtitle: "COMMERCIAL SPACE",
    description: "오피스, 리테일샵, 호텔, 레스토랑 등 상업적 목적에 최적화된 공간 디자인",
    features: ["브랜드 아이덴티티 반영", "고객 동선 최적화", "수익성 극대화", "유지보수 효율성"],
    images: [
      { src: "/images/projects/building3.jpg", alt: "Commercial Office Design" },
      { src: "/images/projects/building4.jpg", alt: "Retail Space Architecture" },
    ],
    color: "from-gray-900 to-slate-800",
  },
  {
    id: 3,
    title: "통합 서비스",
    subtitle: "INTEGRATED SERVICE",
    description: "인테리어 디자인, 리모델링, 조경 설계 등 공간의 모든 영역을 아우르는 종합 서비스",
    features: ["인테리어 디자인", "리모델링", "조경 설계", "컨설팅"],
    images: [
      { src: "/images/projects/building5.jpg", alt: "Interior Design Project" },
      { src: "/images/projects/building6.jpg", alt: "Landscape Architecture" },
    ],
    color: "from-black to-gray-900",
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl cursor-pointer"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {service.images.map((image, imgIndex) => (
          <motion.div
            key={imgIndex}
            className="absolute inset-0"
            initial={{ opacity: imgIndex === 0 ? 1 : 0 }}
            animate={{
              opacity: activeImage === imgIndex ? 1 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        ))}

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10 text-white">
        {/* Top Content */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-sm font-medium tracking-wider uppercase opacity-80"
          >
            {service.subtitle}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
            className="text-3xl lg:text-4xl font-bold leading-tight"
          >
            {service.title}
          </motion.h3>
        </div>

        {/* Bottom Content */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            className="text-white/90 leading-relaxed"
          >
            {service.description}
          </motion.p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="space-y-2"
          >
            {service.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm text-white/80">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </motion.div>

          {/* Image Indicators */}
          <div className="flex space-x-2">
            {service.images.map((_, imgIndex) => (
              <button
                key={imgIndex}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeImage === imgIndex ? "bg-white" : "bg-white/40"
                }`}
                onClick={() => setActiveImage(imgIndex)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function ServiceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-24">
            <motion.div
              variants={itemVariants}
              className="inline-block text-sm font-medium text-gray-500 tracking-wider uppercase mb-6"
            >
              Our Services
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              전문적인
              <br />
              <TextScramble
                text="공간 솔루션"
                className="text-gray-400"
                duration={1500}
                delay={800}
                scrambleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
              />
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              더 스페이스 랩은 고객의 다양한 요구에 맞춰 주거부터 상업공간까지,
              <br />
              공간의 모든 영역에서 최적의 솔루션을 제공합니다.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div variants={containerVariants} className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16 lg:mt-24">
            <button className="group relative px-8 py-4 bg-black text-white font-medium tracking-wider transition-all duration-300 hover:bg-gray-800">
              <span className="relative z-10">프로젝트 문의하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["-50% end", "end start"],
  });

  // 푸터 패럴렉스 효과 (서비스 섹션 뒤에 숨어있다가 스르륵 내려옴)
  const y = useTransform(scrollYProgress, [0, 1], [-800, 700]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.footer ref={footerRef} className="relative bg-white text-black overflow-hidden -mt-48 z-0" style={{ y }}>
      {/* 패럴렉스 배경 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-50 to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gray-300/15 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* 메인 푸터 콘텐츠 */}
        <div className="py-32 lg:py-48">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* 왼쪽 - 회사 정보 */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider">
                  THE SPACE
                  <br />
                  <span className="text-gray-600">LAB</span>
                </h2>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-md">
                  공간에 새로운 가치를 더하는 혁신적인 디자인으로 당신의 꿈을 현실로 만듭니다.
                </p>
              </div>

              {/* 연락처 정보 */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="text-gray-600 text-sm font-medium tracking-wider uppercase">Contact</div>
                <div className="space-y-2 text-gray-700">
                  <p>서울특별시 강남구 테헤란로 123, 10층</p>
                  <p>Tel. 02-1234-5678</p>
                  <p>Email. hello@thespacelab.kr</p>
                </div>
              </motion.div>

              {/* 소셜 링크 */}
              <motion.div variants={itemVariants} className="flex space-x-6">
                {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wider"
                  >
                    {social}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* 오른쪽 - 네비게이션 & 서비스 */}
            <motion.div variants={itemVariants} className="space-y-12">
              {/* 서비스 링크 */}
              <div className="space-y-6">
                <div className="text-gray-600 text-sm font-medium tracking-wider uppercase">Services</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "주거 공간 설계",
                    "상업 공간 설계",
                    "인테리어 디자인",
                    "공간 컨설팅",
                    "리모델링",
                    "프로젝트 관리",
                  ].map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="text-gray-700 hover:text-black transition-colors duration-300 text-sm"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              {/* 회사 정보 링크 */}
              <div className="space-y-6">
                <div className="text-gray-600 text-sm font-medium tracking-wider uppercase">Company</div>
                <div className="space-y-4">
                  {["About", "Portfolio", "News", "Career", "Contact"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-gray-700 hover:text-black transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 구분선 */}
        <motion.div variants={itemVariants} className="border-t border-gray-300" />

        {/* 하단 카피라이트 */}
        <motion.div
          variants={itemVariants}
          className="py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <div className="text-gray-600 text-sm">© 2024 The Space Lab. All rights reserved.</div>
          <div className="flex space-x-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-black transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}

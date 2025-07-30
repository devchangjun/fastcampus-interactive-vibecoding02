# THE SPACE LAB - 인터랙티브 포트폴리오 웹사이트

> **바이브코딩 인터랙티브 웹 개발 강의 예제 프로젝트**

고급 주거 및 상업 공간 설계 전문 건축회사 "THE SPACE LAB"의 포트폴리오 웹사이트입니다. 현대적인 웹 기술과 인터랙티브 애니메이션을 활용하여 사용자 경험을 극대화한 웹사이트입니다.

## 주요 기능

### ✨ 페이지 트랜지션 효과

- **Wipe 애니메이션**: 검은색 배경이 아래에서 위로 올라오는 스케일 애니메이션
- **상태 보존**: 이전 페이지의 상태를 유지하면서 부드러운 전환
- **일시 정지 효과**: 애니메이션 완료 후 잠시 멈춘 후 다음 페이지 표시

### 🎨 인터랙티브 애니메이션

- **커스텀 커서**: 마우스 움직임에 반응하는 커스텀 커서
- **텍스트 스크램블 효과**: 타이핑 애니메이션으로 텍스트 표시
- **패럴랙스 스크롤**: 스크롤에 따른 요소들의 시차 애니메이션
- **이미지 머지 효과**: 스크롤에 따른 이미지 합성 애니메이션

### 📱 반응형 디자인

- **모바일 우선**: 모바일 → 태블릿 → PC 순서로 개발
- **적응형 레이아웃**: 모든 디바이스에서 최적화된 경험
- **터치 친화적**: 모바일에서도 부드러운 인터랙션

## 🛠️ 기술 스택

### Frontend Framework

- **Next.js 15.3.5**: App Router 아키텍처
- **React 19.0.0**: 최신 React 기능 활용
- **TypeScript 5**: 타입 안전성 보장

### Styling & Animation

- **Tailwind CSS v4**: 유틸리티 퍼스트 CSS 프레임워크
- **Framer Motion 12.23.0**: React 애니메이션 라이브러리
- **GSAP 3.13.0**: 고성능 애니메이션 라이브러리

### Development Tools

- **ESLint**: 코드 품질 관리
- **Turbopack**: 빠른 개발 서버
- **PostCSS**: CSS 전처리

## 📦 설치 및 실행

### 1. 저장소 클론

```bash
git clone [repository-url]
cd the-space-lab
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 브라우저에서 확인

```
http://localhost:3000
```

### 5. 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 📁 프로젝트 구조

```
the-space-lab/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── commons/          # 재사용 가능한 컴포넌트
│   │   │   │   ├── CustomCursor.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── TextScramble.tsx
│   │   │   │   ├── PageTransition.tsx
│   │   │   │   └── TransitionLink.tsx
│   │   │   └── sections/         # 페이지 섹션 컴포넌트
│   │   │       ├── HeroSection.tsx
│   │   │       ├── AboutSection.tsx
│   │   │       ├── ImageMergeSection.tsx
│   │   │       ├── PortfolioSection.tsx
│   │   │       └── ServiceSection.tsx
│   │   ├── portfolio/            # 포트폴리오 페이지
│   │   │   ├── page.tsx
│   │   │   ├── PortfolioListClient.tsx
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── ProjectDetailClient.tsx
│   │   ├── lib/                  # 유틸리티 및 데이터
│   │   │   └── projectData.ts
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   ├── page.tsx              # 홈페이지
│   │   └── globals.css           # 글로벌 스타일
│   └── ...
├── public/                       # 정적 파일
│   ├── images/
│   ├── videos/
│   └── ...
└── ...
```

## 🎯 학습 포인트

### 1. 인터랙티브 애니메이션 구현

- **Framer Motion**: `motion`, `AnimatePresence`, `useScroll` 등
- **GSAP**: 고급 애니메이션 효과와 타임라인
- **커스텀 훅**: 재사용 가능한 애니메이션 로직

### 2. 페이지 트랜지션 시스템

- **React Context**: 전역 상태 관리
- **커스텀 링크 컴포넌트**: Next.js Link 확장
- **애니메이션 타이밍**: 부드러운 전환을 위한 타이밍 제어

### 3. 반응형 웹 디자인

- **Tailwind CSS v4**: 유틸리티 클래스 활용
- **모바일 우선 접근**: 반응형 브레이크포인트 전략
- **성능 최적화**: 이미지 최적화, 코드 스플리팅

### 4. TypeScript 활용

- **타입 정의**: 인터페이스와 타입 안전성
- **제네릭**: 재사용 가능한 타입 시스템
- **타입 추론**: 컴파일러의 타입 추론 활용

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: 검은색 (#000000) - 세련된 느낌
- **Secondary**: 흰색 (#FFFFFF) - 깔끔한 배경
- **Accent**: 회색 톤 - 텍스트와 구분선

### 타이포그래피

- **Font**: Pretendard - 한글 최적화 폰트
- **Weight**: Light(300), Regular(400), Medium(500), Bold(700)
- **Scale**: 모바일 우선 반응형 타이포그래피

### 애니메이션 원칙

- **Easing**: `[0.22, 1, 0.36, 1]` - 자연스러운 가속/감속
- **Duration**: 0.8초 - 적절한 지속 시간
- **Delay**: 200ms - 일시 정지 효과

## 📱 반응형 디자인

### 브레이크포인트

```css
/* 모바일 우선 접근 */
sm: 640px   /* 태블릿 */
md: 768px   /* 작은 데스크톱 */
lg: 1024px  /* 데스크톱 */
xl: 1280px  /* 큰 데스크톱 */
2xl: 1536px /* 초대형 화면 */
```

### 반응형 전략

1. **모바일 우선**: 기본 스타일을 모바일에 맞춤
2. **점진적 향상**: 큰 화면에서 추가 기능 제공
3. **터치 친화적**: 모바일에서도 부드러운 인터랙션

## 🔧 개발 가이드라인

### 폴더 구조 규칙

- `src/app/components/commons`: 재사용 가능한 컴포넌트
- `src/app/components/sections`: 페이지 섹션 컴포넌트
- `src/app/lib`: 유틸리티 함수 및 데이터

### 컴포넌트 작성 규칙

- **서버 컴포넌트 기본**: `useState`, `useEffect` 사용 시 `"use client"` 명시
- **타입 안전성**: TypeScript 인터페이스 정의 필수
- **재사용성**: props를 통한 유연한 컴포넌트 설계

### 스타일링 규칙

- **Tailwind CSS 우선**: 유틸리티 클래스 활용
- **커스텀 CSS 최소화**: 필요한 경우에만 사용
- **반응형 고려**: 모바일 → 태블릿 → PC 순서

### 이미지 최적화

- **Next.js Image**: 자동 최적화 활용
- **Unsplash**: 더미 이미지 소스
- **적절한 크기**: 용도에 맞는 이미지 크기 사용

## 🚀 배포

### Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 정적 내보내기

```bash
# 정적 파일 생성
npm run build
npm run export
```

## 📚 추가 학습 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Framer Motion 가이드](https://www.framer.com/motion/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)

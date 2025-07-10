import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/commons/Header";
import CustomCursor from "./components/commons/CustomCursor";

export const metadata: Metadata = {
  title: "더 스페이스 랩 - 공간에 새로운 가치를 더하는 혁신적인 디자인",
  description:
    "고급 주거 및 상업 공간 설계 전문 건축회사. 혁신적이고 고급스러운 디자인으로 당신의 꿈을 현실로 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body
        className="antialiased font-sans"
        style={{
          fontFamily:
            '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',
        }}
      >
        <Header />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}

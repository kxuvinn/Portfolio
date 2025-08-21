// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { UnifrakturCook, Noto_Sans_KR } from "next/font/google";
import Header from "./components/Header";

// 제목
const display = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-display",
});

// 본문
const bodyFont = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

// 내비 전용
const navFont = Noto_Sans_KR({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-nav",
});

export const metadata: Metadata = {
  title: "⟢ X u v i n ⟣",
  description: "xuvin portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${display.variable} ${bodyFont.variable} ${navFont.variable}`}>
      <body className="font-body bg-white text-gray-900">
      <Header />
      <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}

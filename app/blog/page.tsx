// app/blog/page.tsx
import { NotebookPen } from "lucide-react";
import LinkPreviewCard from "../components/LinkPreviewCard";

export const metadata = {
  title: "Blog | Xuvin",
  description: "Blog",
};

export default function BlogPage() {
  return (
    <div className="font-sans">
      {/* ===== 배너 ===== */}
      <div className="w-full h-60 bg-[#ffefe3] -mt-9" />

      {/* ===== 아이콘 + 제목 + 소개 ===== */}
      <div className="mx-auto max-w-3xl px-6 -mt-8 relative z-20">
        <div className="flex flex-col items-start">
          <NotebookPen
            className="w-12 h-12 text-black mb-3"
            fill="none"
            strokeWidth={2}
          />
          <h1 className="text-4xl font-bold text-black tracking-tight mb-14">
            Blog
          </h1>

          {/* 소개 */}
          <section className="text-left text-[15px] text-gray-800">
            <p className="mb-2 inline-block bg-pink-50 leading-none py-0 px-1">
              @xuvin.log
            </p>
            <p className="mb-1">
              블로그에는 개발 공부, 프로젝트 과정 등 다양한 글들이 수록되어 있습니다!
            </p>
            <p>
            아래 링크에서 블로그를 만나보실 수 있습니다. ✧
            </p>
          </section>

          {/* 벨로그 링크 카드 */}
          <div className="mt-14 mb-10">
            <LinkPreviewCard href="https://velog.io/@xuvin" imageSrc="/velog.png">
              <h3 className="text-lg font-semibold text-gray-900">The sky feels like a lullaby tonight.: 벨로그</h3>
              <p className="text-sm text-gray-600 mt-4">
                🥔 키보드 두드리는 감자의 소소한 개발 흔적들을 기록합니다.
              </p>
              <p className="text-xs text-gray-400 mt-16">https://velog.io/@xuvin</p>
            </LinkPreviewCard>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <hr className="mx-auto max-w-2xl px-6 my-6 border-gray-300" />

      {/* Footer */}
      <footer className="mx-auto max-w-2xl px-6 py-6 text-left text-sm text-gray-600">
        © 2025 · kimsubin · All rights reserved.
      </footer>
    </div>
  );
}

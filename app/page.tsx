import { User, Folder, NotebookPen } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 상단 그라데이션 */}
      <div className="w-full h-60 bg-gradient-to-b from-indigo-400 to-white -mt-9" />

      {/* 콘텐츠 박스 */}
      <main className="mx-auto max-w-2xl px-6 -mt-24 text-left">
        {/* GIF 아이콘 */}
        <img
          src="/moon.gif"
          alt="moon gif"
          className="w-28 h-28 mb-6"
        />

        {/* 제목 */}
        <h1 className="font-display text-4xl md:text-5xl mb-4">⟢   X u v i n   ⟣</h1>

        {/* 구분선 */}
        <p className="my-3 text-lg text-left mt-8">✶</p>

        {/* 소개 */}
        <section className="text-[15px] text-gray-800 mt-6">
          <p className="mb-2 inline-block bg-pink-50 leading-none py-0">안녕하세요!</p>
          <p className="mb-1">저는 개발을 배우고 성장해가는 20세 대학생 김수빈입니다.</p>
          <p>다양한 분야를 배우고 경험하며 진행한 작업들을 이곳에 담았습니다.</p>
        </section>

        {/* 가운데 이미지 */}
        <img
          src="/profile.png"
          alt="profile"
          className="my-6 w-60 md:w-64 mt-6 max-w-full rounded-none shadow-sm border border-gray-200"
        />

        {/* 구분선 */}
        <p className="my-3 text-lg text-left">✶</p>

        {/* 안내문 */}
        <section className="mt-2 mb-6 text-[15px] text-gray-700">
          <p className="mb-2 mt-6">아래 페이지들을 통해 제 다양한 작업물을 열람하실 수 있습니다.</p>
          <p className="mb-2">그럼 즐거운 방문 되세요!</p>
        </section>

        {/* 구분선 */}
        <hr className="mb-8 my-6 border-gray-300 mt-8ss" />

        {/* 링크 섹션 */}
        <ul className="space-y-4 mt-4 mb-8">
          <li>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[#3998DC] hover:underline"
            >
              <User className="w-5 h-5" />
              <span className="font-nav text-sm md:text-base">About</span>
            </a>
          </li>
          <li>
            <a
              href="/project"
              className="inline-flex items-center gap-2 text-[#3998DC] hover:underline"
            >
              <Folder className="w-5 h-5" />
              <span className="font-nav text-sm md:text-base">Project</span>
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[#3998DC] hover:underline"
            >
              <NotebookPen className="w-5 h-5" />
              <span className="font-nav text-sm md:text-base">Blog</span>
            </a>
          </li>
        </ul>

        {/* 구분선 */}
        <hr className="my-6 border-gray-300" />
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-2xl px-6 py-6 text-left text-sm text-gray-600">
        © 2025 .  kimsubin .  All rights reserved.
      </footer>
    </div>
  );
}

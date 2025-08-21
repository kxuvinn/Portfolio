// app/portfolio/page.tsx
import Link from "next/link";
import { Folder, Laptop } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Project | Xuvin",
  description: "Project",
};

export default function ProjectPage() {
  return (
    <div className="font-body">
      {/* ===== 배너 ===== */}
      <div className="w-full h-60 bg-[#88a7d3] -mt-9" />

      {/* ===== 아이콘 + 제목 ===== */}
      <div className="mx-auto max-w-3xl px-6 -mt-8 relative z-20">
        <div className="flex flex-col items-start mb-10">
          <Folder
            className="w-12 h-12 text-black mb-3"
            fill="currentColor"
            strokeWidth={0}
          />
          <h1 className="text-4xl font-bold font-nav text-black tracking-tight">
            Project
          </h1>
        </div>
      </div>

      {/* ===== 본문 컨테이너 ===== */}
      <main className="mx-auto max-w-3xl px-6 pb-12">
        {/* 안내 박스 */}
        <section className="mb-10">
          <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg">
            <Laptop className="w-8 h-8 mt-0.5" />
            <p className="font-nav text-sm md:text-base">
            기획, 개발 등 프로젝트 제작 과정을 정리하여 기록했습니다.
            </p>
          </div>
        </section>

        {/* 카드 리스트 */}
        <ul className="mt-8 space-y-12">
          {/* 카드 1 */}
          <li className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col">
            <a
              href="https://github.com/kxuvinn/OSS_project/tree/main"
              target="_blank"
              rel="noreferrer"
              className="block relative group"
            >
              <img
                src="/signquiz.png"
                alt="SignQuiz"
                className="w-full aspect-video object-cover border border-gray-200"
              />
              {/* Hover 시 깃허브 아이콘 오버레이 */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaGithub className="w-12 h-12 text-white" />
              </div>
            </a>
            {/* 날짜 (이미지 바로 아래) */}
            <p className="mt-2 text-sm text-gray-500 text-left">2024.03 – 2024.06</p>
          </div>  
            <div>
              <Link
                href="/signquiz"
                className="inline-flex items-center gap-2 font-nav font-semibold text-gray-900 
                hover:decoration-gray-600 px-2 py-1 rounded-md
                hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg">🤚</span>
                <span className="underline decoration-gray-400 underline-offset-4">SignQuiz</span>
              </Link>
              <div className="flex items-start gap-3 mt-2">
              <span className="text-gray-700">▶</span>
              {/* 설명 텍스트 */}
              <p className="font-nav text-xs md:text-sm text-gray-700 leading-relaxed">
              YOLOv5 기반 실시간 수화 인식 웹 퀴즈 프로그램으로, 웹캠을 통해 입력된 한글·숫자 수화를 즉각 피드백하며, 게임형 학습 환경을 제공해 아동과 일반인 모두 효과적으로 수화를 습득할 수 있습니다.
              </p>
              </div>
            </div>
          </li>

          {/* 카드 2 */}
          <li className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col">
            <a
              href="https://github.com/kxuvinn/Neul"
              target="_blank"
              rel="noreferrer"
              className="block relative group"
            >
              <img
                src="/neul.png"
                alt="Neul"
                className="w-full aspect-video object-cover border border-gray-200"
              />
              {/* Hover 시 깃허브 아이콘 오버레이 */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaGithub className="w-12 h-12 text-white" />
              </div>
            </a>
            {/* 날짜 (이미지 바로 아래) */}
            <p className="mt-2 text-sm text-gray-500 text-left">2024.03 – 2024.06</p>
          </div> 
            <div>
              <Link
                href="/neul"
                className="inline-flex items-center gap-2 font-nav font-semibold text-gray-900 
                hover:decoration-gray-600 px-2 py-1 rounded-md
                hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg">🛏️</span>
                <span className="underline decoration-gray-400 underline-offset-4">Neul</span>
              </Link>
              <div className="flex items-start gap-3 mt-2">
              <span className="text-gray-700">▶</span>
              {/* 설명 텍스트 */}
              <p className="font-nav text-xs md:text-sm text-gray-700 leading-relaxed">
              불규칙한 수면 습관 개선을 위해 제작된 데스크탑 프로그램입니다. 사용자의 기상·취침 시간을 입력받아 1.5시간 단위 수면 주기를 계산하고 최적의 수면·기상 시간을 추천합니다. 또한 수면 시간과 감정을 기록·시각화하여 습관 점검을 지원합니다.
              </p>
              </div>
            </div>
          </li>

          {/* 카드 3 */}
          <li className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col">
            <a
              href="https://github.com/kxuvinn/AIab"
              target="_blank"
              rel="noreferrer"
              className="block relative group"
            >
              <img
                src="/alab.png"
                alt="Alab"
                className="w-full aspect-video object-cover border border-gray-200"
              />
              {/* Hover 시 깃허브 아이콘 오버레이 */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaGithub className="w-12 h-12 text-white" />
              </div>
            </a>
            {/* 날짜 (이미지 바로 아래) */}
            <p className="mt-2 text-sm text-gray-500 text-left">2024.04 – 2024.05</p>
          </div> 
            <div>
              <Link
                href="/alab"
                className="inline-flex items-center gap-2 font-nav font-semibold text-gray-900 
                hover:decoration-gray-600 px-2 py-1 rounded-md
                hover:bg-gray-100 transition-colors"
              >
                 <span className="text-lg">🔢</span>
                <span className="underline decoration-gray-400 underline-offset-4">Alab</span>
              </Link>
              <div className="flex items-start gap-3 mt-2">
              <span className="text-gray-700">▶</span>
              {/* 설명 텍스트 */}
              <p className="font-nav text-xs md:text-sm text-gray-700 leading-relaxed">
              기존 수학 학습의 암기·정답 위주 한계를 보완하기 위해 개발된 앱입니다. 인공지능을 활용해 학년별 맞춤 문제와 단계별 풀이를 제공하며, 이미지 기반 문제 검색, 그래프 변환, AI 시험지 제작 기능으로 직관적 이해와 사고 과정 학습을 지원합니다.
              </p>
              </div>
            </div>
          </li>
        </ul>
      </main>

      {/* 구분선 */}
      <hr className="mx-auto max-w-2xl px-6 my-6 border-gray-300" />

      {/* Footer */}
      <footer className="mx-auto max-w-2xl px-6 py-6 text-left text-sm text-gray-600">
        © 2025 .  kimsubin .  All rights reserved.
      </footer>
    </div>
  );
}

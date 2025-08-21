// app/alab/page.tsx
import { Calculator } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Alab | Xuvin",
  description: "Alab",
};

// 공통 섹션 헤더
function SectionHeader({ title }: { title: string }) {
    return (
      <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-gray-800">
        <span className="font-semibold font-nav">{title}</span>
      </div>
    );
  }

export default function AlabPage() {
  return (
    <div className="mb-8 w-full max-w-2xl mx-auto">
      <main className="mx-auto max-w-3xl px-6 py-10">
        
        {/* 제목 */}
        <div className="flex flex-col items-start mb-10">
          <Calculator className="w-12 h-12 text-black mb-3" />
          <h1 className="text-4xl font-bold font-nav text-black tracking-tight">Alab</h1>
        </div>

        {/* 안내 박스 */}
        <div className="mt-4 flex flex-col gap-1 px-4 py-3 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg">
            <p className="font-nav font-semibold text-sm md:text-base">
                📅 기간: 2025.04 - 2025.05
            </p>
            <p className="font-nav font-semibold text-sm md:text-base">
                👩‍💻 역할: Frontend, Backend
            </p>
        </div>

        {/* 설명 */}
        <div className="flex items-start gap-2 p-4">
         <span className="text-gray-700 text-lg leading-relaxed">▶</span>
         <p className="text-gray-800 font-nav leading-relaxed">
         Alab은 인공지능 기반 학습 지원 플랫폼으로, 사용자가 문제를 풀고 풀이 과정을 확인하며 단계별로 
         학습할 수 있도록 설계된 웹 애플리케이션입니다. 학년별 맞춤형 문제 제공, 이미지 기반 문제 검색, 
         그래프 변환, AI 시험지 제작 기능 등을 통해 단순 암기를 넘어 직관적 이해와 사고력 중심의 학습 경험을 제공합니다.
         저는 이 프로젝트에서 프론트엔드와 백엔드를 모두 담당하여, 사용자 인터페이스 설계와 학습 흐름 구현부터 서버 로직, 
         데이터 처리, AI 모델 연동까지 전체적인 개발을 주도했습니다. 프론트엔드에서는 직관적이고 일관된 UI를 구현했으며, 
         백엔드에서는 Flask 기반 API 서버를 구축해 문제 데이터 관리, 모델 추론 요청 처리, 결과 반환까지의 기능을 안정적으로 연결했습니다. 
         이를 통해 사용자가 원활하게 학습 서비스를 이용할 수 있도록 풀스택 개발 전반을 책임졌습니다.
         </p>
        </div>

        {/* 비디오 */}
        <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl shadow-md mt-4 mb-12">
         <video
            src="/video/alab.mp4"
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
         />
        </div>
      </main>
      
      {/* 구분선 */}
      <hr className="mb-8 my-6 border-gray-300 mt-8ss" />

      {/* Footer */}
      <footer className="mx-auto max-w-2xl px-6 py-6 text-left text-sm text-gray-600">
        © 2025 .  kimsubin .  All rights reserved.
      </footer>
    </div>
  );
}

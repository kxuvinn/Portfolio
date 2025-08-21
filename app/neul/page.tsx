// app/neul/page.tsx
import { Bed } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Neul | Xuvin",
  description: "neul",
};

// 공통 섹션 헤더
function SectionHeader({ title }: { title: string }) {
    return (
      <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-gray-800">
        <span className="font-semibold font-nav">{title}</span>
      </div>
    );
  }

export default function NeulPage() {
  return (
    <div className="mb-8 w-full max-w-2xl mx-auto">
      <main className="mx-auto max-w-3xl px-6 py-10">
        
        {/* 제목 */}
        <div className="flex flex-col items-start mb-10">
          <Bed className="w-12 h-12 text-black mb-3" />
          <h1 className="text-4xl font-bold font-nav text-black tracking-tight">Neul</h1>
        </div>

        {/* 안내 박스 */}
        <div className="mt-4 flex flex-col gap-1 px-4 py-3 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg">
            <p className="font-nav font-semibold text-sm md:text-base">
                📅 기간: 2025.03 - 2025.06
            </p>
            <p className="font-nav font-semibold text-sm md:text-base">
                👩‍💻 역할: Backend
            </p>
        </div>

        {/* 설명 */}
        <div className="flex items-start gap-2 p-4">
         <span className="text-gray-700 text-lg leading-relaxed">▶</span>
         <p className="text-gray-800 font-nav leading-relaxed">
         Neul은 사용자의 수면 패턴을 기록하고, 평균 수면 시간과 주기별 기상 시간을 계산하여 보다 건강한 
         수면 습관을 형성할 수 있도록 돕는 데스크톱 애플리케이션입니다. 사용자는 취침·기상 시간을 입력하거나 
         자동 기록을 통해 데이터를 누적할 수 있으며, 시각적인 그래프와 통계를 통해 수면 습관을 점검할 수 있습니다. 
         저는 백엔드 개발을 맡아 수면 기록 저장 및 불러오기, 취침·기상 시간을 기반으로 한 주기 계산 기능을 구현했습니다. 
         또한 UI 개선과 JSON 인증 오류 해결 등의 전반적인 디버깅을 담당해 프로그램의 안정성을 보강하였습니다.
         </p>
        </div>

        {/* 비디오 */}
        <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl shadow-md mt-4 mb-12">
         <video
            src="/video/neul.mp4"
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

// app/signquiz/page.tsx
import { Hand } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Signquiz | Xuvin",
  description: "Signquiz",
};

// 공통 섹션 헤더
function SectionHeader({ title }: { title: string }) {
    return (
      <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-gray-800">
        <span className="font-semibold font-nav">{title}</span>
      </div>
    );
  }

export default function SignquizPage() {
  return (
    <div className="mb-8 w-full max-w-2xl mx-auto">
      <main className="mx-auto max-w-3xl px-6 py-10">
        
        {/* 제목 */}
        <div className="flex flex-col items-start mb-10">
          <Hand className="w-12 h-16 text-black mb-3" />
          <h1 className="text-4xl font-bold font-nav text-black tracking-tight">SignQuiz</h1>
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
         YOLOv5 기반의 실시간 수화 학습 퀴즈 프로그램입니다. 
         사용자가 웹캠을 통해 입력한 수어를 인식하고 즉시 정오답을 피드백하여, 게임처럼 반복 학습을 지원합니다. 
         이를 통해 학습자는 단순한 암기가 아닌 직관적이고 능동적인 학습 경험을 얻을 수 있습니다. 
         저는 백엔드 개발을 맡아 Flask 서버를 구축하고 YOLOv5 모델을 TorchScript로 변환·연동했으며, 
         이미지 수신부터 추론, 결과 반환까지 이어지는 API 흐름을 구현하여 핵심 기능이 원활히 동작하도록 했습니다.
         </p>
        </div>

        {/* 비디오 */}
        <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl shadow-md mt-4 mb-12">
         <video
            src="/video/signquiz.mp4"
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
         />
        </div>
      </main>

      {/* 구분선 */}
      <hr className="mb-8 my-6 border-gray-300 mt-8" />

      {/* Footer */}
      <footer className="mx-auto max-w-2xl px-6 py-6 text-left text-sm text-gray-600">
        © 2025 .  kimsubin .  All rights reserved.
      </footer>
    </div>
  );
}

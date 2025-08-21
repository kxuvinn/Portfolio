// app/about/page.tsx
import { User } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About | Xuvin",
  description: "About",
};

// 공통 섹션 헤더
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-gray-800">
      <span className="font-semibold font-nav">{title}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="mb-8 w-full max-w-2xl mx-auto">
      <main className="mx-auto max-w-3xl px-6 py-10">
        
        {/* 제목: 아이콘 ↵ About */}
        <div className="flex flex-col items-start mb-10">
          <User className="w-12 h-12 text-black mb-3" />
          <h1 className="text-4xl font-bold font-nav text-black tracking-tight">About</h1>
        </div>

        {/* About Me */}
        <section className="mb-10">
          <SectionHeader title="💡 About Me" />

          {/* 프로필 이미지 */}
          <div className="mt-6 flex justify-start">
            <Image
            src="/me.png"
            alt="me"
            width={280}
            height={280}
            className="object-contain -mb-6"
            priority
            />
          </div>

          {/* 자기소개 표 */}
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-[15px] font-nav">
              <tbody className="[&_tr:not(:last-child)_td]:border-b [&_tr:not(:last-child)_th]:border-b">
                <tr>
                  <th className="w-40 bg-white px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-200">
                    이름
                  </th>
                  <td className="px-4 py-3">김수빈</td>
                </tr>
                <tr>
                  <th className="bg-white px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-200">
                    생년월일
                  </th>
                  <td className="px-4 py-3">2005.07.22</td>
                </tr>
                <tr>
                  <th className="bg-white px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-200">
                    학교
                  </th>
                  <td className="px-4 py-3">숙명여자대학교</td>
                </tr>
                <tr>
                  <th className="bg-white px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-200">
                    전공
                  </th>
                  <td className="px-4 py-3">인공지능공학부, 빅데이터전공</td>
                </tr>
                <tr>
                  <th className="bg-white px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-200">
                    메일
                  </th>
                  <td className="px-4 py-3">kimsubin2415028@sookmyung.ac.kr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 여백 */}
        <div className="h-2" />

        {/* Skills */}
        <section className="mb-10">
            <SectionHeader title="🍳 Skills" />
            <div className="mt-6 space-y-6">

                {/* 언어/프레임워크 뱃지 */}
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" />
                  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
                  <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" />
                  <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" />
                  <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" />
                </div>
                
                {/* GitHub Stats 카드 */}
                <div className="flex flex-col md:flex-row gap-4">
                    <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=kxuvinn&layout=compact&theme=tokyonight"
                    alt="Top Languages"
                    className="rounded-xl shadow"
                    />
                </div>
            </div>
        </section>

        {/* 여백 */}
        <div className="h-2" />

        {/* Projects */}
        <section className="mb-10">
          <SectionHeader title="🛠️ Projects" />
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-[15px] font-nav">
              <thead className="bg-gray-50 text-gray-700 text-center">
                <tr>
                  <th className="px-4 py-3 text-center font-semibold border-r border-gray-200">
                    프로젝트명
                  </th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-gray-200 w-40">
                    기간
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:not(:last-child)_td]:border-b">
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200">
                    <span className="font-medium">SignQuiz</span>: 인공지능 기반 청각장애인 수화 학습 서비스
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">2025.03 - 2025.06</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200">
                    <span className="font-medium">Neul</span>: 수면 &amp; 감정 관리 서비스
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">2025.03 - 2025.06</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200">
                    <span className="font-medium">Alab</span>: 인공지능 기반 수학 문제 풀이 서비스
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">2025.04 - 2025.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 여백 */}
        <div className="h-2" />

        {/* Experience */}
        <section className="mb-12">
          <SectionHeader title="👩‍💻 Experience" />
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-[15px] font-nav">
              <thead className="bg-gray-50 text-gray-700 text-center">
                <tr>
                  <th className="px-4 py-3 text-center font-semibold border-r border-gray-200">
                    활동 내역
                  </th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-gray-200 w-40">
                    기간
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:not(:last-child)_td]:border-b">
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200">
                    인공지능공학부 학회 '코딧(Code-It)' 총무
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">2024.03 - 2026.02</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-gray-200">
                    공과대학 학생회 '공진' 교육자치국
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">2025.03 - 2025.12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
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

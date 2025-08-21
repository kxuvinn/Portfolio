"use client";

import Image from "next/image";

type Props = {
  href: string;              // 클릭 시 이동할 URL
  imageSrc: string;          // 항상 내가 지정한 이미지
  children: React.ReactNode; // 내가 직접 넣을 텍스트
};

export default function LinkPreviewCard({ href, imageSrc, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-3xl border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
    >
      <div className="flex items-stretch">
        {/* 텍스트 영역: children으로 교체 */}
        <div className="flex-1 p-6">{children}</div>

        {/* 이미지 영역 */}
        <div className="w-48 h-32 md:w-60 md:h-44 relative flex-shrink-0">
          <Image
            src={imageSrc}
            alt="preview"
            fill
            sizes="240px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </a>
  );
}

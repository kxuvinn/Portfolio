"use client";

import { useRef, useState } from "react";

export default function VideoClickPlay({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        controls={playing}
      />
      {/* 클릭 오버레이 */}
      <button
        type="button"
        onClick={handlePlay}
        className={`absolute inset-0 grid place-items-center transition ${
          playing ? "pointer-events-none opacity-0" : "bg-white/20 hover:bg-black/30"
        }`}
        aria-label="동영상 재생"
      >
        <span className="w-16 h-16 rounded-full bg-white/90 shadow grid place-items-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    </div>
  );
}

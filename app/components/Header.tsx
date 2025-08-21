"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { User, Folder, NotebookPen, Hand, Bed, Calculator } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const linkCls = (active: boolean) =>
    `inline-flex items-center gap-2 font-nav text-sm ${
      active ? "text-gray-900 font-medium" : "text-gray-700"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="h-12 px-4 flex items-center justify-start">
        {pathname === "/" ? (
          // 홈 페이지
          <div className="flex items-center gap-2 text-sm">
            <Image src="/moon.gif" alt="moon" width={30} height={30} priority />
            <span className="font-display text-lg">⟢ Xuvin ⟣</span>
          </div>
        ) : pathname.startsWith("/about") ? (
          // About 페이지
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 font-display text-base">
              <Image src="/moon.gif" alt="moon" width={30} height={30} priority />
              <span className="font-display text-lg">⟢ Xuvin ⟣</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className={linkCls(true)}>
              <User className="w-5 h-5" />
              About
            </span>
          </nav>
        ) : pathname.startsWith("/project") ? (
          // Project 페이지
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 font-display text-base">
              <Image src="/moon.gif" alt="moon" width={30} height={30} priority />
              <span className="font-display text-lg">⟢ Xuvin ⟣</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className={linkCls(true)}>
              <Folder className="w-5 h-5 fill-black" />
              Project
            </span>
          </nav>
        ) : pathname.startsWith("/blog") ? (
          // Blog 페이지
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 font-display text-base">
              <Image src="/moon.gif" alt="moon" width={30} height={30} priority />
              <span className="font-display text-lg">⟢ Xuvin ⟣</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className={linkCls(true)}>
              <NotebookPen className="w-5 h-5" />
              Blog
            </span>
          </nav>
        ) : pathname.startsWith("/signquiz") ? (
          // SignQuiz 상세
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 font-display text-base">
              <Image src="/moon.gif" alt="moon" width={30} height={30} priority />
              <span className="font-display text-lg">⟢ Xuvin ⟣</span>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/project" className={linkCls(false)}>
              <Folder className="w-5 h-5 fill-black" />
              Project
            </Link>
            <span className="text-gray-400">/</span>
            <span className={linkCls(true)}>
              <Hand className="w-5 h-5" />
              SignQuiz
            </span>
          </nav>
        ) : pathname.startsWith("/neul") ? (
          // Neul 상세
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 font-display text-base">
              <Image src="/moon.gif" alt="moon" width={30} height={30} priority />
              <span className="font-display text-lg">⟢ Xuvin ⟣</span>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/project" className={linkCls(false)}>
              <Folder className="w-5 h-5 fill-black" />
              Project
            </Link>
            <span className="text-gray-400">/</span>
            <span className={linkCls(true)}>
              <Bed className="w-5 h-5" />
              Neul
            </span>
          </nav>
        ) : pathname.startsWith("/alab") ? (
          // Alab 상세
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 font-display text-base">
              <Image src="/moon.gif" alt="moon" width={30} height={30} priority />
              <span className="font-display text-lg">⟢ Xuvin ⟣</span>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/project" className={linkCls(false)}>
              <Folder className="w-5 h-5 fill-black" />
              Project
            </Link>
            <span className="text-gray-400">/</span>
            <span className={linkCls(true)}>
              <Calculator className="w-5 h-5" />
              Alab
            </span>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

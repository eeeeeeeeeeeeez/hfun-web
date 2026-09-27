import Image from "next/image";
import type { Metadata } from "next";

const LINE_URL = "https://lin.ee/6BR0r4E";
const PHONE = "0967-291-352";
const PHONE_HREF = "tel:0967-291-352";

export const metadata: Metadata = {
  title: "加 LINE 免費諮詢｜好放貸",
  description: "點擊加入好放貸官方 LINE，專人一對一評估資金方案，全程線上辦理、隱私保密、免保人。",
};

export default function LinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 px-6 py-16 text-paper">
      <a href="/" className="mb-10 flex items-center gap-2.5">
        <Image
          src="/logo-full.jpg"
          alt="好放貸"
          width={44}
          height={44}
          className="rounded-md"
        />
        <span className="font-serif text-xl font-bold tracking-tight text-paper">
          好放貸
        </span>
      </a>

      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-paper/10 shadow-2xl shadow-black/40">
        <Image
          src="/hero-mascot.jpg"
          alt="好放貸專業資金規劃諮詢：全程線上辦理、隱私保密、免保人"
          width={1000}
          height={1000}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <p className="mt-8 font-serif text-sm font-medium tracking-wide text-gold-light">
        2026年小額貸款利率最優選
      </p>
      <h1 className="mt-3 max-w-md text-center font-serif text-3xl font-bold leading-tight md:text-4xl">
        加入官方 LINE，
        <br />
        專人立即為您評估
      </h1>
      <p className="mt-4 max-w-sm text-center text-[15px] leading-relaxed text-paper/75">
        全程線上辦理、隱私保密、免保人，1 對 1 專人為您規劃合適方案。
      </p>

      <a
        href={LINE_URL}
        className="mt-9 flex items-center gap-2.5 rounded-full bg-[#06C755] px-10 py-4 text-base font-bold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.03]"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 5.69 2 10.24c0 4.08 3.55 7.5 8.35 8.14.32.07.77.22.88.5.1.26.06.66.03.92l-.14 1.03c-.04.3-.24 1.17 1.02.64 1.27-.53 6.85-4.03 9.35-6.9C22.98 12.8 24 11.62 24 10.24 24 5.69 18.63 2 12 2Z" />
        </svg>
        加 LINE 好友，免費諮詢
      </a>

      <a
        href={PHONE_HREF}
        className="mt-5 text-sm font-medium text-paper/70 underline decoration-paper/30 underline-offset-4 hover:text-paper"
      >
        或直接來電諮詢 {PHONE}
      </a>

      <a href="/" className="mt-12 text-xs text-paper/50 hover:text-paper/80">
        ← 返回首頁
      </a>
    </main>
  );
}

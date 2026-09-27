"use client";

const LINE_URL = "https://lin.ee/6BR0r4E";

function LineGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 5.69 2 10.24c0 4.08 3.55 7.5 8.35 8.14.32.07.77.22.88.5.1.26.06.66.03.92l-.14 1.03c-.04.3-.24 1.17 1.02.64 1.27-.53 6.85-4.03 9.35-6.9C22.98 12.8 24 11.62 24 10.24 24 5.69 18.63 2 12 2Z"/>
    </svg>
  );
}

export default function LineFloatingButton() {
  return (
    <a
      href={LINE_URL}
      aria-label="加 LINE 好友諮詢"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#06C755] py-3 pl-4 pr-5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <LineGlyph className="h-5 w-5" />
      加 LINE 諮詢
    </a>
  );
}

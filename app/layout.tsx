import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "好放貸｜專業資金規劃，快速、安心",
  description:
    "好放貸提供小額週轉、勞工紓困、醫療急用、創業營運等資金規劃服務，一對一專人評估，流程透明公開。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className={`${notoSerif.variable} ${notoSans.variable} font-sans bg-paper text-ink`}>
        {children}
      </body>
    </html>
  );
}

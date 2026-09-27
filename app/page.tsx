import Image from "next/image";
import FaqAccordion from "./components/FaqAccordion";
import LineFloatingButton from "./components/LineFloatingButton";
import {
  IconWallet,
  IconHelmet,
  IconCross,
  IconSprout,
  IconHouse,
} from "./components/ServiceIcons";

const LINE_URL = "https://lin.ee/6BR0r4E";
const PHONE = "0967-291-352";
const PHONE_HREF = "tel:0967-291-352";
const LINE_ID = "@fun2727";
const ADDRESS = "台北市內湖區瑞光路8號3樓";

const services = [
  { title: "小額週轉", desc: "臨時支出、生活周轉，最快當日撥款。", Icon: IconWallet },
  { title: "勞工紓困", desc: "具備勞保資格即可評估申請方案。", Icon: IconHelmet },
  { title: "醫療急用", desc: "醫療費用來得突然，資金到位不拖延。", Icon: IconCross },
  { title: "創業營運", desc: "營運資金即刻投入，不錯過生意時機。", Icon: IconSprout },
  { title: "生活資金調度", desc: "房租、學費、季節性開銷，彈性調度。", Icon: IconHouse },
];

const loanPlans = [
  { amount: "10,000", term: "12 期", rate: "10%", monthly: "879", total: "10,548" },
  { amount: "30,000", term: "24 期", rate: "13%", monthly: "1,418", total: "34,032" },
  { amount: "50,000", term: "36 期", rate: "12%", monthly: "1,661", total: "59,796" },
  { amount: "80,000", term: "60 期", rate: "14%", monthly: "2,325", total: "139,500" },
  { amount: "150,000", term: "36 期", rate: "10.5%", monthly: "4,859", total: "174,924" },
  { amount: "250,000", term: "60 期", rate: "11.5%", monthly: "5,522", total: "331,320" },
];

const process = [
  { title: "線上諮詢", desc: "透過 LINE 或電話告訴我們您的資金需求。" },
  { title: "專人評估", desc: "一對一了解您的條件，說明合適的方案方向。" },
  { title: "文件審核", desc: "資料齊全的情況下，審核流程快速進行。" },
  { title: "撥款到位", desc: "核准後儘速撥款，資金問題即時解決。" },
];

const faqs = [
  {
    question: "貸款需要什麼條件？沒有薪轉或勞保可以申請嗎？",
    answer:
      "只要具備基本收入來源即可申請。好放貸提供彈性評估機制，即使沒有薪轉或勞保，也有機會找到適合的方案，實際仍由專員依個人狀況進行評估。",
  },
  {
    question: "有哪些貸款方案可以選擇？",
    answer:
      "我們協助規劃小額急用金、緊急醫療金、生活週轉金、勞工紓困貸與創業週轉金，會依您的需求說明合適的方向。",
  },
  {
    question: "信用狀況不好也可以申請嗎？",
    answer:
      "可以。我們會依整體條件進行評估，不單看信用分數，協助您了解可能的申請空間。",
  },
  {
    question: "申請貸款流程會很複雜嗎？",
    answer: "流程簡單，由專人一對一協助，從諮詢到審核都有專員引導說明。",
  },
  {
    question: "申請後多久可以拿到資金？",
    answer: "在資料齊全的情況下，審核與撥款流程會盡快進行，實際時間仍依個別案件而定。",
  },
  {
    question: "沒有工作也可以申請嗎？",
    answer: "需具備基本還款能力或收入來源，實際仍由專員依個人狀況進行評估。",
  },
  {
    question: "申請金額可以依需求調整嗎？",
    answer: "可以，會依您的條件與需求，協助規劃合適的金額與方案。",
  },
  {
    question: "申請貸款會被他人知道嗎？",
    answer: "好放貸重視客戶隱私，所有資料皆依規範保密處理。",
  },
];

const testimonials = [
  {
    name: "台中 陳先生",
    quote: "臨時需要維修機車，資金短缺，申請小額貸款後當天完成審核，順利恢復工作收入。",
  },
  {
    name: "台北 林小姐",
    quote: "家人突然住院，需要一筆醫療費用，短時間內完成撥款，真的解決了燃眉之急。",
  },
  {
    name: "新北 黃先生",
    quote: "房租加上生活開銷有點吃緊，申請流程不複雜，撥款後壓力小很多。",
  },
  {
    name: "桃園 張先生",
    quote: "做工地有勞保但沒有固定薪轉，原本很擔心，評估其實滿彈性的，順利核准。",
  },
];

export default function Home() {
  return (
    <main id="top">
      <LineFloatingButton />
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-navy-950/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo-full.jpg"
              alt="好放貸"
              width={40}
              height={40}
              priority
              className="rounded-md"
            />
            <span className="font-serif text-xl font-bold tracking-tight text-navy-950">
              好放貸
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-navy-950/80 md:flex">
            <a href="#services" className="hover:text-navy-950">貸款項目</a>
            <a href="#plans" className="hover:text-navy-950">方案試算</a>
            <a href="#process" className="hover:text-navy-950">申請流程</a>
            <a href="#faq" className="hover:text-navy-950">常見問題</a>
          </nav>
          <a
            href={LINE_URL}
            className="flex items-center gap-2 rounded-full bg-[#06C755] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#05b34c]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 5.69 2 10.24c0 4.08 3.55 7.5 8.35 8.14.32.07.77.22.88.5.1.26.06.66.03.92l-.14 1.03c-.04.3-.24 1.17 1.02.64 1.27-.53 6.85-4.03 9.35-6.9C22.98 12.8 24 11.62 24 10.24 24 5.69 18.63 2 12 2Z" />
            </svg>
            加 LINE 諮詢
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-navy-950 text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="font-serif text-sm font-medium tracking-wide text-gold-light">
              2026年小額貸款利率最優選
            </p>
            <h1 className="mt-4 max-w-md font-serif text-4xl font-bold leading-tight md:text-5xl">
              快速貸款，
              <br />
              即時滿足您的需求
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/75">
              提供台灣(含離島)小額貸款服務，線上貸款流程簡單透明，
              無需抵押、無需擔保的小額貸款，讓您資金周轉更靈活。
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={LINE_URL}
                className="flex items-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.03]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 5.69 2 10.24c0 4.08 3.55 7.5 8.35 8.14.32.07.77.22.88.5.1.26.06.66.03.92l-.14 1.03c-.04.3-.24 1.17 1.02.64 1.27-.53 6.85-4.03 9.35-6.9C22.98 12.8 24 11.62 24 10.24 24 5.69 18.63 2 12 2Z" />
                </svg>
                LINE 免費諮詢
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-sm border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/60"
              >
                來電諮詢 {PHONE}
              </a>
            </div>
          </div>
          <a
            href="/line"
            className="mx-auto block w-full max-w-sm overflow-hidden rounded-lg transition-transform hover:scale-[1.02] md:max-w-none"
          >
            <Image
              src="/hero-mascot.jpg"
              alt="好放貸專業資金規劃諮詢：全程線上辦理、隱私保密、免保人"
              width={1000}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-serif text-2xl font-bold text-navy-950 md:text-3xl">
          專業資金規劃，讓需求不再受限
        </h2>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/80">
          <p>
            好放貸是一支專注於資金規劃與貸款諮詢的團隊，致力於為每一位客戶找到合適且安心的資金解決方案。
          </p>
          <p>
            我們結合實務經驗與快速審核流程，無論是個人週轉、醫療需求或事業資金，都協助您有效釐清問題、簡化申請。
          </p>
          <p>
            透過一對一專人評估與清楚透明的說明，讓每位客戶都能了解自身條件與適合的方案方向，避免不必要的時間浪費。
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-navy-950/10 bg-navy-950/[0.03] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-2xl font-bold text-navy-950 md:text-3xl">貸款項目</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`border-l-2 bg-paper p-6 ${i % 2 === 0 ? "border-steel" : "border-gold"}`}
              >
                <s.Icon className={`h-8 w-8 ${i % 2 === 0 ? "text-steel-dark" : "text-gold-dark"}`} />
                <h3 className="mt-4 font-serif text-lg font-medium text-navy-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan plans */}
      <section id="plans" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-2xl font-bold text-navy-950 md:text-3xl">
          1 萬–30 萬借貸方案（本利攤還試算）
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/60">
          以下為試算範例，實際核貸額度、利率與月付金仍以個別授信條件為準。
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy-950 text-paper">
                <th className="px-4 py-3 font-serif font-medium">實拿金額</th>
                <th className="px-4 py-3 font-serif font-medium">期數</th>
                <th className="px-4 py-3 font-serif font-medium">年利率</th>
                <th className="px-4 py-3 font-serif font-medium">月繳金額（約）</th>
                <th className="px-4 py-3 font-serif font-medium">總還款金額（約）</th>
              </tr>
            </thead>
            <tbody>
              {loanPlans.map((p, i) => (
                <tr
                  key={p.amount}
                  className={i % 2 === 0 ? "bg-paper" : "bg-navy-950/[0.03]"}
                >
                  <td className="px-4 py-3 font-medium text-navy-950">NT$ {p.amount}</td>
                  <td className="px-4 py-3 text-ink/80">{p.term}</td>
                  <td className="px-4 py-3 text-ink/80">{p.rate}</td>
                  <td className="px-4 py-3 text-ink/80">NT$ {p.monthly}</td>
                  <td className="px-4 py-3 text-ink/80">NT$ {p.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-navy-950/10 bg-navy-950/[0.03] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-2xl font-bold text-navy-950 md:text-3xl">借款流程</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title} className="relative pl-0">
                <span
                  className={`font-serif text-4xl font-bold ${
                    i % 2 === 0 ? "text-steel/50" : "text-gold/50"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-lg font-medium text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-2xl font-bold text-navy-950 md:text-3xl">成功案例</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t-2 border-steel pt-5">
              <blockquote className="text-[15px] leading-relaxed text-ink/80">
                「{t.quote}」
              </blockquote>
              <figcaption className="mt-3 font-serif text-sm font-medium text-navy-950">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-navy-950/10 bg-navy-950/[0.03] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-2xl font-bold text-navy-950 md:text-3xl">常見問題</h2>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-sm leading-relaxed text-ink/70">
        <h2 className="font-serif text-xl font-bold text-navy-950">借貸條件須知</h2>
        <p className="mt-4">
          貸款年限與利率主要取決於個別銀行或金融機構的政策，並不受到明確的政府法規限制，但銀行業者須遵守《銀行法》與《消費者保護法》等相關規定。一般而言，最短貸款年限為 1 年，最長通常為 7 年（84 個月），部分機構可能提供更長或更短的年限。貸款期限較短，每月還款金額較高但總利息支出較低；期限較長則每月負擔較輕，但總利息支出增加。
        </p>

        <h2 className="mt-10 font-serif text-xl font-bold text-navy-950">信用貸款利率</h2>
        <p className="mt-4">
          本網站揭露之年百分率係按主管機關備查之標準計算範例予以計算，總費用年百分率可能自最低 1% 至最高 16%，實際貸款條件仍以銀行提供之產品為準，且每位客戶實際之年百分率仍依個別貸款產品及授信條件而有所不同。各方案年利率最低 1.68% 起、最高 15.99%，年限最短 5 年、最長 7 年不等，實際仍視核貸銀行、貸款產品及授信條件而定（如核貸額度、利率、月付金、動保費、帳管費、手續費、資料查詢費、開辦費等），銀行保留核貸額度、適用利率及核貸與否之權利。
        </p>

        <h2 className="mt-10 font-serif text-xl font-bold text-navy-950">貸款範例</h2>
        <p className="mt-4">
          以信用貸款為例：假設貸款金額 30 萬元，貸款期間 5 年，貸款利率 6.25%，其他相關費用共 9,000 元，則總費用年百分率約為 7.59%，貸款本息合計 350,100 元加相關手續費用 9,000 元，共計 359,100 元。
        </p>
        <p className="mt-4 border-l-2 border-steel pl-4 text-ink/60">
          免責申明：本網站資料僅供參考，實際利率及貸款方案詳細約定應以貸款申請書及約定書為準。本網站僅提供借貸資訊供需平台，並不涉入其中任何借貸資訊之諮詢與交易。
        </p>
      </section>

      {/* Fraud warning */}
      <section className="border-t border-navy-950/10 bg-navy-950 py-16 text-paper">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-xl font-bold text-gold-light">防範詐騙提醒</h2>
          <p className="mt-3 text-sm text-paper/70">保護您的財產安全，認識正規貸款的重要原則：</p>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-paper/85">
            <li>・請不要提供銀行存摺及提款卡，以免成為詐騙集團的共犯。</li>
            <li>・任何要求以儲值點數換現金的說法都是詐騙。</li>
            <li>・要求事先給付任何名義費用，都是詐騙。</li>
            <li>・請不要提供門號或手機驗證碼。</li>
            <li>・請勿依照他人指示操作 ATM 或匯款。</li>
          </ul>
          <p className="mt-6 text-sm text-paper/60">
            如遇可疑狀況，請速撥 165 反詐騙專線查證，並同時回報檢舉該則廣告。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-paper py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/logo-full.jpg" alt="好放貸" width={36} height={36} className="rounded-md" />
              <span className="font-serif text-lg font-bold text-navy-950">好放貸</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink/60">
              專業資金規劃，快速、安心。24 小時全年無休服務。
            </p>
          </div>
          <div className="space-y-2 text-sm text-ink/70">
            <a
              href={LINE_URL}
              className="flex items-center gap-2 font-medium text-[#06C755] hover:underline"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 5.69 2 10.24c0 4.08 3.55 7.5 8.35 8.14.32.07.77.22.88.5.1.26.06.66.03.92l-.14 1.03c-.04.3-.24 1.17 1.02.64 1.27-.53 6.85-4.03 9.35-6.9C22.98 12.8 24 11.62 24 10.24 24 5.69 18.63 2 12 2Z" />
              </svg>
              LINE ID：{LINE_ID}
            </a>
            <p>客服電話：{PHONE}</p>
            <p>地址：{ADDRESS}</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-6 text-xs text-ink/40">
          © {new Date().getFullYear()} 好放貸．版權所有
        </p>
      </footer>
    </main>
  );
}

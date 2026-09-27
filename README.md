# 好放貸官網

以 Next.js 14（App Router）+ TypeScript + Tailwind CSS 建置的靜態行銷網站。

## 本機開發

```bash
npm install
npm run dev
```

開啟 http://localhost:3000 預覽。

## 部署到 GitHub

```bash
cd hfun-website
git init
git add .
git commit -m "Initial commit: 好放貸官網"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
git push -u origin main
```

（先在 GitHub 上建立一個空的 repository，再把上面網址換成你自己的。）

## 部署到 Vercel

1. 前往 https://vercel.com ，用 GitHub 帳號登入。
2. 點選「Add New… → Project」，選擇剛剛 push 上去的 repo。
3. Framework Preset 會自動偵測為 **Next.js**，不需要額外設定。
4. 點「Deploy」，幾分鐘後即可拿到 `*.vercel.app` 的網址。
5. 若要接自訂網域，到專案的 **Settings → Domains** 加入你的網域，並依指示設定 DNS。

之後只要 `git push` 到 `main` 分支，Vercel 會自動重新部署。

## 之後可以做的事

- 補上真實 Logo（放到 `/public`，並在 `app/page.tsx` / `app/layout.tsx` 引用）
- 如需諮詢表單，可以之後加一支 API Route（`app/api/contact/route.ts`）串接 email 或 LINE 通知
- 網站文案（服務項目、方案利率、免責聲明）目前沿用既有資料，正式上線前請再次確認利率與法規揭露內容是否為最新版本

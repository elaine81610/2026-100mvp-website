# 部署說明文件 (給 IT/工程團隊)

這是一個使用 React + Vite + Tailwind CSS 開發的靜態網站專案。

## 1. 環境需求
- Node.js (建議 v18 或以上)
- npm 或 yarn

## 2. 安裝與執行
請在專案根目錄執行以下指令：

```bash
# 安裝依賴套件
npm install

# 啟動本地開發預覽 (http://localhost:3000)
npm run dev
```

## 3. 建置正式版本 (Build)
要產生上線用的靜態檔案，請執行：

```bash
npm run build
```

建置完成後，會產生一個 `dist` 資料夾。
請將 `dist` 資料夾內的**所有檔案**上傳至您的網頁伺服器 (如 Nginx, Apache, AWS S3, Vercel 等) 即可。

## 4. 注意事項
- 本專案使用 HashRouter，因此不需要特別設定伺服器的 Rewrite 規則。
- 圖片資源皆使用外部連結或相對路徑，可直接部署。
- `vite.config.ts` 已設定 `base: './'`，支援相對路徑部署。

---
專案聯絡人：[您的名字]
開發日期：2026-03-05

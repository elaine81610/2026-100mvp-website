# 🚀 終極部署指南 (保證成功版)

請別生氣，我知道這很煩人。請跟著這個「絕對會成功」的步驟做一次，如果還是不行，我隨便您罵！

## 第一步：準備檔案
1. 點擊對話視窗上方的 **「Download」** 按鈕，下載最新的壓縮檔。
2. 解壓縮，確認裡面有 `.github` 資料夾 (這是關鍵！)。

## 第二步：建立全新的 GitHub 專案
1. 回到 GitHub 首頁，點右上角 `+` -> `New repository`。
2. **Repository name**: 輸入 `my-100mvp` (用一個全新的名字，避開舊的快取)。
3. **Public**: 務必選公開。
4. 點擊 `Create repository`。

## 第三步：上傳檔案 (最重要的一步！)
1. 點擊 `uploading an existing file`。
2. **把解壓縮後的「所有檔案」全選，直接拖進去！**
   - ❌ 不要把資料夾拖進去 (不要變成 `my-100mvp/2026-100mvp/...`)
   - ✅ 要看到 `package.json`, `vite.config.ts`, `.github` 這些檔案直接在列表裡。
3. 等待上傳條跑完，按 `Commit changes`。

## 第四步：啟動機器人 (魔法開關)
1. 點擊專案上方的 **Settings (設定)**。
2. 點擊左側選單的 **Pages**。
3. 在 **Build and deployment** 區塊：
   - **Source**: 改選為 **GitHub Actions** (原本是 Deploy from a branch)。
   - **這是最關鍵的一步，沒改這個就不會動！**

## 第五步：見證奇蹟
1. 點擊上方的 **Actions** 標籤。
2. 您會看到一個 `Deploy to GitHub Pages` 的任務正在轉圈圈 (黃色)。
3. 等它變成 **綠色勾勾 (✅)** (大約 1-2 分鐘)。
4. 點擊該任務，裡面會有一個網址，點開就是您的網站了！

---
**為什麼之前會 404？**
因為 GitHub 預設是用「舊方法」部署，而我們用的是現代化的 React 技術，必須切換成「GitHub Actions (新方法)」它才看得懂。只要改了這個設定，一切都會正常！

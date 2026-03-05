# 如何在 GitHub 上展示您的網站 (免費且公開)

由於我無法直接存取您的 GitHub 帳號，請依照以下步驟，將此專案上傳至 GitHub 並開啟公開預覽連結：

## 步驟 1：下載程式碼
1. 在此對話視窗上方，點擊 **「Download」** 按鈕下載專案壓縮檔。
2. 解壓縮檔案。

## 步驟 2：上傳至 GitHub
1. 登入您的 [GitHub](https://github.com/) 帳號。
2. 點擊右上角的 **「+」** -> **「New repository」**。
3. 輸入專案名稱 (例如 `100mvp-demo`)，選擇 **「Public」** (公開)，然後點擊 **「Create repository」**。
4. 在新頁面中，點擊 **「uploading an existing file」** 連結。
5. 將解壓縮後的**所有檔案**拖曳到上傳區域。
6. 等待上傳完成後，點擊下方的 **「Commit changes」** 按鈕。

## 步驟 3：開啟 GitHub Pages (設定自動部署)
1. 在您的 GitHub 專案頁面，點擊上方的 **「Settings」** (設定) 標籤。
2. 在左側選單中找到 **「Pages」**。
3. 在 **「Build and deployment」** 區塊下：
   - **Source**: 選擇 **`GitHub Actions`** (這很重要！因為本專案已包含自動部署腳本)
   - 選擇後，您應該會看到 `Deploy to GitHub Pages` 的 workflow 建議，或者直接保持預設即可。
4. 觀察上方的 **「Actions」** 標籤頁，您應該會看到一個正在執行的 Workflow (名稱為 `Deploy to GitHub Pages` 或類似)。
5. 等待該 Workflow 顯示綠色勾勾 (成功) 後，重新整理 Pages 設定頁面。

## 步驟 4：取得網址
1. 當 Actions 執行成功後，在 Pages 設定頁面最上方會出現：
   > **Your site is live at: https://[您的帳號].github.io/[專案名稱]/**
2. 複製這個網址，即可分享給任何人觀看！

## 常見問題
- **為什麼本地打開 index.html 是黑畫面？**
  這是正常的。現代網頁應用程式 (SPA) 需要透過網頁伺服器 (Web Server) 執行，無法直接透過檔案總管雙擊開啟 (file:// 協定會被瀏覽器安全機制阻擋)。請使用 `npm run dev` 或直接部署到 GitHub Pages 觀看。
- **部署失敗怎麼辦？**
  請點擊 Actions 標籤頁，查看失敗的詳細錯誤訊息。通常是因為 Node.js 版本或依賴套件問題。本專案已設定使用 Node.js 20，應該能順利執行。

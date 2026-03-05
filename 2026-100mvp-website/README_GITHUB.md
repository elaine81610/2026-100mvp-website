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

## 步驟 3：開啟 GitHub Pages (產生公開連結)
1. 在您的 GitHub 專案頁面，點擊上方的 **「Settings」** (設定) 標籤。
2. 在左側選單中找到 **「Pages」**。
3. 在 **「Build and deployment」** 區塊下：
   - **Source**: 選擇 `Deploy from a branch`
   - **Branch**: 選擇 `main` (或 `master`)，資料夾選擇 `/ (root)`
   - 點擊 **「Save」**。

## 步驟 4：取得網址
1. 等待約 1-3 分鐘 (重新整理頁面)。
2. 您會在 Pages 設定頁面最上方看到：
   > **Your site is live at: https://[您的帳號].github.io/100mvp-demo/**
3. 複製這個網址，即可分享給任何人觀看，無需登入！

---
**注意：** 如果畫面出現空白，請確認 `vite.config.ts` 中的 `base` 設定是否為 `'./'` (我已幫您設定好了)。

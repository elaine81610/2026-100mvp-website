# 🚀 終極簡單部署包 (Simple Deploy)

這是一個不需要任何編譯、不需要 GitHub Actions、不需要複雜設定的「純靜態網頁」版本。

## 如何使用

1. **下載**：請下載 `simple_deploy` 資料夾中的內容。
2. **上傳**：將 `index.html` 這個檔案直接上傳到您的 GitHub Repository (根目錄)。
3. **設定**：
   - 到 GitHub Settings -> Pages。
   - Source 選擇 `Deploy from a branch`。
   - Branch 選擇 `main` (或 `master`)，資料夾 `/ (root)`。
   - 按 Save。

這樣就完成了！因為這只是單純的 HTML 檔案，GitHub Pages 一定讀得懂。

## 為什麼這個版本比較簡單？
這個版本把所有的 React 程式碼、CSS 設定、圖示庫全部打包在一個 `index.html` 檔案裡，並透過 CDN 直接在瀏覽器執行。雖然效能比不上編譯版，但對於展示用途來說綽綽有餘，且絕對不會有部署失敗的問題。

# 選項式照片 Prompt 產生器

React + TypeScript + Vite 前端工具，讓使用者透過分類選項組合出 AI 易讀的照片 prompt。

## 這次重構重點

- 移除 `imageSpec JSON` 輸出。
- 提供更多分類與子分類（風格、主體、鏡頭、光線、場景、構圖、情緒、負向限制）。
- 產生單行 prompt，並進行空白正規化與去重。
- 支援單選分類（例如風格）與多選分類（例如光線/構圖）。

## 啟動

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

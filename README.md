
# SECGPT - 證券文檔智能分析平台

## 項目簡介

SECGPT是一個專門針對上市公司證券文檔進行智能分析的平台。我們的系統能夠處理各類SEC文件，包括10-K年度報告、10-Q季度報告、8-K重大事件公告等，為投資者、分析師和研究人員提供高效的文檔處理和分析工具。

## 主要功能

- **文檔智能分類**: 根據SEC標準自動識別和分類上市公司提交的各類文檔
- **深度分析能力**: 利用先進的AI技術解析文檔內容，提取關鍵信息
- **雙重獲取方式**: 支持API直接獲取和本地文檔上傳兩種方式處理文件
- **多語言支持**: 完整支持中文和英文界面，滿足不同用戶需求

## 技術架構

本項目採用現代前端技術構建:

- Vite - 高性能的前端構建工具
- TypeScript - 增強的JavaScript開發體驗
- React - 用戶界面構建庫
- Tailwind CSS - 實用優先的CSS框架
- shadcn/ui - 高質量UI組件庫

## 如何使用

1. 訪問我們的在線平台
2. 選擇您希望分析的文檔類型
3. 通過SEC API獲取或上傳本地文檔
4. 系統將自動進行分析並展示結果

## 開發指南

### 環境準備

開發前請確保已安裝以下工具:
- Node.js (推薦使用最新LTS版本)
- npm 或 yarn

### 本地開發步驟

```bash
# 克隆代碼庫
git clone https://github.com/MarkLo127/secgpt.git

# 進入項目目錄
cd secgpt

# 安裝依賴
npm install
# 或
pnpm install

# 啟動開發服務器
npm run dev
# 或
pnpm run dev
```

開發服務器啟動後，訪問 http://localhost:5173 即可查看應用。

## 部署

本項目使用Lovable平台進行部署，訪問[項目頁面](https://lovable.dev/projects/dcf3b57d-3062-4591-8925-df38906d2c74)並點擊「分享 -> 發布」即可完成部署。

## 自定義域名

您可以將自己的域名連接到本項目:

1. 訪問項目設置
2. 導航至「域名」設置頁面
3. 按照指引添加您的自定義域名

## 許可證

版權所有 © 2024 SECGPT。保留所有權利。

import { Manager, CategoryType, TimeLineEvent } from './types';

export const DEADLINE_DATE = new Date('2025-08-08T23:59:59');

export const CATEGORIES_DESC = [
  {
    type: CategoryType.SUSTAINABILITY,
    title: '永續經營',
    desc: 'ESG、環境保護、社會責任、公司治理',
    icon: 'Leaf'
  },
  {
    type: CategoryType.DIGITAL_INNOVATION,
    title: '數位創新',
    desc: '新科技應用、數位工具導入、流程升級',
    icon: 'Cpu'
  },
  {
    type: CategoryType.PRODUCT_SERVICE,
    title: '產品服務',
    desc: '產品研發、服務設計、使用者體驗優化',
    icon: 'Box'
  },
  {
    type: CategoryType.MARKETING_SALES,
    title: '行銷業務',
    desc: '品牌推廣、市場拓展、業績成長策略',
    icon: 'TrendingUp'
  },
  {
    type: CategoryType.ORG_GOVERNANCE,
    title: '組織治理',
    desc: '人才培育、組織變革、企業文化塑造',
    icon: 'Users'
  }
];

export const TIMELINE_EVENTS: TimeLineEvent[] = [
  { date: '2025.05.01', title: '徵件開跑', description: '線上報名系統正式開放', status: 'past' },
  { date: '2025.08.08', title: '報名截止', description: '需完成線上資料填寫與繳費', status: 'current' },
  { date: '2025.09.15', title: '初審評選', description: '資格審查與書面初評', status: 'future' },
  { date: '2025.10.20', title: '決審面談', description: '入圍者進行口頭簡報', status: 'future' },
  { date: '2025.12.01', title: '頒獎典禮', description: '榮耀時刻與百大經理人交流', status: 'future' },
];

export const MOCK_MANAGERS: Manager[] = [
  // 2026 Candidates (Current)
  { 
    id: 1, 
    name: '王大明', 
    company: '鼎鑫金控', 
    title: 'ESG 執行長', 
    category: CategoryType.SUSTAINABILITY, 
    isSuper: true, 
    shortPerformance: '推動綠色金融，達成集團 15% 節能成效', 
    paid: true,
    image: 'https://picsum.photos/400/400?random=1',
    fullPdca: {
      plan: '為響應全球淨零碳排趨勢，制定集團「2030 綠色金融願景」，規劃導入 ISO 14064 溫室氣體盤查，並設定每年降低 2% 碳排的具體目標。',
      do: '領導跨部門成立 ESG 委員會，推動無紙化辦公與綠建築改造。發行 50 億綠色債券，並導入 AI 能源管理系統監控全台 120 間分行用電狀況。',
      checkAct: '2024 年度集團總用電量下降 15%，超越原訂目標。綠色債券獲超額認購 2.5 倍。依據執行數據，修訂 2025 年目標為挑戰 18% 節能，並將供應鏈納入碳管理範疇。'
    },
    year: 2026
  },
  { 
    id: 2, 
    name: '李小華', 
    company: '全匯零售集團', 
    title: '集團資訊長', 
    category: CategoryType.DIGITAL_INNOVATION, 
    isSuper: false, 
    shortPerformance: '導入生成式 AI 客服，降低 40% 人力成本', 
    paid: true,
    image: 'https://picsum.photos/400/400?random=2',
    fullPdca: {
      plan: '面對客服量暴增與人力短缺，計畫導入 LLM 技術重構客服系統，目標提升首解率 (FCR) 並降低平均處理時間 (AHT)。',
      do: '建立企業專屬知識庫，訓練 RAG 模型。開發混合式客服介面，讓 AI 輔助真人客服。每週進行模型微調迭代，優化回應準確度。',
      checkAct: '上線半年後，客服人力成本降低 40%，客戶滿意度 (CSAT) 提升至 4.8 分。系統誤答率低於 3%。未來將擴展至語音客服領域。'
    },
    year: 2026
  },
  { 
    id: 3, 
    name: '張事業', 
    company: '宏大精密製造', 
    title: '研發總監', 
    category: CategoryType.PRODUCT_SERVICE, 
    isSuper: false, 
    shortPerformance: '開發超耐磨合金，市占率提升 15%', 
    paid: false,
    image: 'https://picsum.photos/400/400?random=3',
    fullPdca: {
      plan: '針對航太客戶對高溫耐磨材料的需求，擬定新型鎳基合金開發計畫，預計縮短產品開發週期 20%。',
      do: '導入模擬軟體進行材料結構分析，減少實體試錯次數。與成大材料系產學合作，突破熱處理關鍵製程瓶頸。',
      checkAct: '新產品通過波音供應鏈認證，帶動該產品線營收成長 3 億元，市占率由 10% 提升至 25%。建立標準化開發 SOP，應用於其他合金產品線。'
    },
    year: 2026
  },
  { 
    id: 4, 
    name: '林銷售', 
    company: '雲端科技', 
    title: '業務副總', 
    category: CategoryType.MARKETING_SALES, 
    isSuper: true, 
    shortPerformance: 'OMO 整合行銷，品牌流量翻倍成長', 
    paid: true,
    image: 'https://picsum.photos/400/400?random=4',
    fullPdca: {
      plan: '為突破 B2B 業務瓶頸，策劃「虛實整合生態圈」行銷策略，目標將線上流量有效轉換為線下顧問諮詢。',
      do: '舉辦 10 場產業趨勢論壇 (Offline) 搭配每週白皮書發布 (Online)。導入 HubSpot CRM 追蹤客戶歷程，實施精準自動化行銷 (EDM/LINE)。',
      checkAct: '官網月流量成長 120%，有效名單轉換率 (Lead Gen) 提升 3 倍。2024 年營收創歷史新高。根據數據反饋，調整廣告預算配置，集中於高轉換率的 LinkedIn 渠道。'
    },
    year: 2026
  },
  { 
    id: 5, 
    name: '趙管理', 
    company: '全球物流', 
    title: '人資長', 
    category: CategoryType.ORG_GOVERNANCE, 
    isSuper: false, 
    shortPerformance: '推動多元共融 (DEI)，留職率提升 20%', 
    paid: true,
    image: 'https://picsum.photos/400/400?random=5',
    fullPdca: {
      plan: '面對跨國人才管理挑戰與高流動率，提出「全球人才永續計畫」，聚焦 DEI 文化建立與透明升遷管道。',
      do: '實施彈性工時與遠距辦公制度。建立內部導師 (Mentor) 機制，打破部門藩籬。定期舉辦跨文化交流工作坊，並設立匿名溝通渠道。',
      checkAct: '員工敬業度調查分數提升 25%，關鍵人才留任率提升 20%。獲選為「亞洲最佳雇主」。持續優化福利制度，將重點轉向中高齡員工職涯再設計。'
    },
    year: 2026
  },
  // Past Winners (Mock Data for Hall of Fame)
  {
    id: 101,
    name: '陳經典',
    company: '傳奇食品',
    title: '總經理',
    category: CategoryType.MARKETING_SALES,
    isSuper: true,
    shortPerformance: '老品牌年輕化，營收逆勢成長 30%',
    paid: true,
    image: 'https://picsum.photos/400/400?random=101',
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2025,
    articleUrl: 'https://www.managertoday.com.tw'
  },
  {
    id: 102,
    name: '林科技',
    company: '未來半導體',
    title: '技術長',
    category: CategoryType.DIGITAL_INNOVATION,
    isSuper: true,
    shortPerformance: '3奈米製程良率突破關鍵',
    paid: true,
    // No image (Standard)
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2025
  },
  {
    id: 107,
    name: '張行銷',
    company: '創新電商',
    title: '行銷總監',
    category: CategoryType.MARKETING_SALES,
    isSuper: false,
    shortPerformance: '雙11業績成長200%',
    paid: true,
    image: 'https://picsum.photos/400/400?random=107',
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2025
  },
  {
    id: 108,
    name: '李產品',
    company: '優質生活',
    title: '產品經理',
    category: CategoryType.PRODUCT_SERVICE,
    isSuper: false,
    shortPerformance: '新產品線市占率第一',
    paid: true,
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2025
  },
  {
    id: 109,
    name: '王治理',
    company: '永續金控',
    title: '風控長',
    category: CategoryType.ORG_GOVERNANCE,
    isSuper: true,
    shortPerformance: '導入AI風控模型，降低壞帳率',
    paid: true,
    image: 'https://picsum.photos/400/400?random=109',
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2025,
    articleUrl: 'https://www.managertoday.com.tw'
  },
  {
    id: 103,
    name: '黃永續',
    company: '綠能光電',
    title: '永續長',
    category: CategoryType.SUSTAINABILITY,
    isSuper: false,
    shortPerformance: '全廠區 100% 再生能源達成',
    paid: true,
    image: 'https://picsum.photos/400/400?random=103',
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2024,
    articleUrl: 'https://www.managertoday.com.tw'
  },
  {
    id: 104,
    name: '張服務',
    company: '頂級酒店',
    title: '營運總監',
    category: CategoryType.PRODUCT_SERVICE,
    isSuper: true,
    shortPerformance: '獲選全球百大飯店，服務滿意度創新高',
    paid: true,
    // No image (Standard)
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2023
  },
  {
    id: 105,
    name: '劉治理',
    company: '幸福企業',
    title: '人資副總',
    category: CategoryType.ORG_GOVERNANCE,
    isSuper: false,
    shortPerformance: '打造遠距辦公新典範，員工滿意度 95%',
    paid: true,
    image: 'https://picsum.photos/400/400?random=105',
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2022
  },
  {
    id: 106,
    name: '王傳奇',
    company: '百年傳產',
    title: '董事長',
    category: CategoryType.ORG_GOVERNANCE,
    isSuper: true,
    shortPerformance: '帶領集團成功轉型，市值翻倍',
    paid: true,
    image: 'https://picsum.photos/400/400?random=106',
    fullPdca: { plan: '', do: '', checkAct: '' },
    year: 2008
  }
];

export const FAQ_ITEMS = [
  {
    q: '報名資格是什麼？',
    a: '凡於 2024-2025 年間，在企業或組織中擔任管理職務，並有具體績效者皆可報名。'
  },
  {
    q: '報名費用包含哪些項目？',
    a: '費用 $6,000 包含：審查作業費、頒獎典禮入場券一張、經理人月刊一年份、專屬數位證書。'
  },
  {
    q: '可以推薦他人報名嗎？',
    a: '可以，我們歡迎企業內部推薦或自我推薦。請在報名表中註明推薦人資訊。'
  },
  {
    q: '什麼時候會公佈得獎名單？',
    a: '預計於 2026 年 11 月中旬公佈，並同步寄發得獎通知。'
  }
];
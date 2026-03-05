export enum CategoryType {
  SUSTAINABILITY = '永續經營',
  DIGITAL_INNOVATION = '數位創新',
  PRODUCT_SERVICE = '產品服務',
  MARKETING_SALES = '行銷業務',
  ORG_GOVERNANCE = '組織治理'
}

export interface PDCA {
  plan: string;
  do: string;
  checkAct: string;
}

export interface Manager {
  id: number;
  name: string;
  company: string;
  title: string;
  category: CategoryType;
  isSuper: boolean;
  shortPerformance: string;
  fullPdca: PDCA;
  paid: boolean;
  image: string; // URL to placeholder
  year: number; // Added year field
}

export type PageView = 'home' | 'apply' | 'hall' | 'about' | 'admin';

export interface TimeLineEvent {
  date: string;
  title: string;
  description: string;
  status: 'past' | 'current' | 'future';
}
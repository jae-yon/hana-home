// 가중치
export type Weight = 0.5 | 1.0 | 1.2 | 1.5;

// 지역
export type Region = 'ALL' | 'LAND' | 'JEJU';

// 사업실적
export interface Portfolio {
  id: number;
  type: string;
  image: string;
  title: string;
  href?: string;
  module: string;
  inverter: string;
  capacity: string;
  subtitle?: string;
  isVisible: boolean;
  isMainVisible: boolean;
}

// 자주묻는질문
export interface FAQ {
  id: number;
  answer: string;
  question: string;
  isVisible: boolean;
}
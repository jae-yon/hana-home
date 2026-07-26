import { JSONContent } from '@tiptap/react';

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

// 견적문의
export interface Inquiry {
  name: string;
  robot: string;
  phone: string;
  address: string;
  content?: string;
  visitRoute: string;
  agreement: boolean;
}

// 공지사항
export interface Post {
  id: string;
  title: string;
  view_count: number;
  content: JSONContent;
  content_text: string;
  is_visible: boolean;
  created_at: Date;
  updated_at: Date;
  images: {
    id: number;
    path: string;
  }[];
}

/** 팝업 만료 기간 프리셋 (일) — 'custom'은 직접 날짜 선택 */
export type PopupExpirePreset = 30 | 60 | 90 | 180 | 365 | 'custom';

// 홈페이지 팝업
export interface Popup {
  id: string;
  priority: number;
  title: string;
  content: string | null;
  link_url: string | null;
  image_url: string | null;
  is_active: boolean;
  expires_at: string | null;
  created_at: string;
  user_id: string | null;
}

export type PopupInput = {
  title: string;
  content?: string | null;
  link_url?: string | null;
  image_url?: string | null;
  priority?: number;
  is_active?: boolean;
  expires_at?: string | null;
};
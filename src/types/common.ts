/** 가중치 */
export type Weight = 0.5 | 1.0 | 1.2 | 1.5;

/** 지역 */
export type Region = 'ALL' | 'LAND' | 'JEJU';

/** 자주묻는질문 */
export interface FAQ {
  id: number;
  answer: string;
  question: string;
  isVisible: boolean;
}

/** 견적문의 */
export interface Inquiry {
  name: string;
  robot: string;
  phone: string;
  address: string;
  content?: string;
  visitRoute: string;
  agreement: boolean;
}

import { JSONContent } from '@tiptap/react';

/** 게시글 */
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

/** 시공사례 유형 */
export type PortfolioType = 'PPA' | 'RPS' | 'RESIDENTIAL';

/** 시공사례 */
export interface Portfolio {
  id: string;
  type: PortfolioType;
  link_url?: string;
  image_url: string;
  title: string;
  module: string;
  inverter: string;
  capacity: string;
  subtitle?: string;
  is_visible: boolean;
  is_main_visible: boolean;

  created_at: Date;
  updated_at: Date;  
}

/** 시공사례 입력 */
export type PortfolioInput = {
  type: PortfolioType;
  title: string;
  module: string;
  inverter: string;
  capacity: string;
  image_url: string;
  subtitle?: string | null;
  link_url?: string | null;
  is_visible?: boolean;
  is_main_visible?: boolean;
};

/** 팝업 만료 기간 프리셋 (일) — 'custom'은 직접 날짜 선택 */
export type PopupExpirePreset = 30 | 60 | 90 | 180 | 365 | 'custom';

/** 홈페이지 팝업 */
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
// 상호명
export const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME as string || "㈜하나솔루션";

// 대표자
export const COMPANY_REPRESENTATIVE = import.meta.env.VITE_COMPANY_REPRESENTATIVE as string || "문서준";

// 사업자번호
export const COMPANY_BUSINESS_NUMBER = import.meta.env.VITE_COMPANY_BUSINESS_NUMBER as string || "372-88-03574";

// 전기공사업번호
export const COMPANY_ELECTRIC_BUSINESS_NUMBER = import.meta.env.VITE_COMPANY_ELECTRIC_BUSINESS_NUMBER as string || "서울-06429";

// 주소
export const COMPANY_ADDRESS = import.meta.env.VITE_COMPANY_ADDRESS as string || "전북특별자치도 부안군 부안읍 동중길 20";

// 대표번호
export const COMPANY_PHONE_NUMBER = import.meta.env.VITE_COMPANY_PHONE_NUMBER as string || "1577-1497";

// 팩스번호
export const COMPANY_FAX_NUMBER = import.meta.env.VITE_COMPANY_FAX_NUMBER as string || "504-427-5924";

// 이메일
export const COMPANY_EMAIL = import.meta.env.VITE_COMPANY_EMAIL as string || "hnsolution1116@naver.com";

// 카카오톡 채널 URL
export const COMPANY_KAKAO_CHANNEL_URL = import.meta.env.VITE_COMPANY_KAKAO_CHANNEL_URL as string || "https://pf.kakao.com/_KvpIX";

// 카카오톡 채널톡 URL
export const COMPANY_KAKAO_CHAT_URL = import.meta.env.VITE_COMPANY_KAKAO_CHAT_URL as string || "https://pf.kakao.com/_KvpIX/chat";

// 메인 페이지 배경 이미지
export const HERO_BACKGROUND_IMAGES = [
  { image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1920&q=90" },
  { image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?auto=format&fit=crop&w=1920&q=90" },
  { image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=1920&q=90" },
  { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=90" },
];

// 메인 페이지 배경 이미지 페이드 시간
export const FADE_DURATION_MS = 2000;

// 메인 페이지 배경 이미지 슬라이드 인터벌
export const SLIDE_INTERVAL_MS = 5000;

// 서브 페이지 정보
export const SUB_HERO_INFO = [
  { 
    pathname: "/about",
    title: "",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?auto=format&fit=crop&w=1920&q=80", 
  },
  { 
    pathname: "/business", 
    title: "", 
    subtitle: "", 
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1920&q=80" 
  },
  { pathname: "/support", 
    title: "", 
    subtitle: "", 
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80" 
  },
  { pathname: "/portfolio", 
    title: "시공사례", 
    subtitle: "Business Performance", 
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1074&auto=format&fit=crop&w=1920&q=90" 
  },
];

import { Portfolio } from '@/types/common';

import performanceImage01 from '@/assets/images/performance/performance_image_01.jpg';
import performanceImage02 from '@/assets/images/performance/performance_image_02.jpg';
import performanceImage03 from '@/assets/images/performance/performance_image_03.jpg';
import performanceImage04 from '@/assets/images/performance/performance_image_04.jpg';
import performanceImage05 from '@/assets/images/performance/performance_image_05.jpg';
import performanceImage06 from '@/assets/images/performance/performance_image_06.jpg';
import performanceImage07 from '@/assets/images/performance/performance_image_07.jpg';

// 사업 실적 아이템 리스트
export const PORTFOLIO_ITEMS: Portfolio[] = [
  {
    id: 1,
    image: performanceImage01,
    title: '서산시 500키로 발전소',
    type: 'PPA',
    module: 'S440ZI, S475ZJ',
    inverter: '전압형 인버터',
    capacity: '88MW',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 2,
    image: performanceImage02,
    title: '태안군 해상 태양광 단지',
    type: 'RPS',
    module: 'S450KG, S480KH',
    inverter: '전류형 인버터',
    capacity: '120MW',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 3,
    image: performanceImage03,
    title: '제주도 한림읍 육상 발전소',
    type: 'Residential',
    module: 'S460BI, S490BJ',
    inverter: '하이브리드 인버터',
    capacity: '45MW',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 4,
    image: performanceImage04,
    title: '전남 신안군 수상 태양광',
    type: 'PPA',
    module: 'S435ZI, S465ZJ',
    inverter: '전압형 인버터',
    capacity: '200MW',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 5,
    image: performanceImage05,
    title: '경북 포항시 산업단지 발전소',
    type: 'RPS',
    module: 'S470MG, S500MH',
    inverter: '전류형 인버터',
    capacity: '63MW',
    isVisible: false,
    isMainVisible: false,
  },
  {
    id: 6,
    image: performanceImage06,
    title: '충남 보령시 해안 태양광',
    type: 'RPS',
    module: 'S455BI, S485BJ',
    inverter: '하이브리드 인버터',
    capacity: '150MW',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 7,
    image: performanceImage07,
    title: '경남 고성군 육상 태양광 발전소',
    type: 'Residential',
    module: 'S465KG, S495KH',
    inverter: '전압형 인버터',
    capacity: '75MW',
    isVisible: true,
    isMainVisible: true,
  },
]

import blog from '@/assets/images/social/blog.png';
import kakao from '@/assets/images/social/kakao.png';
import tiktok from '@/assets/images/social/tiktok.png';
import youtube from '@/assets/images/social/youtube.png';

// Floating Action Button
export const PROMOTION_NAV_LINKS = [
  { name: '유튜브', image: youtube, url: '/#' },
  { name: '틱톡', image: tiktok, url: '/#' },
  { name: '블로그', image: blog, url: '/#' },
  { name: '카카오톡', image: kakao, url: COMPANY_KAKAO_CHAT_URL },
];

// Supabase
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
export const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
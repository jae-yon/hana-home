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

// 네이버 블로그 URL
export const COMPANY_NAVER_BLOG_URL = import.meta.env.VITE_COMPANY_NAVER_BLOG_URL as string || "https://blog.naver.com/hanasolution__";

// 틱톡 URL
export const COMPANY_TIKTOK_URL = import.meta.env.VITE_COMPANY_TIKTOK_URL as string || "https://www.instagram.com/climbing_sj";

// 유튜브 URL
export const COMPANY_YOUTUBE_URL = import.meta.env.VITE_COMPANY_YOUTUBE_URL as string || "https://www.youtube.com/@DingoMusic";

// 헤더 메뉴 데이터
export const HEADER_MENU = [
  {
    name: "회사소개",
    path: "/about",
    childMenu: [
      { name: "인사말", path: "/about/introduction" },
      { name: "연혁", path: "/about/history" },
      { name: "비전 및 가치", path: "/about/vision" },
      { name: "조직도", path: "/about/organization" },
      { name: "오시는 길", path: "/about/location" },
    ],
  },
  {
    name: "사업소개",
    path: "/business",
    childMenu: [
      { name: "사업개요", path: "/business/introduction" },
      { name: "가정용태양광", path: "/business/home-solar" },
      { name: "자가용PPA", path: "/business/ppa" },
      { name: "발전사업RPS", path: "/business/rps" },
      { name: "주차장태양광", path: "/business/parking-solar" },
      { name: "전기공사업", path: "/business/electrical-work" },
      { name: "RE100", path: "/business/re100" },
      { name: "리파워링", path: "/business/refurbishment" },
      { name: "예상 수익계산기", path: "/business/profit-calculator" },
    ],
  },
  {
    name: "시공사례",
    path: "/portfolio",
    childMenu: [
      { name: "PPA", path: "/portfolio/ppa" },
      { name: "RPS", path: "/portfolio/rps" },
      { name: "가정용태양광", path: "/portfolio/residential" },
    ],
  },
  {
    name: "홍보센터",
    path: "/promotion",
    childMenu: [
      { name: "사회공헌", path: "/promotion/social-contribution" },
      { name: "유튜브", path: COMPANY_YOUTUBE_URL },
      { name: "틱톡", path: COMPANY_TIKTOK_URL },
      { name: "블로그", path: COMPANY_NAVER_BLOG_URL },
    ],
  },
  {
    name: "고객센터",
    path: "/support",
    childMenu: [
      { name: "자주묻는질문", path: "/support/faq" },
      { name: "공지사항", path: "/support/notice" },
    ],
  },
];

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
    title: "회사소개",
    subtitle: "About Us",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1920&q=80", 
  },
  { 
    pathname: "/business", 
    title: "", 
    subtitle: "", 
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1920&q=80" 
  },
  { 
    pathname: "/performance", 
    title: "", 
    subtitle: "", 
    image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=1920&q=80" 
  },
  { 
    pathname: "/promotion", 
    title: "", 
    subtitle: "", 
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80" 
  },
  { pathname: "/support", 
    title: "고객센터", 
    subtitle: "Customer Support", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&w=1920&q=80" 
  },
  { pathname: "/portfolio", 
    title: "시공사례", 
    subtitle: "Business Performance", 
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1074&auto=format&fit=crop&w=1920&q=90" 
  },
];

import { FAQ, Portfolio } from '@/types/common';

import portfolioImage01 from '@/assets/images/portfolio/portfolio_image_01.png';
import portfolioImage02 from '@/assets/images/portfolio/portfolio_image_02.png';
import portfolioImage03 from '@/assets/images/portfolio/portfolio_image_03.png';
import portfolioImage04 from '@/assets/images/portfolio/portfolio_image_04.png';
import portfolioImage05 from '@/assets/images/portfolio/portfolio_image_05.png';
import portfolioImage06 from '@/assets/images/portfolio/portfolio_image_06.png';
import portfolioImage07 from '@/assets/images/portfolio/portfolio_image_07.png';
import portfolioImage08 from '@/assets/images/portfolio/portfolio_image_08.png';
import portfolioImage09 from '@/assets/images/portfolio/portfolio_image_09.png';
import portfolioImage10 from '@/assets/images/portfolio/portfolio_image_10.png';
import portfolioImage11 from '@/assets/images/portfolio/portfolio_image_11.png';

// 사업 실적 아이템 리스트
export const PORTFOLIO_ITEMS: Portfolio[] = [
  {
    id: 1,
    image: portfolioImage01,
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
    image: portfolioImage02,
    title: '태안군 해상 태양광 단지',
    type: 'RPS',
    module: 'S450KG, S480KH',
    inverter: '전류형 인버터',
    capacity: '120MW',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 3,
    image: portfolioImage03,
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
    image: portfolioImage04,
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
    image: portfolioImage05,
    title: '경북 포항시 산업단지 발전소',
    type: 'RPS',
    module: 'S470MG, S500MH',
    inverter: '전류형 인버터',
    capacity: '63MW',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 6,
    image: portfolioImage06,
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
    image: portfolioImage07,
    title: '경남 고성군 육상 태양광 발전소',
    type: 'Residential',
    module: 'S465KG, S495KH',
    inverter: '전압형 인버터',
    capacity: '75MW',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 8,
    image: portfolioImage08,
    title: '전북 익산시 육상 태양광 발전소',
    type: 'RPS',
    module: 'S480KG, S510KH',
    inverter: '전류형 인버터',
    capacity: '50MW',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 9,
    image: portfolioImage09,
    title: '충남 당진시 해상 태양광 발전소',
    type: 'PPA',
    module: 'S450KG, S485KH',
    inverter: '전압형 인버터',
    capacity: '120MW',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 10,
    image: portfolioImage10,
    title: '경북 포항시 육상 태양광 발전소',
    type: 'Residential',
    module: 'S470KG, S500KH',
    inverter: '하이브리드 인버터',
    capacity: '35MW',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 11,
    image: portfolioImage11,
    title: '전남 해남군 수상 태양광 발전소',
    type: 'RPS',
    module: 'S460KG, S490KH',
    inverter: '전류형 인버터',
    capacity: '90MW',
    isVisible: true,
    isMainVisible: true,
  },
]

// 자주묻는질문 아이템 리스트
export const FAQ_ITEMS: FAQ[] = [
  {
    id: 1,
    question: "두쫀쿠는 어떻게 만드나요?",
    answer: "초코 쿠키 반죽 속에 버터에 볶은 바삭한 카다이프와 고소한 피스타치오 페이스트를 가득 채워 구워내면 겉은 쫀득하고 속은 바삭한 '두바이 쿠키'가 완성됩니다.",
    isVisible: true,
  },
  {
    id: 2,
    question: "클라이밍에는 어떤 종류가 있나요?",
    answer: "대표적으로 볼더링, 리드 클라이밍, 스피드 클라이밍이 있습니다. 볼더링은 낮은 벽에서 로프 없이 진행하며, 리드는 로프를 사용해 높은 벽을 오르는 방식입니다. 스피드는 정해진 루트를 얼마나 빠르게 오르는지 기록을 겨루는 종목입니다.",
    isVisible: true,
  },
  {
    id: 3,
    question: "결제는 어떤 방식으로 진행되나요?",
    answer: "신용카드, 계좌이체, 간편결제를 통해 결제가 가능하며, 결제 완료 후 즉시 서비스가 활성화됩니다.",
    isVisible: true,
  },
  {
    id: 4,
    question: "환불은 가능한가요?",
    answer: "결제일로부터 7일 이내이며 서비스 사용 이력이 없는 경우 전액 환불이 가능합니다.",
    isVisible: true,
  },
  {
    id: 5,
    question: "기업 회원도 가입할 수 있나요?",
    answer: "네, 기업 회원 가입이 가능하며 별도의 사업자 인증 절차를 거치게 됩니다.",
    isVisible: true,
  },
  {
    id: 6,
    question: "이메일 인증이 오지 않아요.",
    answer: "스팸 메일함을 먼저 확인해 주세요. 그래도 확인되지 않는 경우 고객센터로 문의해 주세요.",
    isVisible: true,
  },
  {
    id: 7,
    question: "서비스 이용 시간은 어떻게 되나요?",
    answer: "서비스는 24시간 이용 가능하며, 정기 점검 시에는 사전 공지를 통해 안내드립니다.",
    isVisible: true,
  },
  {
    id: 8,
    question: "계정을 탈퇴하고 싶어요.",
    answer: "마이페이지 > 회원정보 수정 메뉴에서 탈퇴 신청이 가능합니다. 탈퇴 시 모든 데이터는 삭제됩니다.",
    isVisible: true,
  },
  {
    id: 9,
    question: "모바일에서도 이용할 수 있나요?",
    answer: "네, 반응형 웹으로 제작되어 모바일과 태블릿에서도 동일하게 이용 가능합니다.",
    isVisible: true,
  },
  {
    id: 10,
    question: "고객센터 운영 시간은 언제인가요?",
    answer: "고객센터는 평일 오전 9시부터 오후 6시까지 운영됩니다. 주말 및 공휴일은 휴무입니다.",
    isVisible: true,
  },
];

import blog from '@/assets/images/social/blog.png';
import kakao from '@/assets/images/social/kakao.png';
import tiktok from '@/assets/images/social/tiktok.png';
import youtube from '@/assets/images/social/youtube.png';

// Floating Action Button
export const PROMOTION_NAV_LINKS = [
  { name: '유튜브', image: youtube, url: COMPANY_YOUTUBE_URL },
  { name: '틱톡', image: tiktok, url: COMPANY_TIKTOK_URL },
  { name: '블로그', image: blog, url: COMPANY_NAVER_BLOG_URL },
  { name: '카카오톡', image: kakao, url: COMPANY_KAKAO_CHAT_URL },
];

// Supabase
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
export const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
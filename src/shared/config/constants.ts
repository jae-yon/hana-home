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
export const COMPANY_FAX_NUMBER = import.meta.env.VITE_COMPANY_FAX_NUMBER as string || "0504-427-5924";

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

// 헤더 메뉴
export const HEADER_MENU = [
  {
    name: "기업정보",
    path: "/about",
    childMenu: [
      { name: "회사소개", path: "/about/introduction" },
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
      { name: "전기공사업", path: "/portfolio/electrical-work" },
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

/**---------------------------------------- 메인 페이지 히어로 섹션 ----------------------------------------**/

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

/**---------------------------------------- 메인 페이지 히어로 섹션 ----------------------------------------**/

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

import portfolioHomeImage01 from '@/assets/images/portfolio/portfolio_home_01.png';
import portfolioHomeImage02 from '@/assets/images/portfolio/portfolio_home_02.png';
import portfolioHomeImage03 from '@/assets/images/portfolio/portfolio_home_03.png';
import portfolioHomeImage04 from '@/assets/images/portfolio/portfolio_home_04.jpg';
import portfolioHomeImage05 from '@/assets/images/portfolio/portfolio_home_05.png';

import portfolioRpsImage01 from '@/assets/images/portfolio/portfolio_rps_01.png';
import portfolioRpsImage02 from '@/assets/images/portfolio/portfolio_rps_02.png';
import portfolioRpsImage03 from '@/assets/images/portfolio/portfolio_rps_03.jpg';
import portfolioRpsImage04 from '@/assets/images/portfolio/portfolio_rps_04.png';
import portfolioRpsImage05 from '@/assets/images/portfolio/portfolio_rps_05.png';
import portfolioRpsImage06 from '@/assets/images/portfolio/portfolio_rps_06.png';

import portfolioPpaImage01 from '@/assets/images/portfolio/portfolio_ppa_01.png';
import portfolioPpaImage02 from '@/assets/images/portfolio/portfolio_ppa_02.png';
import portfolioPpaImage03 from '@/assets/images/portfolio/portfolio_ppa_03.png';
import portfolioPpaImage04 from '@/assets/images/portfolio/portfolio_ppa_04.png';
import portfolioPpaImage05 from '@/assets/images/portfolio/portfolio_ppa_05.png';


// 사업 실적(PPA, RPS, 가정용태양광) 아이템 리스트
export const PORTFOLIO_ITEMS: Portfolio[] = [
  {
    id: 1,
    image: portfolioHomeImage01,
    title: '전남 고흥군 세차장',
    subtitle: '지상형+건물 위',
    type: 'Residential',
    module: '현대 630w 48장',
    inverter: '금비전자 34kw',
    capacity: '30.24kw',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 2,
    image: portfolioHomeImage02,
    title: '전남 고흥군 상가',
    subtitle: '건물 위',
    type: 'Residential',
    module: '현대 630w 20장',
    inverter: '금비전자 3.5kw 4대',
    capacity: '12.6kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 3,
    image: portfolioHomeImage04,
    title: '충남 부여군 교회',
    subtitle: '건물 위',
    type: 'Residential',
    module: '현대 630w 8장',
    inverter: '금비전자 3.5kw 2대',
    capacity: '5.08kw',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 4,
    image: portfolioHomeImage05,
    title: '대구광역시 상가',
    subtitle: '건물 위',
    type: 'Residential',
    module: '현대 635w 30장',
    inverter: '금비전자 3.7kw 6대',
    capacity: '19.05kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 5,
    image: portfolioHomeImage03,
    title: '전남 영광군 상가',
    subtitle: '건물 위',
    type: 'Residential',
    module: '현대 635w 74장',
    inverter: '현대 60kw 1대',
    capacity: '46.99kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 6,
    image: portfolioRpsImage01,
    title: '충남 서산시 공장',
    subtitle: '건물 위',
    type: 'RPS',
    module: '현대 640w 765장',
    inverter: '현대 125kw 5대',
    capacity: '489.6kw',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 7,
    image: portfolioRpsImage02,
    title: '경기도 화성시 법인사업자',
    subtitle: '건물 위',
    type: 'RPS',
    module: '현대 635w 187장',
    inverter: '현대 125kw 1대, 현대 60kw 1대',
    capacity: '118.745kw',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 8,
    image: portfolioRpsImage03,
    title: '전북 부안군 축사',
    subtitle: '건물 위',
    type: 'RPS',
    module: '현대 625w 715장',
    inverter: '현대 125kw 4대, 현대 60kw 1대',
    capacity: '446.875kw',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 9,
    image: portfolioRpsImage04,
    title: '전북 전주시 부설주차장',
    subtitle: '지상형(주차장)',
    type: 'RPS',
    module: '한화 635w 155장',
    inverter: '현대 60kw 2대',
    capacity: '97.5kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 10,
    image: portfolioRpsImage05,
    title: '강원도 원주시 공장',
    subtitle: '건물 위',
    type: 'RPS',
    module: '현대 635w 122장',
    inverter: '현대 125kw 1대',
    capacity: '77.47kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 11,
    image: portfolioRpsImage06,
    title: '전북 전주시 부설주차장',
    subtitle: '지상형(주차장)',
    type: 'RPS',
    module: '현대 500w 195장',
    inverter: '현대 60kw 2대',
    capacity: '97.5kw',
    isVisible: true,
    isMainVisible: true,
  },
  {
    id: 12,
    image: portfolioPpaImage01,
    title: '전남 강진군 주택',
    subtitle: '지상형 + 건물 위',
    type: 'PPA',
    module: '한화 580w 25장',
    inverter: '금비전자 3.5kw 5대',
    capacity: '14.5kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 13,
    image: portfolioPpaImage02,
    title: '충남 예산군 주택',
    subtitle: '지상형',
    type: 'PPA',
    module: '현대 625w 24장',
    inverter: '금비전자 3.5kw 5대',
    capacity: '15kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 14,
    image: portfolioPpaImage03,
    title: '전남 해남군 주택',
    subtitle: '건물형',
    type: 'PPA',
    module: '한화 580w 34장',
    inverter: '금비전자 3.5kw 6대',
    capacity: '19.72kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 15,
    image: portfolioPpaImage04,
    title: '전북 정읍시 주택',
    subtitle: '건물형',
    type: 'PPA',
    module: '한화 580w 18장',
    inverter: '금비전자 3.5kw 3대',
    capacity: '10.44kw',
    isVisible: true,
    isMainVisible: false,
  },
  {
    id: 16,
    image: portfolioPpaImage05,
    title: '충북 청주시 주택',
    subtitle: '건물형',
    type: 'PPA',
    module: '현대 635w 24장',
    inverter: '금비전자 3.7kw 5대',
    capacity: '15.24kw',
    isVisible: true,
    isMainVisible: true,
  },
]

// 자주묻는질문 아이템 리스트
export const FAQ_ITEMS: FAQ[] = [
  {
    id: 1,
    question: "태양광이란 무엇인가요?",
    answer: "태양광은 태양의 빛 에너지를 이용해 전기를 생산하는 친환경 발전 시스템입니다. 태양광 사업은 가정용 태양광(상계거래), 자가소비형 PPA, 발전사업(RPS) 등으로 나뉘며 각 사업 유형에 따라 설치 비용 및 소요 기간이 상이할 수 있습니다.",
    isVisible: true,
  },
  {
    id: 2,
    question: "가정용 태양광이 무엇인가요?",
    answer: "가정용 태양광은 우리 집(지붕,마당 등)에 설치된 태양광 설비로 전기를 직접 생산하여 우선 사용하고, 남은 전력은 한전으로 역전송되어 다음 달 전기요금에서 차감되는 구조입니다. 전력이 계속 남을 경우 다음 달로 이월되어 장기적으로 전기요금 부담을 줄이는 효과가 있습니다.",
    isVisible: true,
  },
  {
    id: 3,
    question: "PPA가 무엇인가요?",
    answer: "자가소비형 PPA는 건물 지붕 등에 태양광 설비를 설치하여 생산된 전기를 해당 사업장에서 우선 사용하고, 남는 전력은 판매하여 추가 수익을 창출하는 방식입니다. 즉, 전기요금 절감과 발전 수익을 동시에 기대할 수 있는 구조입니다.",
    isVisible: true,
  },
  {
    id: 4,
    question: "RPS가 무엇인가요?",
    answer: "RPS(신재생에너지 공급의무화 제도)는 태양광 설비로 생산한 전력을 판매하여 SMP(전력 판매대금)와 REC 수익을 창출하는 발전사업 방식입니다. 사업장 내 유휴부지나 건물 지붕을 활용해 전기 사용 여부와 관계없이 장기적인 수익 창출이 가능합니다.",
    isVisible: true,
  },
  {
    id: 5,
    question: "SMP란?",
    answer: "태양광으로 생산된 전기를 한국전력 전력망을 통해 전력거래소 전력시장에 판매하고 전기 판매대금을 매월 정산받는 수익입니다.",
    isVisible: true,
  },
  {
    id: 6,
    question: "REC란?",
    answer: "태양광 발전 시 발급되는 신재생에너지 인증서로, RPS 의무가 있는 발전사에 별도로 판매하여 추가 수익 창출이 가능합니다.",
    isVisible: true,
  },
  {
    id: 7,
    question: "태양광을 설치하는데 조건이 필요한가요?",
    answer: "태양광 설치를 위해서는 몇 가지 설치 조건 확인이 필요합니다. 태양광 설치 조건은 여러 가지가 있지만 가장 우선적으로 확인해야 할 부분은 한전 선로 확보 여부입니다. 모든 태양광은 생산된 전기를 전력망으로 송전해야 하기 때문에 계통 연계 가능 여부에 따라 설치 가능 용량 및 사업 진행 여부가 결정될 수 있습니다.",
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
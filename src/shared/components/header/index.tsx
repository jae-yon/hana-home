import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';
import logo from '@/assets/vite.svg';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const headerMenu = [
  {
    name: '회사소개',
    path: '/about',
    childMenu: [
      { name: '인사말', path: '/about/introduction' },
      { name: '연혁', path: '/about/history' },
      { name: '비전 및 가치', path: '/about/vision' },
      { name: '조직도', path: '/about/organization' },
      { name: '오시는 길', path: '/about/location' },
    ],
  },
  {
    name: '사업소개',
    path: '/business',
    childMenu: [
      { name: '사업개요', path: '/business/introduction' },
      { name: '가정용태양광', path: '/business/home-solar' },
      { name: '자가용PPA', path: '/business/ppa' },
      { name: '발전사업RPS', path: '/business/rps' },
      { name: '주차장태양광', path: '/business/parking-solar' },
      { name: '전기공사업', path: '/business/electrical-work' },
      { name: 'RE100', path: '/business/re100' },
      { name: '리파워링', path: '/business/refurbishment' },
      { name: '예상 수익계산기', path: '/business/profit-calculator' },
    ],
  },
  {
    name: '사업실적',
    path: '/performance',
    childMenu: [
      { name: '자가소비', path: '/performance/self-consumption' },
      { name: '발전사업', path: '/performance/power-generation' },
      { name: '전기공사업', path: '/performance/electrical-work' },
    ],
  },
  {
    name: '홍보센터',
    path: '/promotion',
    childMenu: [
      { name: '사회공헌', path: '/promotion/social-contribution' },
      { name: '유튜브', path: '/promotion/youtube' },
      { name: '틱톡', path: '/promotion/tiktok' },
      { name: '블로그', path: '/promotion/blog' },
    ],
  },
  {
    name: '고객센터',
    path: '/support',
    childMenu: [
      { name: '자주묻는질문', path: '/support/faq' },
      { name: '공지사항', path: '/support/notice' },
      { name: '견적문의', path: '/support/inquiry' },
    ],
  },
]

export default function Header() {
  const { isDesktop } = useResponsive();
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <Box 
      width='100%' 
      position='fixed' 
      top={0} 
      left={0} 
      right={0} 
      zIndex={1000}
      transition='all 0.3s ease'
      boxShadow={isScrolled ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : 'none'}
      borderBottom={isScrolled ? '1px solid #e0e0e0' : 'none'}
      backgroundColor={isScrolled ? 'white' : 'transparent'} 
    >
      {isDesktop && <HeaderDesktop logo={logo} isScrolled={isScrolled} headerMenu={headerMenu} />}
      {!isDesktop && <HeaderMobile logo={logo} isScrolled={isScrolled} headerMenu={headerMenu} />}
    </Box>
  );
}
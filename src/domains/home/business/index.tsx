import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import { Impactor } from '@/shared/components/common/Impactor';

import BusinessHead from './components/BusinessHead';
import BusinessContents from './components/BusinessContents';

const businessItems = [
  {
    id: 1,
    title: "태양광 PPA",
    subtitle: "Power Purchase Agreement",
    description:
      "설비 투자 없이 태양광을 설치하고 장기 계약으로 전기를 구매하여, 재생에너지 사용을 공식적으로 인정받을 수 있습니다.",
    image: "https://images.unsplash.com/photo-1552197892-f2ad2f75e7c8?auto=format&fit=crop&w=1920&q=90",
    accent: "#2980B9",
    href: "#research",
  },
  {
    id: 2,
    title: "K-RE100",
    subtitle: "Renewable Electricity 100%",
    description:
      "한국형 RE100정책을 기반으로 맞춤형 컨설팅 및 서비스 및 운영을 제공합니다.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=90",
    accent: "#27AE60",
    href: "#netzero",
  },
  {
    id: 3,
    title: "태양광 리파워링",
    subtitle: "Re-Powering",
    description:
      "저효율·노후 설비를 최신 기술로 교체해 발전량 증가와 유지보수 비용 절감을 동시에 실현합니다.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1920&q=90",
    accent: "#F1C40F", 
    href: "#strategy",
  },  
  {
    id: 4,
    title: "발전사업 RPS",
    subtitle: "Renewable Portfolio Standard",
    description:
      "정부의 의무공급제도에 따라 형성된 REC 시장을 통해 태양광 발전의 수익성을 지원합니다.",
    image: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1920&q=90",
    accent: "#E67E22",
    href: "#solar",
  },
];

export default function Business() {
  const [expandedRow1, setExpandedRow1] = useState<number | null>(1);
  const [expandedRow2, setExpandedRow2] = useState<number | null>(4);

  const row1 = businessItems.slice(0, 2);
  const row2 = businessItems.slice(2, 4);
  
  // 초기화 설정
  useEffect(() => {
    if (expandedRow1 === null) {
      setExpandedRow1(1);
    }
    if (expandedRow2 === null) {
      setExpandedRow2(4);
    }
  }, [expandedRow1, expandedRow2, row1, row2]);

  // 행 클릭 핸들러
  const handleRow1Click = (id: number) => {
    setExpandedRow1((prev) => (prev === id ? null : id));
  };

  // 행 클릭 핸들러
  const handleRow2Click = (id: number) => {
    setExpandedRow2((prev) => (prev === id ? null : id));
  };
  
  return (
    <Box
      minH="100vh"
      bg="#0c0e14"
      py={{ base: "48px", md: "80px" }}
      px={{ base: "20px", md: "60px", lg: "80px" }}
    >
      <Box mb={{ base: "40px", md: "64px" }} maxW="650px">
        <Impactor direction="bottom" once delay={1}>
          <BusinessHead />
        </Impactor>
      </Box>

      <Box>
        <Impactor direction="left" once delay={1.5}>
          <BusinessContents 
            items={row1} 
            expandedRow={expandedRow1} 
            onExpand={handleRow1Click} 
            expandFrom="left" 
          />
        </Impactor>

        <Impactor direction="right" once delay={2.5}>
          <BusinessContents 
            items={row2} 
            expandedRow={expandedRow2} 
            onExpand={handleRow2Click} 
            expandFrom="right" 
          />
        </Impactor>
      </Box>
    </Box>
  );
}
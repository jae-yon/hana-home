import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import { Impactor } from '@/shared/components/common/Impactor';

import BusinessHead from './components/BusinessHead';
import BusinessContents from './components/BusinessContents';

import { BUSINESS_ITEMS } from '@/shared/config/constants';

export default function Business() {
  const [expandedRow1, setExpandedRow1] = useState<number | null>(1);
  const [expandedRow2, setExpandedRow2] = useState<number | null>(4);

  const row1 = BUSINESS_ITEMS.slice(0, 2);
  const row2 = BUSINESS_ITEMS.slice(2, 4);
  
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
      px={{ base: "24px", md: "0px" }}
      py={{ base: "48px", md: "80px" }}
    >
      <Box mb={{ base: "40px", md: "64px" }} px={{ base: "0px", md: "48px", lg: "72px", xl: "96px" }} maxW={{ base: "100%", md: "720px"}}>
        <Impactor direction="bottom" once delay={1}>
          <BusinessHead />
        </Impactor>
      </Box>

      <Box>
        <Impactor direction="left" once delay={1.5}>
          <BusinessContents 
            items={row1} 
            expandFrom="left" 
            expandedRow={expandedRow1} 
            onExpand={handleRow1Click} 
          />
        </Impactor>

        <Impactor direction="right" once delay={2.5}>
          <BusinessContents 
            items={row2} 
            expandFrom="right" 
            expandedRow={expandedRow2} 
            onExpand={handleRow2Click} 
          />
        </Impactor>
      </Box>
    </Box>
  );
}
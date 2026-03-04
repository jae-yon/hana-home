import { Box, Stack } from '@chakra-ui/react';

import RpsCta from '@/domains/business/rps/RpsCta';
import RpsHeader from '@/domains/business/rps/RpsHeader';
import RpsContents from '@/domains/business/rps/RpsContents';
import SummaryCard from '@/domains/business/common/SummaryCard';
import CompareTable from '@/domains/business/common/CompareTable';

import { useResponsive } from '@/shared/hooks/useResponsive';

export default function Rps() {
  const { isDesktop } = useResponsive();
  
  return (
    <Box
      mb={24}
      mt={12}
      gap={12}
      p={{ base: 0, md: 12 }}
      width="100%"
      height="auto"
      maxW="1280px"
      overflow="hidden"
      direction="column"
      position="relative" 
    >
      <RpsHeader />

      <RpsContents /> 

      <Stack gap={12} p={{ base: 4, md: 0 }}>
        <CompareTable type="rps" isDesktop={isDesktop} />
        <SummaryCard />
      </Stack>

      <RpsCta />
    </Box>
  );
}
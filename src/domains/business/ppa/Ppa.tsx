import { Box, Stack } from '@chakra-ui/react';

import PpaHeader from '@/domains/business/ppa/PpaHeader';
import PpaExample from '@/domains/business/ppa/PpaExample';
import PpaContents from '@/domains/business/ppa/PpaContents';
import CompareTable from '@/domains/business/common/CompareTable';

export default function Ppa() {
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
      <PpaHeader />

      <PpaContents />

      <Stack gap={12} p={{ base: 4, md: 0 }}>
        <CompareTable type="ppa" />
      </Stack>
      
      <PpaExample />
    </Box>
  );
}
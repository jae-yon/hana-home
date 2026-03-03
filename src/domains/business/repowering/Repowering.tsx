import { Box } from '@chakra-ui/react';

import RepoweringCause from '@/domains/business/repowering/RepoweringCause';
import RepoweringProcess from '@/domains/business/repowering/RepoweringStep';
import RepoweringHeader from '@/domains/business/repowering/RepoweringHeader';
import RepoweringEffects from '@/domains/business/repowering/RepoweringEffect';

export default function Repowering() {
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
      <RepoweringHeader />

      <RepoweringCause />

      <RepoweringEffects />

      <RepoweringProcess />
    </Box>
  );
}
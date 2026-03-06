import { Box, Stack } from '@chakra-ui/react';

import SolarHomeHero from './SolarHomeHero';
import SolarHomeWhat from './SolarHomeWhat';
import SolarHomeSavings from './SolarHomeSavings';
import SolarHomeExample from './SolarHomeExample';

export default function SolarHome() {
  return (
    <Box as="main" width="100%" maxW="1280px" mx="auto" overflow="hidden" my={24}>
      <Stack gap={0} direction="column">
        <SolarHomeHero />
        <SolarHomeWhat />
        <SolarHomeSavings />
        <SolarHomeExample />

        {/* 미사용 컴포넌트 */}
        {/* 
          <SolarHomeFeatures />
          <SolarHomeSpec /> 
        */}
      </Stack>
    </Box>
  );
}

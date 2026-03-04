import { Box, Stack } from '@chakra-ui/react';

import SolarHomeSpec from './SolarHomeSpec';
import SolarHomeHero from './SolarHomeHero';
import SolarHomeSavings from './SolarHomeSavings';
import SolarHomeFeatures from './SolarHomeFeatures';

export default function SolarHome() {
  return (
    <Box as="main" width="100%" maxW="1280px" mx="auto" overflow="hidden" my={24}>
      <Stack gap={0} direction="column">
        <SolarHomeHero />
        <SolarHomeSavings />
        <SolarHomeFeatures />
        <SolarHomeSpec />
      </Stack>
    </Box>
  );
}

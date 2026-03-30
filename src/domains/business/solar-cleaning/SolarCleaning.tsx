import { Box, Stack } from '@chakra-ui/react';

import SolarCleaningHero from './SolarCleaningHero';
import SolarCleaningInfo from './SolarCleaningInfo';
import SolarCleaningCause from './SolarCleaningCause';
import SolarCleaningCycle from './SolarCleaningCycle';
import SolarCleaningBenefits from './SolarCleaningBenefits';

export default function SolarCleaning() {
  return (
    <Box as="main" width="100%" maxW="1280px" mx="auto" overflow="hidden" my={24}>
      <Stack gap={0} direction="column">
        <SolarCleaningHero />
        <SolarCleaningCause />
        <SolarCleaningCycle />
        <SolarCleaningBenefits />
        <SolarCleaningInfo />
      </Stack>
    </Box>
  );
}
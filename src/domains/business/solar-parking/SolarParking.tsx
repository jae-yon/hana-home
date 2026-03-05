import { Box, Stack } from '@chakra-ui/react';

import SolarParkingHero from './SolarParkingHero';
import SolarParkingTypes from './SolarParkingTypes';
import SolarParkingWhatIs from './SolarParkingWhatIs';
import SolarParkingBenefits from './SolarParkingBenefits';
import SolarParkingHowItWorks from './SolarParkingHowItWorks';
import SolarParkingEv from './SolarParkingEv';
import SolarParkingStats from './SolarParkingStats';
import SolarParkingRoiTable from './SolarParkingRoiTable';

export default function SolarParking() {
  return (
    <Box 
      as="main" 
      width="100%" 
      maxW="1280px" 
      mx="auto" 
      overflow="hidden" 
      my={24}
    >
      <Stack gap={24} direction="column">
        <SolarParkingHero />
        <SolarParkingStats />
        <SolarParkingWhatIs />
        <SolarParkingBenefits />
        <SolarParkingHowItWorks />
        <SolarParkingTypes />
        <SolarParkingEv />
        <SolarParkingRoiTable />
      </Stack>
    </Box>
  );
}

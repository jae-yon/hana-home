import { Box, Stack } from '@chakra-ui/react';

import SolarParkingHero from './SolarParkingHero';
import SolarParkingStats from './SolarParkingStats';
import SolarParkingWhatIs from './SolarParkingWhatIs';
import SolarParkingExample from './SolarParkingExample';
import SolarParkingBenefits from './SolarParkingBenefits';
import SolarParkingHowItWorks from './SolarParkingHowItWorks';

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
        <SolarParkingExample />
        
        {/* 미사용 컴포넌트 */}
        {/* 
          <SolarParkingTypes />
          <SolarParkingEv />
          <SolarParkingRoiTable /> 
        */}
      </Stack>
    </Box>
  );
}

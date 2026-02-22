import { Box, Grid, GridItem, Separator } from '@chakra-ui/react';

import FooterCopyRight from './FooterCopyRight';
import FooterInformation from './FooterInformation';

export default function Footer() {
  return (
    <Box
      as={'footer'}
      bg={'gray.900'}
      borderTop={'1px solid'}
      borderColor={'gray.800'}
    >
      <Box
        maxW='1200px'
        mx='auto'
        px={{ base: '24px', md: '40px' }}
        pt={{ base: '48px', md: '64px' }}
        pb={{ base: '40px', md: '56px' }}
      >
        <Grid
          templateColumns={{ base: '1fr', md: '1.8fr repeat(3, 1fr)' }}
          gap={{ base: '40px', lg: '48px' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <GridItem display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>
            <FooterInformation />
          </GridItem>
        </Grid>
      </Box>

      {/* separator */}
      <Box
        maxW='1200px'
        mx='auto'
        px={{ base: '24px', md: '40px' }}
      >
        <Separator borderColor='gray.500' />
      </Box>
      {/* copyright */}
      <FooterCopyRight />
    </Box>
  );
}
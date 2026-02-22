import { Box, Flex, Text } from '@chakra-ui/react';

import { COMPANY_NAME } from '@/shared/config/constants';

export default function FooterCopyRight() {
  return (
    <Box
      maxW='1200px'
      mx='auto'
      px={{ base: '24px', md: '40px' }}
      py='20px'
    >
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        justify={{ base: 'center', sm: 'space-between' }}
        align={{ base: 'center', sm: 'center' }}
        gap='12px'
        textAlign={{ base: 'center', sm: 'left' }}
      >
        <Text fontSize='xs' color='gray.400'>
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </Text>

        <Text fontSize='xs' color='gray.400'>
          Photos by Unsplash.
        </Text>
      </Flex>
    </Box>
  );
}
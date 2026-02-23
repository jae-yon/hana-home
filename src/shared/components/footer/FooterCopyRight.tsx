import { Box, Flex, Text } from '@chakra-ui/react';

export default function FooterCopyRight() {
  return (
    <Box
      maxW='1200px'
      mx='auto'
      px={{ base: '24px', md: '40px' }}
      py='20px'
    >
      <Flex
        gap='12px'
        fontWeight='medium'
        fontFamily='Pretendard'
        align={{ base: 'center', sm: 'center' }}
        direction={{ base: 'column', sm: 'row' }}
        textAlign={{ base: 'center', sm: 'left' }}
        justify={{ base: 'center', sm: 'space-between' }}
      >
        <Text fontSize='xs' color='gray.400'>
          © {new Date().getFullYear()} HanaSolution. All rights reserved.
        </Text>

        <Text fontSize='xs' color='gray.400'>
          Photos by Unsplash.
        </Text>
      </Flex>
    </Box>
  );
}
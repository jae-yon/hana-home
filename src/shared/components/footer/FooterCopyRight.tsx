import { Box, Flex, Link, Text } from '@chakra-ui/react';

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
        <Link href='/hana/back' outline='none' fontSize='xs' color='gray.400'>
          © {new Date().getFullYear()} HanaSolution. All rights reserved.
        </Link>
        <Text fontSize='xs' color='gray.400'>
          Photos by Unsplash.
        </Text>
      </Flex>
    </Box>
  );
}
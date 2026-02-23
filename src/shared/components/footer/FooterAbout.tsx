import { Box, Link, Stack, Text, Heading } from '@chakra-ui/react';

export default function FooterAbout() {
  return (
    <Stack gap='20px' align={{ base: 'center', md: 'stretch' }} mx='auto'>
      <Box
        flex={1}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap={6}
        fontFamily='Pretendard'
      >
        <Heading fontSize='lg' fontWeight='medium' color='gray.300'>회사소개</Heading>

        <Link href='#' target='_blank'>
          <Text 
            fontSize='md' 
            fontWeight='medium'
            color='gray.400'
            _hover={{
              color: 'gray.200',
            }}
            transition='all 0.3s ease-in-out'
          >
            인사말
          </Text>
        </Link>

        <Link href='#' target='_blank'>
          <Text 
            fontSize='md' 
            fontWeight='medium'
            color='gray.400'
            _hover={{
              color: 'gray.200',
            }}
            transition='all 0.3s ease-in-out'
          >
            비전 및 가치
          </Text>
        </Link>
        
        <Link href='#' target='_blank'>
          <Text 
            fontSize='md' 
            fontWeight='medium'
            color='gray.400'
            _hover={{
              color: 'gray.200',
            }}
            transition='all 0.3s ease-in-out'
          >
            오시는길
          </Text>
        </Link>
      </Box>
    </Stack>
  );
}
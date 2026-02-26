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
        <Heading fontSize='lg' fontWeight='medium' color='gray.300'>기업정보</Heading>

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
            회사소개
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
            오시는 길
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
            
          </Text>
        </Link>
      </Box>
    </Stack>
  );
}
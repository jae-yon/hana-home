import { Box, Link, Stack, Text, Heading } from '@chakra-ui/react';

export default function FooterSocial() {
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
        <Heading fontSize='lg' fontWeight='medium' color='gray.300'>홍보센터</Heading>

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
            블로그
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
            틱톡
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
            유튜브
          </Text>
        </Link>
      </Box>
    </Stack>
  );
}
import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import { COMPANY_NAME, COMPANY_BUSINESS_NUMBER, COMPANY_REPRESENTATIVE, COMPANY_ADDRESS } from '@/shared/config/constants';

export default function FooterInformation() {
  return (
    <Stack gap='20px' align={{ base: 'center', md: 'stretch' }}>
      {/* logo */}
      <Flex align='center' justify={{ base: 'center', md: 'flex-start' }}>
        {/* <Image src={logo} alt='logo' width={6} objectFit='cover' /> */}
        <Text
          fontSize='lg'
          fontWeight='semibold'
          color='gray.300'
        >
          {COMPANY_NAME}
        </Text>
      </Flex>
      {/* introduction */}
      <Box
        display='flex'
        flexDirection='column'
        alignItems={{ base: 'center', md: 'flex-start' }}
        gap={1}
        textAlign={{ base: 'center', md: 'left' }}
        fontFamily='Pretendard'
      >
        <Text as='span' color='gray.400' fontSize='sm'>사업자등록번호: {COMPANY_BUSINESS_NUMBER}</Text> 
        <Text as='span' color='gray.400' fontSize='sm'>대표: {COMPANY_REPRESENTATIVE}</Text> 
        <Text as='span' color='gray.400' fontSize='sm'>주소: {COMPANY_ADDRESS}</Text> 
      </Box>
    </Stack>
  );
}
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';

import { COMPANY_KAKAO_CHAT_URL, COMPANY_PHONE_NUMBER } from '@/shared/config/constants';
import { LucideMessageCircle } from 'lucide-react';

export default function FooterSupport() {
  return (
    <Stack width='100%' align={{ base: 'center', md: 'stretch' }} mx='auto'>
      <Box
        p={8}
        gap={2}
        flex={1}
        display='flex'
        borderRadius='xl'
        alignItems='center'
        flexDirection='column'
        justifyContent='center'
        fontFamily='Pretendard'
        backgroundColor='gray.800'
      >
        <Heading fontSize='lg' fontWeight='medium' letterSpacing='0.05em' color='orange.600'>고객센터</Heading>

        <Text fontSize='3xl' textAlign='center' fontWeight='semibold' color='gray.400'>{COMPANY_PHONE_NUMBER}</Text>

        <Text fontSize='xs' textAlign='center' fontWeight='medium' color='gray.400'>평일 09:00 - 18:00 <br />(공휴일, 주말 제외)</Text>

        <Button
          size='xs'
          variant='plain'
          color='gray.400'
          borderColor='gray.400'
          borderRadius='lg'
          mt={2}
          px={4}
          py={2}
          _hover={{
            color: 'gray.200',
            borderColor: 'gray.200',
          }}
          transition='all 0.3s ease-in-out'
          onClick={() => window.open(COMPANY_KAKAO_CHAT_URL, '_blank', 'noopener,noreferrer')}
        >
          <LucideMessageCircle size={10} />
          <Text fontSize='xs' fontWeight='medium' letterSpacing='0.1em'>채널톡</Text>
        </Button>
      </Box>
    </Stack>
  );
}
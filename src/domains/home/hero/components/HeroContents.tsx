import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';

import { Impactor } from '@/shared/components/common/Impactor';

export default function HeroContents() {
  return (
      <Container
        maxW='container.xl'
        height='100%'
        position='relative'
        zIndex='1'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Stack
          maxW='600px'
          align='center'
          cursor='default'
          textAlign='center'
        >
          <Impactor direction='top' delay={1}>
            <Heading
              mb={8}
              color="white"
              fontWeight="700"
              lineHeight="1.35"
              textAlign="center"
              wordBreak="keep-all"
              fontFamily="Pretendard"
              letterSpacing="0.025em"
              overflowWrap="break-word"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              fontSize={{ base: "28px", sm: "32px", md: "48px", lg: "56px" }}
            >
              <Text as='span' color="#66CC55">지속가능한</Text>&nbsp;
              <Text as='span' color="#66CC55">에너지</Text>&nbsp;선택이 아닌&nbsp;
              <Text as='span' color="white">경쟁력</Text>입니다.
            </Heading>
          </Impactor>
          
          <Impactor direction='top' delay={1.2}>
            <Text
              mb={8}
              color="white"
              fontWeight="700"
              lineHeight="1.35"
              textAlign="center"
              wordBreak="keep-all"
              letterSpacing="0.05em"
              fontFamily="Pretendard"
              overflowWrap="break-word"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "24px" }}
            >
              <Text as='span' color="#F97316">㈜</Text><Text as='span' color="#FF7A00">하나솔루션</Text>은 기술과 신뢰를 기반으로 
              <br />지속 가능한 전력 가치를 함께 설계합니다.
            </Text>
          </Impactor>
          
          <Impactor direction='top' delay={1.4}>
            <Stack direction={{ base: 'column', sm: 'row' }} gap={4} align='center' justify='center'>
              <Button
                px={12}
                py={6}
                size='xl'
                shadow='xl'
                bg='#F97316'
                color='white'
                fontSize='xl'
                variant='solid'
                borderRadius='lg'
                fontWeight='700'
                letterSpacing='0.15em'
                fontFamily='NanumSquareNeo'
                transition='all 0.3s ease-in-out'
                boxShadow="2px 2px 4px rgba(0,0,0,0.3)"
                _hover={{ transform: 'translateY(-3px)', bg: 'orange.600' }}
              >
                견적문의
              </Button>
            </Stack>
          </Impactor>
        </Stack>
      </Container>
  );
}
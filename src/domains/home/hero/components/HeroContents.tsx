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
        <Impactor direction='top'>
          <Stack
            gap={9}
            maxW='600px'
            align='center'
            textAlign='center'
          >
            <Heading
              fontSize={{ base: "36px", md: "48px" }}
              fontWeight="700"
              lineHeight="1.35"
              letterSpacing="-0.02em"
              wordBreak="keep-all"
              overflowWrap="break-word"
              textAlign="center"
              color="white"
              fontFamily='Pretendard'
            >
              {/* 안정적인 발전 <br />확실한 수익 구조 */}
              {/* 안정적인 에너지<br />전략적인 선택 */}
              {/* 에너지 투자의 수익을 설계합니다 */}
              {/* 재생에너지 전환 선택이 아닌 경쟁력입니다 */}
              <Text as='span' color="#66CC55">지속가능한</Text> <Text as='span' color="#66CC55">에너지</Text> 선택이 아닌<br /> <Text as='span' color="white" fontWeight="790">경쟁력</Text>입니다
            </Heading>
            
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="700"
              lineHeight="1.7"
              textAlign="center"
              color="white"
              fontFamily=''
              letterSpacing='0.05em'
            >
              <Text as='span' color="#F97316">㈜</Text><Text as='span' color="#FF7A00">하나솔루션</Text>은 기술과 신뢰를 기반으로<br />
              지속 가능한 전력 가치를 함께 설계합니다.
            </Text>
            
            <Stack direction={{ base: 'column', sm: 'row' }} gap={4} align='center' justify='center'>
              <Button
                size='2xl'
                variant='solid'
                color='white'
                bg='#F97316'
                borderRadius='lg'
                px={16}
                py={6}
                fontSize='xl'
                fontWeight='medium'
                letterSpacing='0.05em'
                _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                transition='all 0.2s'
                shadow='lg'
              >
                견적문의
              </Button>
            </Stack>
          </Stack>
        </Impactor>
      </Container>
  );
}
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
            gap={6}
            maxW='600px'
            align='center'
            textAlign='center'
          >
            <Heading
              fontSize={{ base: "36px", md: "52px" }}
              fontWeight="700"
              lineHeight="1.35"
              letterSpacing="-0.02em"
              wordBreak="keep-all"
              overflowWrap="break-word"
              textAlign="center"
              color="white"
            >
              전기 요금 고민을 줄이는<br /> 현명한 선택
            </Heading>
            
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="medium"
              lineHeight="1.7"
              textAlign="center"
              color="white"
            >
              누구나 쉽고 안전하게
              태양광 에너지에 투자 할 수 있도록
              태양광 에너지 산업을 선도하는 솔라파트너스가
              더 나은 미래를 제시합니다
            </Text>
            
            <Stack direction={{ base: 'column', sm: 'row' }} gap={4} align='center' justify='center'>
              <Button
                size='xl'
                variant='solid'
                color='white'
                bg='orange.600'
                borderRadius='xl'
                px={10}
                py={6}
                fontSize='lg'
                fontWeight='medium'
                _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                transition='all 0.2s'
              >
                문의하기
              </Button>
              
              <Button
                size='xl'
                variant='outline'
                color='whiteAlpha.900'
                borderColor='white'
                borderRadius='xl'
                px={6}
                py={6}
                fontSize='lg'
                fontWeight='medium'
                _hover={{
                  bg: 'whiteAlpha.400',
                  transform: 'translateY(-2px)'
                }}
                transition='all 0.2s'
              >
                더 알아보기
              </Button>
            </Stack>
          </Stack>
        </Impactor>
      </Container>
  );
}
import { LucideArrowRight } from 'lucide-react';

import { Box, Heading, Text, HStack, Link } from '@chakra-ui/react';

const solar_home_bg = "https://images.unsplash.com/photo-1661997481002-d2f67de466b1?q=90&w=1280&auto=format&fit=crop"

export default function SolarHomeHero() {
  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      bg="gray.900"
      borderRadius={{ base: '0', lg: '2xl' }}
    >
      {/* background image */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url(${solar_home_bg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />

      {/* backdrop */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
        background="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.5) 100%)"
        borderRadius={{ base: '0', md: '2xl' }}
      />

      <Box
        position="relative"
        zIndex={10}
        maxW="1200px"
        margin="0 auto"
        px={{ base: 4, md: '6vw' }}
        width="100%"
      >
        <Heading
          as="h1"
          fontSize={{ base: '3rem', md: '5vw', lg: '6.5rem' }}
          lineHeight={1.05}
          color="white"
          mb={4}
        >
          햇빛을
          <br />
          <Text as="em" color="orange.500">
            자산
          </Text>
          으로
          <br />
          바꾸세요
        </Heading>

        <Text
          fontFamily="pretendard"
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          fontWeight={600}
          color="gray.300"
          mb={12}
          maxW="500px"
          lineHeight={1.7}
        >
          신뢰성 높은 고품질의 가정용 태양광 솔루션으로
          <br />
          전기요금 걱정 없는 삶을 시작하세요.
        </Text>

        <HStack
          gap={{ base: 6, md: 12 }}
          mb={12}
          flexWrap="wrap"
        >
          {[
            { num: '125만', label: '연간 최대 절감 금액' },
            { num: '25년', label: '출력 보증 기간' },
            { num: '12년', label: '무상 A/S 서비스' },
          ].map((item) => (
            <Box
              key={item.label}
              borderLeft="2px solid"
              borderColor="orange.500"
              pl={4}
            >
              <Text
                fontFamily="pretendard"
                fontSize={{ base: 'xl', md: '2xl', lg: '2.6rem' }}
                color="orange.500"
                lineHeight={1}
                fontWeight={700}
              >
                {item.num}
              </Text>
              <Text
                fontFamily="pretendard"
                fontSize="sm"
                color="gray.200"
                mt={1}
                letterSpacing="0.05em"
              >
                {item.label}
              </Text>
            </Box>
          ))}
        </HStack>

        <Link
          href="#savings"
          display="inline-flex"
          alignItems="center"
          gap={3}
          bg="orange.500"
          color="gray.900"
          fontWeight={600}
          fontSize="lg"
          py={4}
          px={8}
          borderRadius="xl"
          letterSpacing="0.05em"
          transition="all 0.25s"
          _hover={{
            bg: 'orange.600',
            transform: 'translateY(-2px)',
          }}
          fontFamily="pretendard"
        >
          절감 효과 확인하기
          <LucideArrowRight size={20} />
        </Link>
      </Box>
    </Box>
  );
}

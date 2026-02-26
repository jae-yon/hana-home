import { Box, Heading, Text } from '@chakra-ui/react'

export default function BusinessHead() {
  return (
    <Box>
      <Box>
        <Heading
          fontSize={{ base: "24px", sm: "36px",md: "52px" }}
          fontWeight="600"
          color="white"
          lineHeight="1.3"
          letterSpacing="-0.02em"
          mb="20px"
          textAlign="start"
        >
          검증된 태양광 <Text as='span' color="#F97316">기술</Text> <br /> 변함없는 <Text as='span' color="#2563EB">신뢰</Text>
        </Heading>
      </Box>
      <Text 
        fontSize={{ base: "14px", md: "18px" }}
        color="rgba(255, 255, 255, 0.73)"
        lineHeight="1.7"
        mb="20px"
      >
        까다로운 기준으로 선별한 고품질 자재, 전문 엔지니어의 맞춤 설계로 최대 효율을 보장합니다. 처음 설치부터 20년 후까지, 믿을 수 있는 에너지 파트너가 되겠습니다.
      </Text>
    </Box>
  );
}
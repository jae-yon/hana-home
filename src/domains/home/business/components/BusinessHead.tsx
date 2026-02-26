import { Box, Heading, Text } from '@chakra-ui/react'

export default function BusinessHead() {
  return (
    <Box>
      <Box>
        <Heading
          mb="20px"
          color="white"
          fontWeight="600"
          lineHeight="1.35"
          textAlign="start"
          wordBreak="keep-all"
          letterSpacing="-0.02em"
          overflowWrap="break-word"
          fontSize={{ base: "48px", md: "56px" }}
        >
          검증된 태양광 <Text as='span' color="#F97316">기술</Text> <br /> 변함없는 <Text as='span' color="#2563EB">신뢰</Text>
        </Heading>
      </Box>
      <Text 
        mb="20px"
        lineHeight="1.75"
        fontSize={{ base: "16px", md: "18px" }}
        color="rgba(255, 255, 255, 0.73)"
      >
        까다로운 기준으로 선별한 고품질 자재, 전문 엔지니어의 맞춤 설계로 최대 효율을 보장합니다. 처음 설치부터 20년 후까지, 믿을 수 있는 에너지 파트너가 되겠습니다.
      </Text>
    </Box>
  );
}
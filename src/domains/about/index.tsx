import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import {
  COMPANY_NAME,
  COMPANY_REPRESENTATIVE,
  COMPANY_ADDRESS,
  COMPANY_PHONE_NUMBER,
  COMPANY_EMAIL,
  COMPANY_BUSINESS_NUMBER,
} from '@/shared/config/constants';
import { useResponsive } from '@/shared/hooks/useResponsive';

export default function About() {
  const { isDesktop } = useResponsive();

  return (
    <Flex
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      px={isDesktop ? 12 : 4}
      py={12}
      gap={12}
    >
      {/* 인사말 섹션 */}
      <Box w="100%" maxW="1200px">
        <Heading
          as="h2"
          size="lg"
          color="gray.800"
          fontWeight="semibold"
          mb={6}
          fontFamily="Pretendard"
          borderBottomWidth="2px"
          borderBottomColor="gray.800"
          pb={2}
          display="inline-block"
        >
          인사말
        </Heading>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          color="gray.700"
          lineHeight="tall"
          fontFamily="Pretendard"
        >
          안녕하세요, <strong>{COMPANY_NAME}</strong>입니다.
          <br />
          <br />
          저희는 태양광 발전 사업을 통해 친환경 에너지 확산과 지역사회 발전에 기여하고 있습니다.
          가정용 태양광, PPA, RPS 등 다양한 사업 영역에서 고객 맞춤형 솔루션을 제공하며,
          신뢰와 품질을 바탕으로 함께 성장해 나가고자 합니다.
          <br />
          <br />
          고객 여러분의 관심과 성원에 감사드리며, 더 나은 에너지 내일을 위해 최선을 다하겠습니다.
        </Text>
      </Box>

      {/* 회사 이미지 & 정보 섹션 */}
      <Flex
        w="100%"
        maxW="1200px"
        direction={isDesktop ? 'row' : 'column'}
        gap={8}
        alignItems={isDesktop ? 'stretch' : 'center'}
      >
        <Box
          flex={isDesktop ? '1' : 'none'}
          overflow="hidden"
          borderRadius="lg"
          boxShadow="md"
          position="relative"
          minH={{ base: '240px', md: '320px' }}
        >
          
        </Box>
        <Box
          flex={isDesktop ? '1' : 'none'}
          bg="gray.50"
          borderRadius="lg"
          p={8}
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Heading
            as="h2"
            size="md"
            color="gray.800"
            fontWeight="semibold"
            mb={6}
            fontFamily="Pretendard"
          >
            회사 정보
          </Heading>
          <Flex direction="column" gap={4}>
            <InfoRow label="상호명" value={COMPANY_NAME} />
            <InfoRow label="대표자" value={COMPANY_REPRESENTATIVE} />
            <InfoRow label="사업자번호" value={COMPANY_BUSINESS_NUMBER} />
            <InfoRow label="주소" value={COMPANY_ADDRESS} />
            <InfoRow label="대표번호" value={COMPANY_PHONE_NUMBER} />
            <InfoRow label="이메일" value={COMPANY_EMAIL} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={2}
      align={{ base: 'flex-start', sm: 'center' }}
    >
      <Text
        fontWeight="semibold"
        fontSize="sm"
        color="gray.600"
        w={{ base: 'auto', sm: '100px' }}
        flexShrink={0}
      >
        {label}
      </Text>
      <Text fontSize="sm" color="gray.800">
        {value}
      </Text>
    </Flex>
  );
}

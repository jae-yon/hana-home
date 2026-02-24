import { useNavigate } from 'react-router-dom';
import { LucideArrowRight } from 'lucide-react';

import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Impactor } from '@/shared/components/common/Impactor';

interface PortfolioHeadProps {
  isDesktop: boolean;
}

export function PortfolioHead(props: PortfolioHeadProps) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/portfolio');
  };

  return (
    <Flex
      flexDirection="column"
      gap={{ base: 3, md: 4 }}
      mb={{ base: 0, md: 8 }}
      alignItems={props.isDesktop ? "stretch" : "center"}
      width="100%"
    >
      <Impactor direction="right" once>
        <Heading
          fontSize={{ base: "36px", md: "48px", lg: "52px" }}
          fontWeight="600"
          lineHeight="1.2"
          letterSpacing="-0.02em"
          textAlign={props.isDesktop ? "start" : "center"}
          maxW="100%"
          px={{ base: 1, md: 0 }}
          wordBreak="keep-all"
          overflowWrap="break-word"
          mb="20px"
        >
          현장을 먼저 이해하고 <br />그 위에 기술을 더합니다.
        </Heading>
      </Impactor>
      <Impactor direction="right" once delay={1}>
        <Text
          fontSize={{ base: "14px", md: "18px" }}
          fontWeight="medium"
          color="gray.500"
          lineHeight="1.6"
          maxW={{ base: "100%", md: "md", lg: "lg" }}
          textAlign={props.isDesktop ? "start" : "center"}
          px={{ base: 1, md: 0 }}
          mb="20px"
        >
          <Text as="span" color="red.500">하나솔루션</Text>의 시공 사례를 통해 설치를 넘어서 운영까지 현장에서 검증된 태양광 실적을 확인해보세요.
        </Text>
      </Impactor>

      <Impactor direction="right" once delay={1.3}>
        <Button
          size="lg"
          display="flex"
          alignItems="center"
          gap={2}
          color="red.500"
          width="fit-content"
          border="1px solid"
          borderColor="red.500"
          backgroundColor="transparent"
          borderRadius="lg"
          _hover={{
            color: "white",
            backgroundColor: "red.500",
          }}
          transition="all 0.3s ease-in-out"
          onClick={handleClick}
        >
          <Text as="span">시공사례 더보기</Text>
          <LucideArrowRight size={16} />
        </Button>
      </Impactor>
    </Flex>
  );
}
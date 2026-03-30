import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CopyIcon, GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';

import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';


import SOLAR_CLEANING_BUSINESS_CARD_IMAGE from '@/assets/images/business/cleaning_business_card.jpg';

const SOLAR_CLEANING_INFO_BG = "https://images.unsplash.com/photo-1662101525913-21d521ea4a11?q=80&w=1170&auto=format&fit=crop";

const SOLAR_CLEANING_INFO_DATA = {
  email: "yoonhj0108@naver.com",
  blog: "blog.naver.com/yoonsungclean",
  phone: "010-7531-9653",
}

const INQUIRY_PATH = '/support/inquiry';

export default function SolarCleaningInfo() {
  const navigate = useNavigate();

  const contact = useMemo(() => {
    const email = SOLAR_CLEANING_INFO_DATA.email.trim();
    const phone = SOLAR_CLEANING_INFO_DATA.phone.trim();
    const blogLabel = SOLAR_CLEANING_INFO_DATA.blog.trim();
    const blogUrl = blogLabel.startsWith('http') ? blogLabel : `https://${blogLabel}`;

    return { email, phone, blogLabel, blogUrl };
  }, []);

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <Box
      as="section"
      position="relative"
      py={{ base: 16, md: 20 }}
      display="flex"
      alignItems="center"
      overflow="hidden"
      borderRadius={{ base: '0', lg: '2xl' }}
    >
      {/* background image */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url(${SOLAR_CLEANING_INFO_BG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius={{ base: '0', md: '2xl' }}
      />

      {/* backdrop */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
        bg="linear-gradient(135deg, #0e2a0e 0%,rgba(26, 74, 26, 0.9) 60%,rgba(45, 106, 45, 0.6) 100%)"
        borderRadius={{ base: '0', md: '2xl' }}
      />

      <Box
        position="relative"
        zIndex={10}
        maxW="640px"
        margin="0 auto"
        px={{ base: 4 }}
        width="100%"
        mb={12}
      >
        <Box textAlign="center">
          <Text as="h2" mb={4} color="whiteAlpha.900" fontWeight="800" fontFamily="NanumSquareNeo" fontSize={{ base: '12px', sm: '16px' }}>
            <Text as="span" color="green.500">윤성클린산업</Text>에서는 전문적인 태양광 패널 청소 서비스를 제공합니다
          </Text>
          <Text as="h2" mb={8} color="white" fontWeight="700" fontSize={{ base: '32px', sm: '32px', md: '48px' }}>
            지금 바로 문의하세요
          </Text>

          <Button
            py={8}
            w="full"
            size="lg"
            color="white"
            fontSize="20px"
            bg="transparent"
            fontWeight="700"
            borderRadius="full"
            border="1px solid white"
            fontFamily="NanumSquareNeo"
            boxShadow="0 8px 28px rgba(42, 236, 132, 0.3)"
            letterSpacing="0.2em"
            _hover={{ transform: 'translateY(-2px)', bg: 'green.600', borderColor: 'green.500', boxShadow: '0 12px 32px rgba(42, 236, 132, 0.4)' }}
            transition="all 0.2s ease"
            onClick={() => {
              navigate(INQUIRY_PATH);
            }}
          >
            문의하기
          </Button>
        </Box>

        <Box
          mt={{ base: 10, md: 12 }}
          bg="rgba(255,255,255,0.08)"
          border="1px solid rgba(255,255,255,0.16)"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="0 20px 60px rgba(0,0,0,0.25)"
          backdropFilter="blur(10px)"
        >
          <Box p={{ base: 5, md: 6 }}>
            <Stack gap={3} align="center">
              <Stack gap={1}>
                <Stack direction={{ base: 'column', sm: 'row' }} gap={1} align={{ base: 'stretch', sm: 'center' }}>
                  <Text
                    color="white"
                    fontWeight="800"
                    fontFamily="NanumSquareNeo"
                    fontSize="16px"
                    letterSpacing="0.1em"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    width="fit-content"
                  >
                    <PhoneIcon size={20} strokeWidth={2.5} />
                    {contact.phone}
                  </Text>
                  <Button
                    p={0}
                    size="xs"
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    onClick={() => handleCopy(contact.phone)}
                    width={{ base: '100%', sm: 'fit-content' }}
                  >
                    <CopyIcon size={20} strokeWidth={2.5} />
                  </Button>
                </Stack>
              </Stack>

              <Stack gap={1}>
                <Stack direction={{ base: 'column', sm: 'row' }} gap={1} align={{ base: 'stretch', sm: 'center' }}>
                  <Text
                    color="white"
                    fontWeight="800"
                    fontFamily="NanumSquareNeo"
                    fontSize="16px"
                    letterSpacing="0.1em"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    width="fit-content"
                  >
                    <MailIcon size={20} strokeWidth={2.5} />
                    {contact.email}
                  </Text>
                  <Button
                    p={0}
                    size="xs"
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    onClick={() => handleCopy(contact.email)}
                    width={{ base: '100%', sm: 'fit-content' }}
                  >
                    <CopyIcon size={20} strokeWidth={2.5} />
                  </Button>
                </Stack>
              </Stack>

              <Stack gap={1}>
                <Stack direction={{ base: 'column', sm: 'row' }} gap={1} align={{ base: 'stretch', sm: 'center' }}>
                  <Text
                    color="white"
                    fontWeight="800"
                    fontFamily="NanumSquareNeo"
                    fontSize="16px"
                    letterSpacing="0.1em"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    width="fit-content"
                  >
                    <GlobeIcon size={20} strokeWidth={2.5} />
                    {contact.blogLabel}
                  </Text>
                  <Button
                    p={0}
                    size="xs"
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    onClick={() => handleCopy(contact.blogUrl)}
                    width={{ base: '100%', sm: 'fit-content' }}
                  >
                    <CopyIcon size={20} strokeWidth={2.5} />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <Box px={{ base: 5, md: 6 }} pb={{ base: 5, md: 6 }}>
            <Box
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 10px 30px rgba(0,0,0,0.25)"
            >
              <Image
                src={SOLAR_CLEANING_BUSINESS_CARD_IMAGE}
                alt="윤성클린산업 명함"
                width="100%"
                height="auto"
                loading="lazy"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

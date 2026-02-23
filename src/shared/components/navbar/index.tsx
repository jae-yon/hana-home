import { useState, useEffect } from 'react';

import { Box, Collapsible, IconButton, Stack, Image } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';

import tiktokImage from '@/assets/images/social/Tiktok.svg';
import blogImage from '@/assets/images/social/NaverBlog.svg';
import youtubeImage from '@/assets/images/social/YouTube.svg';
import kakaoTalkImage from '@/assets/images/social/KakaoTalk.svg';
import { ChevronDownIcon } from 'lucide-react';

const NAV_LINKS = [
  { name: '틱톡', image: tiktokImage, url: '/#' },
  { name: '블로그', image: blogImage, url: '/#' },
  { name: '유튜브', image: youtubeImage, url: '/#' },
  { name: '카카오톡', image: kakaoTalkImage, url: '/#' },
];

export default function Navbar() {
  const { isDesktop } = useResponsive();
  
  const [isFolded, setIsFolded] = useState(isDesktop);

  useEffect(() => {
    setIsFolded(isDesktop);
  }, [isDesktop]);

  const toggle = () => setIsFolded((prev) => !prev);

  return (
    <Box
      position="fixed"
      bottom={{ base: 4, md: 6 }}
      right={{ base: 4, md: 6 }}
      zIndex={900}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="white"
      borderRadius="full"
      border="1px solid"
      borderColor="gray.300"
      overflow="hidden"
    >
      <Collapsible.Root open={isFolded}>
        <Collapsible.Content>
          <Stack
            px={4}
            pt={4}
            pb={2}
            gap={6}
            direction="column"
            alignItems="center"
          >
            {NAV_LINKS.map((item) => (
              <IconButton
                key={item.name}
                aria-label={item.name}
                backgroundColor="transparent"
                transition="all 0.3s ease-in-out"
                onClick={() => window.open(item.url, '_blank')}
                _hover={{ translateY: '-2px', transform: 'scale(1.1)' }}
              >
                <Image src={item.image} alt={item.name} width={10} height={10} objectFit="contain" />
              </IconButton>
            ))}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>

      {/* 토글 버튼: 카드 맨 아래에 고정, 접어도 항상 보임 */}
      <Box px={4} pb={4} pt={4}>
        <IconButton
          aria-label={isFolded ? '네비게이션 접기' : '네비게이션 펼치기'}
          size="lg"
          borderRadius="full"
          bg="gray.800"
          color="white"
          boxShadow="md"
          border="1px solid"
          borderColor="gray.600"
          _hover={{ bg: 'gray.700', transform: 'scale(1.05)' }}
          _active={{ bg: 'gray.600' }}
          onClick={toggle}
          transition="transform 0.3s ease-in-out"
        >
          <Box
            as="span"
            display="block"
            textAlign="center"
            transform={isFolded ? 'rotate(180deg)' : 'rotate(0deg)'}
            transition="transform 0.3s ease-in-out"
          >
            <ChevronDownIcon width={24} height={24} />
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
}

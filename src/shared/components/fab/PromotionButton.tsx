import { useState } from 'react';
import { XIcon } from 'lucide-react';

import { IconButton, Flex, Image, Collapsible, Link } from '@chakra-ui/react';

import tiktok from '@/assets/images/social/tiktok.png';
import blog from '@/assets/images/social/blog2.png';
import youtube from '@/assets/images/social/youtube.png';
import kakao from '@/assets/images/social/kakao2.png';

const NAV_LINKS = [
  { name: '유튜브', image: youtube, url: '/#' },
  { name: '블로그', image: blog, url: '/#' },
  { name: '틱톡', image: tiktok, url: '/#' },
  { name: '카카오톡', image: kakao, url: '/#' },
];

export function PromotionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Collapsible.Root>
      <Collapsible.Content overflow="visible">
        <Flex
          mb={2}
          gap={2}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              outline="none"
              borderRadius="full"
              backgroundColor="transparent"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image src={link.image} alt={link.name} width={12} height={12} objectFit="contain" />
            </Link>
          ))}
        </Flex>
      </Collapsible.Content>
      {/* Collapse Trigger */}
      <Collapsible.Trigger onClick={toggle}>
        <IconButton
          size="xl"
          color="white"
          borderRadius="full"
          backgroundColor="orange.600"
          transition="all 0.3s ease"
          boxShadow="0 1px 8px -4px rgba(0,0,0,0.8)"
          transform={isOpen ? "rotate(0deg)" : "rotate(45deg)"}
          _hover={{ transform: "scale(1.05)" }}
        >
          <XIcon width={20} height={20} strokeWidth={2.5} />
        </IconButton>
      </Collapsible.Trigger>
    </Collapsible.Root>
  );
}
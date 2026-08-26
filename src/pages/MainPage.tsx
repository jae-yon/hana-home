import { Flex } from '@chakra-ui/react';

import Popup from '@/shared/components/common/Popup';
import PageLayout from '@/shared/components/layout/PageLayout';

import Hero from '@/domains/home/hero';
import Insight from '@/domains/home/insight';
import Business from '@/domains/home/business';
import Portfolio from '@/domains/home/portfolio';
import { useActivePopups } from '@/shared/hooks/usePopup';

export default function MainPage() {
  const { data: popups = [] } = useActivePopups();

  return (
    <PageLayout showSubHero={false}>
      {/* hero section */}
      <Hero />
      {/* insight section */}
      <Insight />
      {/* business section */}
      <Business />
      {/* portfolio section */}
      <Portfolio />

      {/* 팝업 — 좁은 화면에서는 wrap으로 세로 배치 */}
      {popups.length > 0 && (
        <Flex
          position="fixed"
          top={{ base: '88px', md: '120px' }}
          left={{ base: 4, md: 8 }}
          right={{ base: 4, md: 'auto' }}
          zIndex={2}
          gap={4}
          direction="row"
          flexWrap="wrap"
          align="flex-start"
          maxH={{ base: 'calc(100vh - 100px)', md: 'calc(100vh - 140px)' }}
        >
          {popups.map((popup) => (
            <Popup
              key={popup.id}
              title={popup.title}
              defaultOpen
              storageKey={`popup-${popup.id}`}
              text={popup.content ?? undefined}
              imageUrl={popup.image_url ?? undefined}
              link={popup.link_url ?? undefined}
            />
          ))}
        </Flex>
      )}
    </PageLayout>
  );
}

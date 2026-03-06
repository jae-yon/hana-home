import { Flex } from '@chakra-ui/react';

import { useResponsive } from '@/shared/hooks/useResponsive';
import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

import SocialContribution from '@/domains/promotion/components/SocialContribution';

const navItems: { name: string, path: string }[] = [
  { name: '사회공헌', path: '/promotion/social-contribution' },
];

interface PromotionProps {
  type: 'social-contribution';
}

export default function Promotion(props: PromotionProps) {
  const { type } = props;
  const { isDesktop } = useResponsive();
  return (
    <Flex 
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {isDesktop ? <SubNavbarDesktop type={type} items={navItems} /> : <SubNavbarMobile type={type} items={navItems} />}
      {type === 'social-contribution' && <SocialContribution />}
    </Flex>
  );
}
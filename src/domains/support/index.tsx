import { Flex } from '@chakra-ui/react';

import FAQContents from './components/FAQContents';
import InquiryForm from './components/InquiryForm';
import NoticeDetail from './components/NoticeDetail';
import NoticeEditor from './components/NoticeEditor';
import NoticeContents from './components/NoticeContents';

import { useResponsive } from '@/shared/hooks/useResponsive';
import { SubNavbarDesktop, SubNavbarMobile } from '@/shared/components/sub/SubNavbar';

interface SupportProps {
  type: 'faq' | 'notice' | 'inquiry';
  id?: string;
}

const navItems: { name: string, path: string }[] = [
  { name: 'FAQ', path: '/support/faq' },
  { name: '공지사항', path: '/support/notice' },
  { name: '견적문의', path: '/support/inquiry' },
];

export default function Support(props: SupportProps) {
  const { type, id } = props;
  const { isDesktop } = useResponsive();
  return (
    <Flex 
      gap={12}
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {isDesktop ? <SubNavbarDesktop type={type} items={navItems} /> : <SubNavbarMobile type={type} items={navItems} />}
      {type === 'faq' && <FAQContents />}
      {type === 'inquiry' && <InquiryForm />}

      {type === 'notice' && (
        !id ? <NoticeContents /> :
        id === 'new' ? <NoticeEditor /> :
        id === 'edit' ? <NoticeEditor /> :
        <NoticeDetail />
      )}
    </Flex>
  );
}
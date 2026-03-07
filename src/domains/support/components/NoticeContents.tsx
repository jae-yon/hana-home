import { useNavigate } from 'react-router-dom';

import { FileExclamationPoint } from 'lucide-react';

import {Flex, Box, Text, Heading, Button} from '@chakra-ui/react';

import { formatDateToKorean } from '@/shared/utils/date';
import { Impactor } from '@/shared/components/common/Impactor';

import { useNotice } from '@/domains/support/hooks/useNotice';

import type { Post } from '@/types/common';

export default function NoticeContents() {
  const { data: notices } = useNotice();
  
  const navigate = useNavigate();

  const handleWriteNotice = () => {
    navigate('/support/notice/new');
  }

  return (
    <Flex
      mb={24}
      mt={12}
      gap={8}
      p={{ base: 0, md: 12 }}
      width="100%"
      height="auto"
      maxW="1280px"
      direction="column"
      position="relative"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        mb={4}
      >
        <Heading
          fontWeight="bold"
          color="gray.800"
          letterSpacing="0.02em"
          ms={{ base: 4, md: 0 }}
          fontSize={{ base: '28px', sm: '32px', md: '36px', lg: '48px' }}
        >
          공지사항
        </Heading>
        {sessionStorage.getItem('access_token') && (
          <Button
            px={6}
            py={2}
            size="sm"
            fontSize="sm"
            fontWeight="600"
            borderRadius="none"
            letterSpacing="0.05em"
            fontFamily="pretendard"
            backgroundColor="orange.500"
            color="white"
            _hover={{
              backgroundColor: "orange.600",
            }}
            onClick={handleWriteNotice}
          > 
            새 공지 작성
          </Button>
        )}
      </Box>

      <Impactor direction="bottom" once>
        <Box
          overflowX="auto"
          fontFamily="NanumSquareNeo"
        >
          <Box>
            {notices?.length === 0 ? (
              <Box
                gap={12}
                minH="100vh"
                display="flex"
                color="gray.500"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
              >
                <FileExclamationPoint
                  size={64}
                  strokeWidth={1.5}
                />
                <Text fontSize="xl" fontWeight="bold">등록된 공지사항이 없습니다.</Text>
              </Box>
            ) : (
              <Box
                borderTopWidth="2px"
                borderColor="gray.500"
              >
                {notices?.map((notice: Post) => (
                  <Box
                    key={notice.id}
                    px={6}
                    py={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    borderBottomWidth="1px"
                    borderColor="gray.200"
                    cursor="pointer"
                    _hover={{ backgroundColor: 'gray.100' }}
                    onClick={() => navigate(`/support/notice/${notice.id}`)}
                  >
                    <Text fontSize="lg" fontWeight="bold">{notice.title}</Text>
                    <Text fontSize="sm" color="gray.500">{formatDateToKorean(notice.created_at)}</Text>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Impactor>
    </Flex>
  );
}
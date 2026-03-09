import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeft, Pencil, Trash } from 'lucide-react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';

import { formatDateToKorean } from '@/shared/utils/date';
import EditorViewer from '@/shared/components/editor/EditorViewer';

import { useDeleteNotice, useNoticeDetail } from '@/domains/support/hooks/useNotice';

export default function NoticeDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // 공지사항 상세 조회
  const { data: notice, isLoading, isError, isFetched } = useNoticeDetail(id);
  
  // 공지사항 삭제
  const { mutate: deleteNoticeMutation } = useDeleteNotice();

  // id가 없거나 조회 실패 시 목록으로 이동
  useEffect(() => {
    if (!id) {
      navigate('/support/notice');
      return;
    }
    if (isFetched && (isError || !notice)) {
      navigate('/support/notice');
    }
  }, [id, isError, notice, isFetched, navigate]);

  if (!id) {
    return null;
  }

  if (isLoading) {
    return (
      <Flex
        width="100%"
        minH="40vh"
        alignItems="center"
        justifyContent="center"
        p={12}
      >
        <Spinner size="xl" color="orange.500" />
      </Flex>
    );
  }

  if (!notice) {
    return null;
  }

  const handleDeleteNotice = () => {
    if (!sessionStorage.getItem('access_token') && !sessionStorage.getItem('refresh_token')) {
      alert('로그인 후 이용해주세요.');
      return;
    }
    
    if (confirm('선택한 게시글을 영구적으로 삭제합니다.')) {
      deleteNoticeMutation(notice.id);
    }
  }

  return (
    <Flex
      width="100%"
      maxW="1280px"
      direction="column"
      gap={6}
      p={{ base: 4, md: 12 }}
      mb={24}
      mt={8}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        borderBottomWidth="2px"
        borderColor="gray.200"
        pb={2}
        px={2}
      >
        <Heading
          as="h1"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          color="gray.800"
          lineHeight="tall"
          mb={3}
        >
          {notice.title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {formatDateToKorean(notice.created_at)}
        </Text>
      </Box>

      <Box
        fontFamily="NanumSquareNeo"
        fontSize="md"
        lineHeight="1.8"
        color="gray.700"
      >
        {notice.content?.content && notice.content.content.length > 0 ? (
          <EditorViewer content={notice.content} />
        ) : (
          <Text color="gray.500">내용이 없습니다.</Text>
        )}
      </Box>

      <Flex justifyContent="flex-end" gap={2}>
        {sessionStorage.getItem('access_token') && (
          <>
            <Button
              alignSelf="flex-start"
              backgroundColor="blue.500"
              color="white"
              size="sm"
              _hover={{ bg: 'blue.600' }}
              gap={1}
              fontWeight="500"
              letterSpacing="0.05em"
              fontFamily="pretendard"
              borderRadius="none"
              onClick={() => navigate(`/support/notice/edit?id=${notice.id}`)}
            >
              <Pencil size={16} strokeWidth={1.5} />
              수정
            </Button>
            <Button
              alignSelf="flex-start"
              backgroundColor="red.500"
              color="white"
              size="sm"
              _hover={{ bg: 'red.600' }}
              gap={1}
              fontWeight="500"
              letterSpacing="0.05em"
              fontFamily="pretendard"
              borderRadius="none"
              onClick={handleDeleteNotice}
            >
              <Trash size={16} strokeWidth={1.5} />
              삭제
            </Button>
          </>
        )}

        <Button
          alignSelf="flex-start"
          variant="ghost"
          colorScheme="gray"
          size="sm"
          onClick={() => navigate(-1)}
          _hover={{ bg: 'gray.100' }}
          gap={1}
          fontWeight="500"
          letterSpacing="0.05em"
          fontFamily="pretendard"
          borderRadius="none"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          뒤로가기
        </Button>
      </Flex>
    </Flex>
  );
}

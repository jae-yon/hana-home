import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Box, Button, Field, Flex, Input, Spinner } from '@chakra-ui/react';

import type { JSONContent } from '@tiptap/react';

import Editor from '@/shared/components/editor/Editor';

import type { Post } from '@/types/common';
import { useNoticeDetail, usePostNotice } from '../hooks/useNotice';

const initialPost: Post = {
  id: '',
  title: '',
  view_count: 0,
  content: {
    type: 'doc',
    content: [],
  },
  content_text: '',
  is_visible: true,
  created_at: new Date(),
  updated_at: new Date(),
  images: [],
}

// 
function parseContent(value: unknown): JSONContent {
  if (!value) return { type: 'doc', content: [] };
  if (typeof value === 'object' && value !== null && 'type' in value) {
    return value as JSONContent;
  }
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value) as JSONContent;
      return parsed?.type === 'doc' ? parsed : { type: 'doc', content: [] };
    } catch {
      return { type: 'doc', content: [] };
    }
  }
  return { type: 'doc', content: [] };
}

function parseDate(value: unknown): Date {
  if (value instanceof Date) return value;
  if (typeof value === 'string') {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? new Date() : d;
  }
  return new Date();
}

export default function NoticeEditor() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const noticeId = searchParams.get('id') ?? undefined;

  const { data: notice, isLoading: isNoticeLoading } = useNoticeDetail(noticeId);
  const [post, setPost] = useState<Post>(initialPost);
  const [isPostInitialized, setIsPostInitialized] = useState(false);

  // 수정 모드: 공지 데이터 로드 후 post에 반영
  useEffect(() => {
    if (!noticeId || !notice || isPostInitialized) return;

    setPost({
      id: notice.id ?? '',
      title: notice.title ?? '',
      view_count: notice.view_count ?? 0,
      content: notice.content ?? { type: 'doc', content: [] },
      content_text: notice.content_text ?? '',
      is_visible: notice.is_visible ?? true,
      created_at: notice.created_at ?? new Date(),
      updated_at: notice.updated_at ?? new Date(),
      images: Array.isArray(notice.images) ? notice.images : [],
    });
    setIsPostInitialized(true);
  }, [noticeId, notice, isPostInitialized]);

  // 수정 모드인데 공지가 없으면 목록으로 이동
  useEffect(() => {
    if (noticeId && !isNoticeLoading && !notice) {
      navigate('/support/notice');
    }
  }, [noticeId, notice, isNoticeLoading, navigate]);

  // 신규 모드로 전환 시 초기화
  useEffect(() => {
    if (!noticeId) {
      setPost(initialPost);
      setIsPostInitialized(false);
    }
  }, [noticeId]);

  // 미로그인 시 공지사항 페이지로 이동
  if (!sessionStorage.getItem('access_token') && !sessionStorage.getItem('refresh_token')) navigate('/support/notice');

  const { mutate: postingMutation, isPending } = usePostNotice();
  
  const handleContentUpdate = (content: JSONContent, text: string) => {
    if (!post) return;
    setPost({ ...post, content, content_text: text });
  }

  const handleSubmit = async () => {
    if (post.content_text.length === 0) {
      alert('내용을 입력해주세요.');
      return;
    }
    if (post.title.length === 0) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (!sessionStorage.getItem('access_token') && !sessionStorage.getItem('refresh_token')) {
      alert('로그인 후 이용해주세요.');
      return;
    }
    postingMutation(post);
  }

  // 수정 모드에서 공지 데이터 로딩 중
  if (noticeId && isNoticeLoading) {
    return (
      <Flex width="100%" minH="40vh" alignItems="center" justifyContent="center" p={12}>
        <Spinner size="xl" color="orange.500" />
      </Flex>
    );
  }

  // 수정 모드인데 해당 공지가 없으면 null (useEffect에서 목록으로 이동)
  if (noticeId && !isNoticeLoading && !notice) {
    return null;
  }

  return (
    <Flex
      mb={24}
      mt={12}
      gap={4}
      p={{ base: 4, md: 12 }}
      width="100%"
      height="auto"
      maxW="1280px"
      direction="column"
      position="relative"
    >
      <Box
        display="flex"
        alignItems="center"
        fontFamily="pretendard"
        justifyContent="flex-start"
        gap={2}
      >
        <Field.Root>
          <Input
            px={4}
            py={4}
            size="xl"
            bg="white"
            outline="none"
            fontSize="lg"
            borderRadius="none"
            overflow="hidden"
            border="1px solid"
            borderColor="gray.200"
            letterSpacing="0.025em"
            placeholder="제목을 입력해주세요."
            transition="border-color 0.2s, box-shadow 0.2s"
            _focusWithin={{
              borderColor: 'gray.500',
              boxShadow: '0 0 0 1px var(--chakra-colors-gray-500)',
            }}
            name="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </Field.Root>
        {/* 저장, 취소 버튼 그룹 */}
        <Box display="flex" gap={2}>
          <Button
            px={4}
            py={4}
            size="xl"
            bg="orange.500"
            color="white"
            outline="none"
            borderRadius="none"
            overflow="hidden"
            fontSize="md"
            letterSpacing="0.075em"
            fontWeight="500"
            onClick={handleSubmit}
            loading={isPending}
            disabled={isPending}
          >
            저장
          </Button>
          <Button
            px={4}
            py={4}
            size="xl"
            bg="gray.500"
            outline="none"
            borderRadius="none"
            overflow="hidden"
            fontSize="md"
            fontWeight="500"
            letterSpacing="0.075em"
            onClick={() => navigate('/support/notice')}
          >
            취소
          </Button> 
        </Box>
      </Box>
      <Box
        mb={4}
      >
        <Editor
          content={post.content}
          onUpdate={handleContentUpdate}
        />
      </Box>
    </Flex>
  );
}
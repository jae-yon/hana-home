import { useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  EyeIcon,
  PlusIcon,
  PencilIcon,
  Trash2Icon,
  AppWindowIcon,
  CircleCheckIcon,
  XIcon,
} from 'lucide-react';

import type { Popup } from '@/types/common';
import PopupEditDialog from '@/domains/admin/components/PopupEditDialog';
import PopupPreview from '@/shared/components/common/Popup';
import {
  useDeletePopup,
  usePopups,
  useTogglePopupActive,
} from '@/domains/admin/hooks/usePopup';

function formatDate(value: string | null) {
  if (!value) return '-';
  return new Date(value).toLocaleDateString('ko-KR');
}

function isExpired(expiresAt: string | null) {
  if (!expiresAt) return false;
  return new Date(expiresAt).getTime() <= Date.now();
}

export default function PopupManagement() {
  const { data: popups = [], isLoading } = usePopups();
  const { mutate: deletePopup, isPending: isDeleting } = useDeletePopup();
  const { mutate: toggleActive, isPending: isToggling } = useTogglePopupActive();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Popup | null>(null);
  const [previewing, setPreviewing] = useState<Popup | null>(null);

  const totalCount = popups.length;
  const activeCount = popups.filter((p) => p.is_active && !isExpired(p.expires_at)).length;

  const openCreate = () => {
    setEditing(null);
    setDialogOpen(true);
  };

  const openEdit = (popup: Popup) => {
    setEditing(popup);
    setDialogOpen(true);
  };

  const handleDelete = (popup: Popup) => {
    if (!confirm(`"${popup.title}" 팝업을 삭제하시겠습니까?`)) return;
    deletePopup(popup.id);
  };

  const openPreview = (popup: Popup) => {
    setPreviewing(popup);
  };

  const closePreview = () => {
    setPreviewing(null);
  };

  return (
    <VStack align="stretch" gap={6} fontFamily="Pretendard">
      <Box>
        <Text fontSize="xl" fontWeight="700" color="gray.800">
          팝업·배너 관리
        </Text>
        <Text mt={1} fontSize="sm" color="gray.500">
          홈페이지 방문자에게 우선적으로 보여줄{' '}
          <Text as="span" fontWeight="600">
            공지사항·이벤트·프로모션
          </Text>{' '}
          등의 팝업·배너창을 관리할 수 있는 공간입니다.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
        <Box bg="white" borderRadius="lg" borderWidth="1px" borderColor="gray.200" p={6} boxShadow="xs">
          <Flex align="center" gap={3} mb={4}>
            <Flex
              w={10}
              h={10}
              align="center"
              justify="center"
              borderRadius="md"
              bg="gray.100"
              color="gray.600"
            >
              <AppWindowIcon size={20} />
            </Flex>
            <Text fontSize="sm" fontWeight="600" color="gray.500">
              전체 팝업창
            </Text>
          </Flex>
          <Text fontSize="3xl" fontWeight="700" color="gray.800" lineHeight={1}>
            {totalCount}
            <Text as="span" ml={1} fontSize="md" fontWeight="600" color="gray.400">
              개
            </Text>
          </Text>
        </Box>

        <Box bg="white" borderRadius="lg" borderWidth="1px" borderColor="gray.200" p={6} boxShadow="xs">
          <Flex align="center" gap={3} mb={4}>
            <Flex
              w={10}
              h={10}
              align="center"
              justify="center"
              borderRadius="md"
              bg="orange.50"
              color="orange.600"
            >
              <CircleCheckIcon size={20} />
            </Flex>
            <Text fontSize="sm" fontWeight="600" color="gray.500">
              활성화된 팝업창
            </Text>
          </Flex>
          <Text fontSize="3xl" fontWeight="700" color="orange.600" lineHeight={1}>
            {activeCount}
            <Text as="span" ml={1} fontSize="md" fontWeight="600" color="orange.300">
              개
            </Text>
          </Text>
        </Box>

        <Box
          as="button"
          bg="orange.100/10"
          borderRadius="lg"
          borderWidth="1px"
          borderColor="orange.300"
          borderStyle="dashed"
          p={6}
          boxShadow="xs"
          cursor="pointer"
          textAlign="left"
          transition="border-color 0.3s ease, background 0.3s ease"
          _hover={{ borderColor: 'orange.400', bg: 'orange.100/50' }}
          onClick={openCreate}
        >
          <Flex align="center" justify="center" direction="column" gap={3}>
            <Flex
              align="center"
              justify="center"
              borderRadius="full"
              bg="orange.600"
              color="white"
              w={10}
              h={10}
            >
              <PlusIcon size={20} />
            </Flex>
            <Text fontSize="14px" fontWeight="600" color="orange.600">
              새 팝업창 추가하기
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>

      <VStack align="stretch" gap={3}>
        <Text fontSize="md" fontWeight="700" color="gray.700">
          팝업창 목록
        </Text>

        {isLoading ? (
          <Flex justify="center" h="50vh" display="flex" alignItems="center" justifyContent="center">
            <Spinner size="lg" color="orange.500" />
          </Flex>
        ) : popups.length === 0 ? (
          <Box p={8} textAlign="center" minH="300px" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.500" fontSize="md">
              등록된 팝업창이 없습니다.
            </Text>
          </Box>
        ) : (
          popups.map((popup) => {
            const expired = isExpired(popup.expires_at);

            return (
              <Box
                key={popup.id}
                bg="white"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                p={4}
                boxShadow="xs"
              >
                <Flex
                  gap={4}
                  align={{ base: 'stretch', md: 'center' }}
                  direction={{ base: 'column', md: 'row' }}
                  justify="space-between"
                >
                  <HStack align="flex-start" gap={3} flex="1" minW={0}>
                    {popup.image_url && (
                      <Image
                        src={popup.image_url}
                        alt={popup.title}
                        w="64px"
                        h="64px"
                        objectFit="cover"
                        borderRadius="md"
                        flexShrink={0}
                      />
                    )}
                    <VStack align="flex-start" gap={1} flex="1" minW={0}>
                      <HStack gap={2} flexWrap="wrap">
                        <Text fontWeight="700" color="gray.800" truncate>
                          {popup.title}
                        </Text>
                        <Badge colorPalette={popup.is_active && !expired ? 'orange' : 'gray'} size="sm">
                          {expired ? '만료' : popup.is_active ? '사용중' : '미사용'}
                        </Badge>
                      </HStack>
                      <Text fontSize="sm" color="gray.500" lineClamp={1}>
                        {popup.content || '-'}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        만료일: {formatDate(popup.expires_at)}
                      </Text>
                    </VStack>
                  </HStack>

                  <HStack gap={2} flexShrink={0}>
                    {/* 미리보기 버튼 */}
                    <Button size="sm" variant="subtle" colorPalette="gray" onClick={() => openPreview(popup)}>
                      <EyeIcon size={14} />
                      미리보기
                    </Button>
                    <Button
                      size="sm"
                      variant="subtle"
                      colorPalette={popup.is_active ? 'gray' : 'cyan'}
                      onClick={() =>
                        toggleActive({ id: popup.id, is_active: !popup.is_active })
                      }
                      loading={isToggling}
                    >
                      {popup.is_active ? '비활성화' : '활성화'}
                    </Button>
                    <Button size="sm" variant="subtle" onClick={() => openEdit(popup)}>
                      <PencilIcon size={14} />
                      수정
                    </Button>
                    <Button
                      size="sm"
                      variant="subtle"
                      colorPalette="red"
                      onClick={() => handleDelete(popup)}
                      loading={isDeleting}
                    >
                      <Trash2Icon size={14} />
                      삭제
                    </Button>
                  </HStack>
                </Flex>
              </Box>
            );
          })
        )}
      </VStack>

      <PopupEditDialog open={dialogOpen} onOpenChange={setDialogOpen} editing={editing} />

      {/* 메인 페이지와 동일한 팝업 미리보기 */}
      {previewing && (
        <Box
          position="fixed"
          inset={0}
          zIndex={1400}
          bg="blackAlpha.600"
          onClick={closePreview}
        >
          <Flex
            position="absolute"
            top={4}
            right={4}
            left={4}
            justify="flex-end"
            align="center"
            gap={3}
            pointerEvents="none"
          >
            <Button
              size="sm"
              variant="solid"
              bg="white"
              color="gray.800"
              pointerEvents="auto"
              onClick={(e) => {
                e.stopPropagation();
                closePreview();
              }}
            >
              <XIcon size={14} />
              닫기
            </Button>
          </Flex>

          <Flex
            position="absolute"
            top={{ base: '88px', md: '120px' }}
            left={{ base: 4, md: 8 }}
            right={{ base: 4, md: 'auto' }}
            gap={4}
            direction="row"
            flexWrap="wrap"
            align="flex-start"
            maxH={{ base: 'calc(100vh - 100px)', md: 'calc(100vh - 140px)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <PopupPreview
              title={previewing.title}
              open
              onOpenChange={(open) => {
                if (!open) closePreview();
              }}
              text={previewing.content ?? undefined}
              imageUrl={previewing.image_url ?? undefined}
              link={previewing.link_url ?? undefined}
            />
          </Flex>
        </Box>
      )}
    </VStack>
  );
}

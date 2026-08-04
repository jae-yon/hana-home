import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  Field,
  Image,
  Input,
  Portal,
  Select,
  SimpleGrid,
  Text,
  VStack,
  createListCollection,
} from '@chakra-ui/react';
import { ImagePlusIcon, XIcon } from 'lucide-react';

import type { Portfolio, PortfolioType } from '@/types/common';
import { useBucket } from '@/shared/hooks/useBucket';
import {
  useCreatePortfolio,
  useUpdatePortfolio,
} from '@/domains/admin/hooks/usePortfolio';

interface PortfolioEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** 수정 대상 시공사례 (없으면 신규 등록) */
  editing: Portfolio | null;
  /** 신규 등록 시 기본 유형 */
  defaultType?: PortfolioType;
}

type FormState = {
  type: PortfolioType;
  title: string;
  subtitle: string;
  module: string;
  inverter: string;
  capacity: string;
  image_url: string;
  link_url: string;
  is_visible: boolean;
  is_main_visible: boolean;
};

const TYPE_OPTIONS: { value: PortfolioType; label: string }[] = [
  { value: 'PPA', label: 'PPA(자가소비형)' },
  { value: 'RPS', label: 'RPS(발전사업)' },
  { value: 'RESIDENTIAL', label: '가정용(상계거래형)' },
];

const typeCollection = createListCollection({
  items: TYPE_OPTIONS.map((option) => ({
    value: option.value,
    label: option.label,
  })),
});

const emptyForm = (defaultType: PortfolioType = 'PPA'): FormState => ({
  type: defaultType,
  title: '',
  subtitle: '',
  module: '',
  inverter: '',
  capacity: '',
  image_url: '',
  link_url: '',
  is_visible: true,
  is_main_visible: false,
});

function toFormState(portfolio: Portfolio): FormState {
  return {
    type: portfolio.type,
    title: portfolio.title,
    subtitle: portfolio.subtitle ?? '',
    module: portfolio.module,
    inverter: portfolio.inverter,
    capacity: portfolio.capacity,
    image_url: portfolio.image_url,
    link_url: portfolio.link_url ?? '',
    is_visible: portfolio.is_visible,
    is_main_visible: portfolio.is_main_visible,
  };
}

export default function PortfolioEditDialog({
  open,
  onOpenChange,
  editing,
  defaultType = 'PPA',
}: PortfolioEditDialogProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadImage } = useBucket({ path: 'portfolios' });

  const { mutate: createPortfolio, isPending: isCreating } = useCreatePortfolio();
  const { mutate: updatePortfolio, isPending: isUpdating } = useUpdatePortfolio();

  const [form, setForm] = useState<FormState>(() => emptyForm(defaultType));
  const [isUploading, setIsUploading] = useState(false);

  const isSaving = isCreating || isUpdating || isUploading;

  useEffect(() => {
    if (!open) return;
    setForm(editing ? toFormState(editing) : emptyForm(defaultType));
  }, [open, editing, defaultType]);

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 첨부할 수 있습니다.');
      e.target.value = '';
      return;
    }

    setIsUploading(true);
    try {
      const url = await uploadImage(file);
      setForm((prev) => ({ ...prev, image_url: url }));
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : '이미지 업로드에 실패했습니다.');
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const handleSubmit = () => {
    if (!form.title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!form.module.trim()) {
      alert('모듈 정보를 입력해주세요.');
      return;
    }

    if (!form.inverter.trim()) {
      alert('인버터 정보를 입력해주세요.');
      return;
    }

    if (!form.capacity.trim()) {
      alert('설비용량을 입력해주세요.');
      return;
    }

    if (!form.image_url.trim()) {
      alert('이미지를 첨부해주세요.');
      return;
    }

    const payload = {
      type: form.type,
      title: form.title.trim(),
      subtitle: form.subtitle.trim() || null,
      module: form.module.trim(),
      inverter: form.inverter.trim(),
      capacity: form.capacity.trim(),
      image_url: form.image_url.trim(),
      link_url: form.link_url.trim() || null,
      is_visible: form.is_visible,
      is_main_visible: form.is_main_visible,
    };

    if (editing) {
      updatePortfolio(
        { id: editing.id, ...payload },
        { onSuccess: () => onOpenChange(false) },
      );
      return;
    }

    createPortfolio(payload, { onSuccess: () => onOpenChange(false) });
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => onOpenChange(e.open)}
      size="lg"
      placement="center"
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content borderRadius="lg" fontFamily="Pretendard">
          <Dialog.Header borderBottomWidth="1px" borderColor="gray.200" px={6} py={4}>
            <Dialog.Title fontSize="lg" fontWeight="700" color="gray.800">
              {editing ? '시공사례 수정' : '시공사례 등록'}
            </Dialog.Title>
          </Dialog.Header>

          <Dialog.Body px={6} py={5}>
            <VStack align="stretch" gap={4}>
              <Field.Root required>
                <Field.Label pl={1}>유형</Field.Label>
                <Select.Root
                  collection={typeCollection}
                  value={[form.type]}
                  onValueChange={(e) => {
                    const value = e.value[0] as PortfolioType | undefined;
                    if (!value) return;
                    setForm((prev) => ({ ...prev, type: value }));
                  }}
                >
                  <Select.HiddenSelect />
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="유형 선택" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content fontFamily="Pretendard">
                        {typeCollection.items.map((item) => (
                          <Select.Item item={item} key={item.value}>
                            {item.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              </Field.Root>

              <Field.Root required>
                <Field.Label pl={1}>제목</Field.Label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="예: 전남 고흥군 세차장"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label pl={1}>타입</Field.Label>
                <Input
                  value={form.subtitle}
                  onChange={(e) => setForm((prev) => ({ ...prev, subtitle: e.target.value }))}
                  placeholder="예: 건물 위, 지상형+건물 위"
                />
              </Field.Root>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <Field.Root required>
                  <Field.Label pl={1}>모듈</Field.Label>
                  <Input
                    value={form.module}
                    onChange={(e) => setForm((prev) => ({ ...prev, module: e.target.value }))}
                    placeholder="예: 현대 630w 48장"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label pl={1}>인버터</Field.Label>
                  <Input
                    value={form.inverter}
                    onChange={(e) => setForm((prev) => ({ ...prev, inverter: e.target.value }))}
                    placeholder="예: 금비전자 34kw"
                  />
                </Field.Root>
              </SimpleGrid>

              <Field.Root required>
                <Field.Label pl={1}>설비용량</Field.Label>
                <Input
                  value={form.capacity}
                  onChange={(e) => setForm((prev) => ({ ...prev, capacity: e.target.value }))}
                  placeholder="예: 30.24kw"
                />
              </Field.Root>

              <Field.Root required>
                <Field.Label pl={1}>이미지</Field.Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageSelect}
                />

                {form.image_url ? (
                  <Box position="relative" w="full">
                    <Image
                      src={form.image_url}
                      alt="시공사례 이미지 미리보기"
                      w="full"
                      objectFit="cover"
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="gray.200"
                    />
                    <Button
                      size="xs"
                      position="absolute"
                      top={2}
                      right={2}
                      bg="blackAlpha.700"
                      color="white"
                      onClick={() => setForm((prev) => ({ ...prev, image_url: '' }))}
                    >
                      <XIcon size={14} />
                      제거
                    </Button>
                  </Box>
                ) : (
                  <Button
                    w="full"
                    variant="outline"
                    borderStyle="dashed"
                    onClick={() => fileInputRef.current?.click()}
                    loading={isUploading}
                    alignSelf="flex-start"
                  >
                    <ImagePlusIcon size={16} />
                    이미지 첨부
                  </Button>
                )}

                {form.image_url && (
                  <Button
                    mt={2}
                    w="full"
                    size="sm"
                    variant="solid"
                    bg="orange.600"
                    color="white"
                    onClick={() => fileInputRef.current?.click()}
                    loading={isUploading}
                    alignSelf="flex-start"
                  >
                    다른 이미지로 변경
                  </Button>
                )}

                <Text
                  color="red.500"
                  fontSize="11px"
                  fontWeight="500"
                  fontFamily="NanumSquareNeo"
                  paddingLeft="5px"
                >
                  ※ 5MB 이상의 이미지는 업로드할 수 없습니다. jpg 또는 jpeg 확장자의 이미지를 권장합니다.
                </Text>
              </Field.Root>

              <Field.Root>
                <Field.Label pl={1}>블로그 링크</Field.Label>
                <Input
                  value={form.link_url}
                  onChange={(e) => setForm((prev) => ({ ...prev, link_url: e.target.value }))}
                  placeholder="https://blog.naver.com/PostList.naver?blogId=hanasolution__"
                />
              </Field.Root>

              <VStack align="stretch" gap={2}>
                <Checkbox.Root
                  checked={form.is_visible}
                  onCheckedChange={(e) =>
                    setForm((prev) => ({ ...prev, is_visible: !!e.checked }))
                  }
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label fontSize="sm" color="gray.600" fontWeight="500" display="flex" alignItems="center" gap={1}>
                    시공사례 페이지에 공개{' '} 
                    <Text as="span" fontFamily="NanumSquareNeo" fontSize="11px" color="gray.400">※ 선택 시 시공사례 페이지에 노출됩니다.</Text>
                  </Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root
                  checked={form.is_main_visible}
                  onCheckedChange={(e) =>
                    setForm((prev) => ({ ...prev, is_main_visible: !!e.checked }))
                  }
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label fontSize="sm" color="gray.600" fontWeight="500" display="flex" alignItems="center" gap={1}>
                    시공사례 대표 이미지로 선택{' '} 
                    <Text as="span" fontFamily="NanumSquareNeo" fontSize="11px" color="gray.400">※ 선택 시 메인페이지 시공사례 사진으로 노출됩니다.</Text>
                  </Checkbox.Label>
                </Checkbox.Root>
              </VStack>
            </VStack>
          </Dialog.Body>

          <Dialog.Footer borderTopWidth="1px" borderColor="gray.200" px={6} py={4} gap={2}>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              취소
            </Button>
            <Button bg="orange.600" color="white" onClick={handleSubmit} loading={isSaving}>
              {editing ? '수정' : '등록'}
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}

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
  Textarea,
  VStack,
  createListCollection,
  Text,
} from '@chakra-ui/react';
import { ImagePlusIcon, XIcon } from 'lucide-react';

import type { Popup, PopupExpirePreset } from '@/types/common';
import { useBucket } from '@/shared/hooks/useBucket';
import {
  getExpiresAtFromDate,
  getExpiresAtFromDays,
  useCreatePopup,
  useUpdatePopup,
} from '@/domains/admin/hooks/usePopup';

interface PopupEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** 수정 대상 팝업 (없으면 신규 등록) */
  editing: Popup | null;
}

type FormState = {
  title: string;
  content: string;
  link_url: string;
  image_url: string;
  is_active: boolean;
  expirePreset: PopupExpirePreset;
  customExpireDate: string;
};

const EXPIRE_PRESETS: { value: PopupExpirePreset; label: string }[] = [
  { value: 30, label: '30일' },
  { value: 60, label: '60일' },
  { value: 90, label: '90일' },
  { value: 180, label: '180일' },
  { value: 365, label: '365일' },
  { value: 'custom', label: '직접 선택' },
];

const expirePeriodCollection = createListCollection({
  items: EXPIRE_PRESETS.map((preset) => ({
    value: String(preset.value),
    label: preset.label,
  })),
});

const emptyForm: FormState = {
  title: '',
  content: '',
  link_url: '',
  image_url: '',
  is_active: true,
  expirePreset: 30,
  customExpireDate: '',
};

function toDateInputValue(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function toFormState(popup: Popup): FormState {
  const hasExpire = Boolean(popup.expires_at);

  return {
    title: popup.title,
    content: popup.content ?? '',
    link_url: popup.link_url ?? '',
    image_url: popup.image_url ?? '',
    is_active: popup.is_active,
    expirePreset: hasExpire ? 'custom' : 30,
    customExpireDate: hasExpire && popup.expires_at ? toDateInputValue(popup.expires_at) : '',
  };
}

function resolveExpiresAt(form: FormState): string | null {
  if (form.expirePreset === 'custom') {
    return getExpiresAtFromDate(form.customExpireDate || null);
  }

  return getExpiresAtFromDays(form.expirePreset);
}

export default function PopupEditDialog({ open, onOpenChange, editing }: PopupEditDialogProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadImage } = useBucket({ path: 'popups' });

  const { mutate: createPopup, isPending: isCreating } = useCreatePopup();
  const { mutate: updatePopup, isPending: isUpdating } = useUpdatePopup();

  const [form, setForm] = useState<FormState>(emptyForm);
  const [isUploading, setIsUploading] = useState(false);

  const isSaving = isCreating || isUpdating || isUploading;

  // 다이얼로그가 열릴 때마다 대상 팝업 기준으로 폼 초기화
  useEffect(() => {
    if (!open) return;
    setForm(editing ? toFormState(editing) : emptyForm);
  }, [open, editing]);

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

    if (!form.content.trim() && !form.image_url.trim()) {
      alert('본문 또는 이미지 중 하나 이상 입력해주세요.');
      return;
    }

    if (form.expirePreset === 'custom' && !form.customExpireDate) {
      alert('만료일을 선택해주세요.');
      return;
    }

    if (
      form.expirePreset === 'custom' &&
      new Date(`${form.customExpireDate}T23:59:59`).getTime() <= Date.now()
    ) {
      alert('만료일은 오늘 이후로 선택해주세요.');
      return;
    }

    const expiresAt = resolveExpiresAt(form);
    if (!expiresAt) {
      alert('노출 기간을 선택해주세요.');
      return;
    }

    const payload = {
      title: form.title.trim(),
      content: form.content.trim() || null,
      link_url: form.link_url.trim() || null,
      image_url: form.image_url.trim() || null,
      is_active: form.is_active,
      expires_at: expiresAt,
    };

    if (editing) {
      updatePopup(
        { id: editing.id, ...payload },
        { onSuccess: () => onOpenChange(false) },
      );
      return;
    }

    createPopup(payload, { onSuccess: () => onOpenChange(false) });
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
              {editing ? '팝업 수정' : '팝업 등록'}
            </Dialog.Title>
          </Dialog.Header>

          <Dialog.Body px={6} py={5}>
            <VStack align="stretch" gap={4}>
              <Field.Root required>
                <Field.Label pl={1}>제목</Field.Label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="팝업 제목"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label pl={1}>본문</Field.Label>
                <Textarea
                  rows={4}
                  value={form.content}
                  onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
                  placeholder="팝업 본문 (이미지와 둘 중 하나 이상 필수)"
                />
              </Field.Root>

              <Field.Root>
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
                      alt="팝업 이미지 미리보기"
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

                <Text style={{ color: 'gray.500', fontSize: '10px', fontWeight: '500', fontFamily: 'NanumSquareNeo', paddingLeft: '5px' }}>※ 4:5 비율 또는 3:4 비율의 이미지를 권장합니다.</Text>
              </Field.Root>

              <Field.Root>
                <Field.Label pl={1}>링크 URL</Field.Label>
                <Input
                  value={form.link_url}
                  onChange={(e) => setForm((prev) => ({ ...prev, link_url: e.target.value }))}
                  placeholder="버튼 클릭 시 이동할 URL (선택)"
                />
              </Field.Root>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <Field.Root required>
                  <Field.Label pl={1}>노출 기간</Field.Label>
                  <Select.Root
                    collection={expirePeriodCollection}
                    value={[String(form.expirePreset)]}
                    onValueChange={(e) => {
                      const value = e.value[0];
                      if (!value) return;
                      setForm((prev) => ({
                        ...prev,
                        expirePreset:
                          value === 'custom'
                            ? 'custom'
                            : (Number(value) as PopupExpirePreset),
                      }));
                    }}
                  >
                    <Select.HiddenSelect />
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="노출 기간 선택" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content fontFamily="Pretendard">
                          {expirePeriodCollection.items.map((item) => (
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

                {form.expirePreset === 'custom' && (
                  <Field.Root required>
                    <Field.Label pl={1}>만료일</Field.Label>
                    <Input
                      type="date"
                      value={form.customExpireDate}
                      min={toDateInputValue(new Date().toISOString())}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          customExpireDate: e.target.value,
                        }))
                      }
                    />
                  </Field.Root>
                )}
              </SimpleGrid>

              <Checkbox.Root
                checked={form.is_active}
                onCheckedChange={(e) =>
                  setForm((prev) => ({ ...prev, is_active: !!e.checked }))
                }
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label fontSize="sm" color="gray.600">
                  등록 즉시 활성화
                </Checkbox.Label>
              </Checkbox.Root>
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

import { useState } from 'react';

import { Box, Button, Checkbox, Flex, Grid, Heading, Input, Text, Textarea, Field, Select, Portal, createListCollection  } from '@chakra-ui/react';

import type { Inquiry } from '@/types/common';

import SimplePrivacyModal from './SimplePrivacyModal';

const initialValues: Inquiry = {
  name: '',
  phone: '',
  email: '',
  address: '',
  content: '',
  visitRoute: '',
  emailDomain: '',
  agreement: false,
};

const visitRoute = createListCollection({
  items: [
    { value: 'ad', label: '광고' },
    { value: 'sns', label: 'SNS' },
    { value: 'blog', label: '블로그' },
    { value: 'search', label: '검색엔진' },
    { value: 'introduction', label: '지인 소개' },
    { value: 'etc', label: '기타' },
  ]
});

const emailDomain = createListCollection({
  items: [
    { value: 'naver.com', label: 'naver.com' },
    { value: 'gmail.com', label: 'gmail.com' },
    { value: 'daum.net', label: 'daum.net' },
    { value: 'hanmail.com', label: 'hanmail.com' },
    { value: 'nate.com', label: 'nate.com' },
    { value: 'self', label: '직접 입력' },
  ]
});

export default function InquiryForm() {
  const [values, setValues] = useState<Inquiry>(initialValues);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const update = <K extends keyof Inquiry>(key: K, value: Inquiry[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Flex
      mb={24}
      mt={12}
      gap={12}
      p={{ base: 0, md: 12 }}
      width="100%"
      height="auto"
      maxW="1280px"
      margin="0 auto"
      borderRadius="lg"
      overflow="hidden"
      direction="column"
      position="relative"
      alignItems="center"
    >
      <Box
        gap={4}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading size="5xl" color="gray.800">
          견적문의
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
          아래 양식을 작성해 주시면 담당자가 검토 후 신속하게 연락드리겠습니다.
        </Text>
      </Box>

      <Box
        p={6}
        gap={6}
        as="form"
        width="100%"
        maxW={{ base: '100%', md: '960px' }}
        display="flex"
        boxShadow={{ base: 'none', md: 'sm' }}
        borderRadius={{ base: 'none', md: 'md' }}
        borderWidth="1px"
        alignItems="center"
        borderColor="gray.200"
        flexDirection="column"
        justifyContent="center"
        fontFamily="Pretendard"
        backgroundColor="gray.50"
      >
        <Grid
          width="100%"
          alignItems="flex-end"
          gap={4}
          templateColumns={{ base: '1fr', md: '1.4fr 1fr 1.5fr' }}
        >
          <Field.Root>
            <Field.Label fontSize="sm" fontWeight="500" ms={1}>
              이름 또는 상호명 <Field.RequiredIndicator />
            </Field.Label>
            <Input
              value={values.name}
              placeholder=""
              onChange={(e) => update('name', e.target.value)}
              backgroundColor="white"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label fontSize="sm" fontWeight="500" ms={1}>
              연락처 <Field.RequiredIndicator />
            </Field.Label>
            <Input
              type="tel"
              value={values.phone}
              placeholder=""
              onChange={(e) => update('phone', e.target.value)}
              backgroundColor="white"
            />
          </Field.Root>

          <Select.Root collection={visitRoute}>
            <Select.HiddenSelect />
            <Select.Label fontSize="sm" fontWeight="500" ms={1}>
              유입경로
            </Select.Label>

            <Select.Control>
              <Select.Trigger backgroundColor="white">
                <Select.ValueText placeholder="유입경로를 선택해 주세요." />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>

            <Portal>
              <Select.Positioner>
                <Select.Content fontSize="sm" fontFamily="Pretendard">
                  {visitRoute.items.map((item) => (
                    <Select.Item item={item} key={item.value}>
                      {item.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>  
            </Portal>
          </Select.Root>
        </Grid>

        <Grid 
          width="100%"
          alignItems="flex-end"
          gap={4}
          templateColumns={{ base: '1fr', md: '1fr 0.05fr 1fr 1fr' }}
        >
          <Field.Root>
            <Field.Label fontSize="sm" fontWeight="500" ms={1}>
              이메일 <Field.RequiredIndicator />
            </Field.Label>
            <Input
              value={values.email}
              placeholder=""
              onChange={(e) => update('name', e.target.value)}
              backgroundColor="white"
            />
          </Field.Root>
          
          <Box display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent="center">
            <Text fontSize="md" fontFamily="Pretendard" color="gray.600" mb={2}>
              @
            </Text>
          </Box>

          <Field.Root>
            <Input
              value={values.phone}
              placeholder=""
              onChange={(e) => update('phone', e.target.value)}
              backgroundColor="white"
            />
          </Field.Root>

          <Select.Root collection={emailDomain}>
            <Select.HiddenSelect />

            <Select.Control>
              <Select.Trigger backgroundColor="white">
                <Select.ValueText placeholder="" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>

            <Portal>
              <Select.Positioner>
                <Select.Content fontSize="sm" fontFamily="Pretendard">
                  {emailDomain.items.map((item) => (
                    <Select.Item item={item} key={item.value}>
                      {item.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>  
            </Portal>
          </Select.Root>
        </Grid>
        

        <Field.Root width="100%">
          <Field.Label>주소</Field.Label>
          <Input
            value={values.address}
            onChange={(e) => update('address', e.target.value)}
            backgroundColor="white"
          />
        </Field.Root>

        <Field.Root width="100%">
          <Field.Label>문의 내용</Field.Label>
          <Textarea
            p={4}
            rows={16}
            resize="none"
            value={values.content}
            onChange={(e) => update('content', e.target.value)}
            placeholder="설치 용량, 희망 시공일 등 문의하실 내용을 자유롭게 적어 주세요."
            backgroundColor="white"
          />
        </Field.Root>

        <Field.Root width="100%">
          <Flex alignItems="center" gap={2} flexWrap="wrap" justifyContent="center">
            <Checkbox.Root
              colorPalette="blue"
              checked={values.agreement}
              onCheckedChange={(e) => update('agreement', !!e.checked)}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control backgroundColor="white" />
              <Checkbox.Label fontSize="sm" fontWeight="500">
                개인정보 수집 및 이용에 동의합니다. <Field.RequiredIndicator />
              </Checkbox.Label>
            </Checkbox.Root>
            <Button
              px={0}
              py={0}
              size="sm"
              type="button"
              fontWeight="500"
              color="gray.600"
              backgroundColor="transparent"
              _hover={{ textDecoration: 'none' }}
              onClick={(e) => {
                e.preventDefault();
                setPrivacyModalOpen(true);
              }}
            >
              자세히보기
            </Button>
          </Flex>
        </Field.Root>

        <SimplePrivacyModal
          open={privacyModalOpen}
          onOpenChange={setPrivacyModalOpen}
        />

        <Button
          px={12}
          py={6}
          size="xl"
          fontSize="lg"
          type="button"
          fontWeight="600"
          borderRadius="md"
          alignSelf="center"
          letterSpacing="0.1em"
          colorPalette="orange"
          _hover={{ opacity: 0.9 }}
        >
          문의하기
        </Button>
      </Box>
    </Flex>
  );
}

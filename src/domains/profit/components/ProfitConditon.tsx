import { Box, Button, Field, Input, ListCollection, Portal, Select } from '@chakra-ui/react';

import Map from '@/shared/components/map';

interface ProfitConditonProps {
  values: any;
  areaType: ListCollection<{ value: string; label: string }>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAreaTypeChange?: (item: { value: string; label: string }) => void;
  onCalculateProfit?: (address: string) => void;
  isPending?: boolean;
}

export function ProfitConditon(props: ProfitConditonProps) {
  const { values, areaType, onChange, onAreaTypeChange, onCalculateProfit, isPending } = props;

  /** 숫자만 추출 후 천 단위 콤마 포맷 */
  const formatCapacityDisplay = (v: string | number): string => {
    if (v === '' || v === undefined || v === null) return '';
    const digits = String(v).replace(/\D/g, '');
    if (digits === '') return '';
    return Number(digits).toLocaleString('ko-KR');
  };

  const handleCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    onChange({ ...e, target: { ...e.target, name: 'capacity', value: raw } });
  };

  return (
    <Box
      p={4}
      boxShadow="md"
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.200"
      fontFamily="Pretendard"
    >
      <Box>
        <Field.Root>
          <Field.Label 
            ms={1}
            fontSize="md" 
            fontWeight="500" 
            color="gray.700"
          >
            설치주소 <Field.RequiredIndicator />
          </Field.Label>
          <Input
            value={values.address}
            onChange={(e) => onChange(e)}
            name="address"
            fontSize="md"
            fontWeight="normal"
            borderRadius="lg"
            backgroundColor="white"
            borderColor="gray.300"
            placeholder="예) 서울특별시 금천구 가산디지털1로 1, 더루벤스밸리 1407호"
            _hover={{ borderColor: 'orange.500', outlineColor: 'none' }}
            _focus={{ borderColor: 'orange.500', outlineColor: 'orange.400' }}
          />
        </Field.Root>

        <Box
          mt={4}
          gap={4}
          display="flex"
          direction="column"
        >
          <Select.Root
            collection={areaType}
            value={values.areaType ? [values.areaType.value] : []}
            onValueChange={(e) => {
              const v = Array.isArray(e.value) ? e.value[0] : e.value;
              const item = areaType.items.find((i) => i.value === v);
              if (item && onAreaTypeChange) onAreaTypeChange(item);
            }}
          >
            <Select.HiddenSelect />
            <Select.Label 
              ms={1}
              fontSize="md" 
              fontWeight="500" 
              color="gray.700"
            >
              사업지유형
            </Select.Label>

            <Select.Control>
              <Select.Trigger 
                fontSize="md"
                borderRadius="lg"
                fontWeight="normal"
                borderColor="gray.300"
                backgroundColor="white"
                _hover={{ borderColor: 'orange.500', outlineColor: 'none' }}
                _focus={{ borderColor: 'orange.500', outlineColor: 'orange.400' }}
              >
                <Select.ValueText placeholder="사업지유형을 선택해 주세요." />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>

            <Portal>
              <Select.Positioner>
                <Select.Content 
                  fontSize="md"
                  fontWeight="normal"
                  fontFamily="Pretendard"
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor="gray.300"
                  backgroundColor="white"
                >
                  {areaType.items.map((item) => (
                    <Select.Item item={item} key={item.value}>
                      {item.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>  
            </Portal>
          </Select.Root>

          <Field.Root>
            <Field.Label 
              ms={1}
              fontSize="md" 
              fontWeight="500" 
              color="gray.700"
            >
              설치용량 <Field.RequiredIndicator />
            </Field.Label>
            <Input
              fontSize="md"
              name="capacity"
              placeholder="0"
              textAlign="right"
              borderRadius="lg"
              inputMode="numeric"
              fontWeight="normal"
              borderColor="gray.300"
              backgroundColor="white"
              value={formatCapacityDisplay(values.capacity)}
              onChange={handleCapacityChange}
              _hover={{ borderColor: 'orange.500', outlineColor: 'none' }}
              _focus={{ borderColor: 'orange.500', outlineColor: 'orange.400' }}
            />
          </Field.Root>
        </Box>

        <Button
          mt={8}
          size="lg"
          width="100%"
          fontSize="lg"
          color="white"
          fontWeight="600"
          borderRadius="lg"
          loading={isPending}
          backgroundColor="orange.500"
          _hover={{ backgroundColor: 'orange.600' }}
          onClick={() => onCalculateProfit?.(values.address)}
        >
          적용
        </Button>
      </Box>
      
      {values.roadAddress && values.jibunAddress && (
        <Box 
          mt={8}
          width="100%" 
          borderRadius="lg"
          borderWidth="1px"
          overflow="hidden"
          borderColor="gray.200"
        >
          <Map location={{ lat: values.latitude, lng: values.longitude }} />
        </Box>
      )}
    </Box>
  );
}
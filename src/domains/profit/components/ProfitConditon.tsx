import { Box, Button, createListCollection, Field, Input, Portal, Select } from '@chakra-ui/react';

const addressType = createListCollection({
  items: [
    { value: 'land', label: '토지' },
    { value: 'building', label: '건물' },
  ]
});

export function ProfitConditon() {
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
            fontSize="md" 
            fontWeight="500" 
            ms={1}
            color="gray.700"
          >
            설치주소 <Field.RequiredIndicator />
          </Field.Label>
          <Input
            value={''}
            placeholder=""
            onChange={(e) => {}}
            fontSize="md"
            fontWeight="500"
            borderRadius="lg"
            backgroundColor="white"
            borderColor="gray.300"
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
          <Select.Root collection={addressType}>
            <Select.HiddenSelect />
            <Select.Label 
              fontSize="md" 
              fontWeight="500" 
              ms={1}
              color="gray.700"
            >
              사업지유형
            </Select.Label>

            <Select.Control>
              <Select.Trigger 
                borderRadius="lg"
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
                  fontFamily="Pretendard"
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor="gray.300"
                  backgroundColor="white"
                >
                  {addressType.items.map((item) => (
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
              value={''}
              placeholder=""
              onChange={(e) => {}}
              borderRadius="lg"
              backgroundColor="white"
              borderColor="gray.300"
              _hover={{ borderColor: 'orange.500', outlineColor: 'none' }}
              _focus={{ borderColor: 'orange.500', outlineColor: 'orange.400' }}
            />
          </Field.Root>
        </Box>

        <Button
          width="100%"
          size="lg"
          fontSize="lg"
          fontWeight="600"
          borderRadius="lg"
          mt={8}
          colorPalette="orange"
          _hover={{ opacity: 0.9 }}
        >
          적용
        </Button>
      </Box>
    </Box>
  );
}
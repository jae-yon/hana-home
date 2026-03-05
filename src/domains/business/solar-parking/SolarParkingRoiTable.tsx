import {
  Box,
  Text,
  Heading,
  Table,
  Badge,
} from '@chakra-ui/react';

const rows = [
  {
    item: '자가소비 절감',
    content: '연간 발전량 × 전력 단가',
    amount: '약 1,600만 원',
    note: '절감',
    noteColor: 'green' as const,
  },
  {
    item: 'REC 판매 수익',
    content: '재생에너지 공급인증서 판매',
    amount: '약 800만 원',
    note: '수익',
    noteColor: 'orange' as const,
  },
  {
    item: 'EV 충전 수익',
    content: '충전 서비스 운영 수익',
    amount: '약 600만 원',
    note: '수익',
    noteColor: 'orange' as const,
  },
  {
    item: '정부 보조금',
    content: '초기 설치 보조 (1회)',
    amount: '설치비 30~50%',
    note: '지원',
    noteColor: 'green' as const,
  },
  {
    item: '투자 회수',
    content: '총 수익 / 총 투자비',
    amount: '약 5~7년',
    note: 'ROI ✓',
    noteColor: 'green' as const,
    bold: true,
  },
];

export default function SolarParkingRoiTable() {
  return (
    <Box
      as="section"
      bg="gray.800"
      py={20}
      px={{ base: 4, md: '6vw' }}
    >
      <Box maxW="1280px" mx="auto">
        <Text
          fontSize="xs"
          letterSpacing="0.24em"
          textTransform="uppercase"
          color="orange.500"
          mb={2}
        >
          ROI Analysis
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl', lg: '3rem' }}
          lineHeight={1.2}
          color="white"
          mb={2}
        >
          수익성 분석 (100kW 기준)
        </Heading>
        <Text color="gray.400" fontSize="md" maxW="560px" mb={2} fontFamily="pretendard">
          설치 규모와 위치에 따라 실제 수치는 달라질 수 있으며, 정부 보조금
          적용 시 회수 기간이 단축될 수 있습니다.
        </Text>
        <Box overflowX="auto" mt={8} borderRadius="xl" overflow="hidden" borderWidth="1px" borderColor="whiteAlpha.200">
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row
                fontFamily="pretendard"
                bg="whiteAlpha.900"
              >
                <Table.ColumnHeader
                  color="gray.800"
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="0.05em"
                  py={3.5}
                  px={5}
                  textAlign="center"
                >
                  항목
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  color="gray.800"
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="0.05em"
                  py={3.5}
                  px={5}
                  textAlign="center"
                >
                  내용
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  color="gray.800"
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="0.05em"
                  py={3.5}
                  px={5}
                  textAlign="center"
                >
                  금액 (연간)
                </Table.ColumnHeader>
                <Table.ColumnHeader
                  color="gray.800"
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="0.05em"
                  py={3.5}
                  px={5}
                  textAlign="center"
                >
                  비고
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rows.map((row) => (
                <Table.Row
                  key={row.item}
                  fontFamily="pretendard"
                  borderBottomWidth="1px"
                  borderColor="whiteAlpha.200"
                  _hover={{ bg: 'orange.100' }}
                >
                  <Table.Cell
                    py={3.5}
                    px={5}
                    color="gray.900"
                    textAlign="center"
                    fontWeight={row.bold ? 700 : 500}
                    _hover={{ color: 'orange.500' }}
                  >
                    {row.item}
                  </Table.Cell>
                  <Table.Cell 
                    py={3.5}
                    px={5}
                    color="gray.800"
                    textAlign="center"
                    _hover={{ color: 'orange.500' }}
                  >
                    {row.content}
                  </Table.Cell>
                  <Table.Cell
                    py={3.5}
                    px={5}
                    color="gray.800"
                    textAlign="center"
                    fontWeight={row.bold ? 700 : 400}
                    _hover={{ color: 'orange.500' }}
                  >
                    {row.amount}
                  </Table.Cell>
                  <Table.Cell
                    py={3.5}
                    px={5}
                    textAlign="center"
                  >
                    <Badge
                      fontSize="xs"
                      fontWeight={600}
                      px={4}
                      py={1}
                      borderRadius="full"
                      color={row.noteColor === 'green' ? 'green.500' : 'orange.500'}
                      bg={row.noteColor === 'green' ? 'green.50' : 'orange.50'}
                    >
                      {row.note}
                    </Badge>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </Box>
  );
}

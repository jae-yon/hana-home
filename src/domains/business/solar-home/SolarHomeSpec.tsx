import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const spec_img = "https://images.unsplash.com/photo-1689561800626-cc4f71cd8c7b?q=90&w=1280&auto=format&fit=crop"

const specItems = [
  { key: '제품', val: '156셀 (6×13×2), 양면 단결정 PERC 기술 적용' },
  { key: '무게', val: '24.9 kg' },
  { key: '크기', val: '1,038mm (W) × 2,228mm (L) × 35mm (H)' },
  { key: '케이블', val: 'H1Z2Z2-K 4mm² (12 AWG), 1.4m, 내후성 IP68 커넥터, IEC & UL 인증, MC4 호환' },
  { key: '정션박스', val: '하우징 3PCS, IP68, 내후성, IEC & UL 인증' },
  { key: '다이오드', val: '3 bypass diodes' },
  { key: '프레임', val: '6063-T5 산화피막 알루미늄 합금' },
  {
    key: '설계',
    val: '전면 — 반사방지막 코팅 / 저철분 강화유리 / EVA 봉지재\n후면 — EVA 봉지재 / 블랙 내후성 필름',
  },
];

export default function SolarHomeSpec() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <Box
      as="section"
      id="spec"
      bg="gray.50"
      position="relative"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: '6vw' }}
    >
      <Box
        ref={ref}
        maxW="1200px"
        margin="0 auto"
        opacity={isView ? 1 : 0}
        transform={isView ? 'translateY(0)' : 'translateY(30px)'}
        transition="opacity 0.7s ease, transform 0.7s ease"
      >
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={{ base: 8, lg: 20 }}
          alignItems="flex-start"
        >
          <GridItem>
            <Box
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={spec_img} alt="가정용 모듈" width="100%" height="100%" objectFit="cover" />
            </Box>
          </GridItem>

          <GridItem>
            <Text
              fontFamily="pretendard"
              fontSize="xs"
              fontWeight={600}
              letterSpacing="0.35em"
              textTransform="uppercase"
              color="orange.500"
              mb={3}
            >
              제품 사양
            </Text>
            <Heading
              as="h2"
              fontFamily="pretendard"
              fontSize={{ base: '2xl', md: '3xl', lg: '3.2rem' }}
              lineHeight={1.15}
              color="gray.800"
              mb={8}
            >
              고품질
              <br />
              가정용 모듈
            </Heading>
            <Box as="ul" listStyleType="none" margin={0} padding={0}>
              {specItems.map((item) => (
                <Box
                  as="li"
                  key={item.key}
                  display="grid"
                  gridTemplateColumns="120px 1fr"
                  gap={4}
                  py={4}
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  alignItems="flex-start"
                  _first={{ borderTop: '1px solid', borderColor: 'gray.200' }}
                >
                  <Text
                    fontFamily="pretendard"
                    fontSize="xs"
                    fontWeight={500}
                    letterSpacing="0.05em"
                    color="gray.500"
                    textTransform="uppercase"
                    pt={0.5}
                  >
                    {item.key}
                  </Text>
                  <Text
                    fontFamily="pretendard"
                    fontSize="sm"
                    color="gray.800"
                    lineHeight={1.6}
                    whiteSpace="pre-line"
                  >
                    {item.val}
                  </Text>
                </Box>
              ))}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

// function SolarPanelSvg() {
//   return (
//     <svg
//       viewBox="0 0 400 300"
//       xmlns="http://www.w3.org/2000/svg"
//       width="85%"
//       height="85%"
//       style={{ display: 'block' }}
//     >
//       <defs>
//         <linearGradient id="panelGradSol" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#374151" />
//           <stop offset="100%" stopColor="#111827" />
//         </linearGradient>
//         <linearGradient id="orangeGradSol" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#f97316" />
//           <stop offset="100%" stopColor="#fb923c" />
//         </linearGradient>
//         <linearGradient id="cellGradSol" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#4b5563" />
//           <stop offset="100%" stopColor="#1f2937" />
//         </linearGradient>
//       </defs>
//       <rect
//         x="40"
//         y="40"
//         width="320"
//         height="220"
//         rx="3"
//         fill="url(#panelGradSol)"
//         stroke="#f97316"
//         strokeWidth="2"
//       />
//       <g fill="url(#cellGradSol)" stroke="#fb923c" strokeWidth="0.5" opacity={0.9}>
//         {[50, 100, 150, 200].map((y, row) =>
//           [50, 112, 174, 236, 298].map((x, col) => (
//             <rect
//               key={`${row}-${col}`}
//               x={x}
//               y={y}
//               width={col === 4 ? 54 : 58}
//               height={row === 3 ? 52 : 46}
//             />
//           ))
//         )}
//       </g>
//       <rect
//         x="40"
//         y="40"
//         width="320"
//         height="80"
//         rx="3"
//         fill="url(#orangeGradSol)"
//         opacity={0.08}
//       />
//       <rect x="185" y="255" width="30" height="8" rx="2" fill="#f97316" />
//       <line x1="200" y1="263" x2="200" y2="280" stroke="#f97316" strokeWidth="2" />
//     </svg>
//   );
// }

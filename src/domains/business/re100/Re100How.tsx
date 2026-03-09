import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Flex, Heading, Text } from '@chakra-ui/react';

import { LucideHandshake, LucideSun, LucideFileCheck, LucideLeaf, LucideSolarPanel } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const bg_image = "https://images.unsplash.com/photo-1586366461834-d2d65d725a2e?q=80&w=1074&auto=format&fit=crop"

const methods: {
  id: number;
  name: string;
  Icon: LucideIcon;
  color: string;
  glow: string;
  angle: number;
}[] = [
  {
    id: 1,
    name: "녹색프리미엄",
    Icon: LucideLeaf,
    color: "#22c55e",
    glow: "#16a34a",
    angle: 270,
  },
  {
    id: 2,
    name: "REC구매",
    Icon: LucideHandshake,
    color: "#22c55e",
    glow: "#16a34a",
    angle: 342,
  },
  {
    id: 3,
    name: "직접PPA",
    Icon: LucideSun,
    color: "#22c55e",
    glow: "#16a34a",
    angle: 54,
  },
  {
    id: 4,
    name: "제3자PPA",
    Icon: LucideFileCheck,
    color: "#22c55e",
    glow: "#16a34a",
    angle: 126,
  },
  {
    id: 5,
    name: "자가발전",
    Icon: LucideSolarPanel,
    color: "#22c55e",
    glow: "#16a34a",
    angle: 198,
  },
];

function polarToXY(cx: number, cy: number, r: number, angleDeg: number): { x: number; y: number } {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function Re100How() {
  const cx = 260, cy = 260, outerR = 200, innerR = 68, nodeR = 76, glowR = 86;

  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        fontFamily: "Pretendard, pretendard, sans-serif",
      }}
    >
      {/* 제목 - 배경 영역 밖 */}
      <div style={{ textAlign: "center", fontFamily: "Pretendard, pretendard, sans-serif" }}>
        <Heading
          fontSize={{ base: '28px', md: '38px', lg: '56px' }}
          fontWeight="800"
          lineHeight="1.35"
          textAlign="center"
          wordBreak="keep-all"
          letterSpacing="-0.02em"
          overflowWrap="break-word"
          mb={10}
          fontFamily="Pretendard, pretendard, sans-serif"
          ref={ref}
          opacity={isView ? 1 : 0}
          transform={isView ? "translateY(0)" : "translateY(20px)"}
          transition="all 1s ease"
        >
          <Text as="span" fontSize={{ base: '40px', md: '56px', lg: '64px' }} fontWeight="900" color="blue.700">K-RE100</Text>&nbsp;제도
        </Heading>
        <Flex
          mb={10}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            px={4}
            fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
            color="gray.800"
            lineHeight="1.75"
            fontWeight="700"
            textAlign="start"
            wordBreak="keep-all"
            letterSpacing="0.02em"
            overflowWrap="break-word"
            fontFamily="NanumSquareNeo"
            opacity={isView ? 1 : 0}
            transform={isView ? "translateY(0)" : "translateY(20px)"}
            transition="all 1.2s ease"
          >
            한국에서는 산업통상자원부와 한국에너지공단이 운영하는 K-RE100 제도를 통해 기업의 재생에너지 사용을 인정합니다.<br />
            기업은 다양한 방식으로 재생에너지 사용 실적을 인정받을 수 있습니다.
          </Text>
        </Flex>
      </div>

      <div>
        <Heading
          fontSize={{ base: '28px' }}
          fontWeight="800"
          lineHeight="1.35"
          textAlign="center"
          wordBreak="keep-all"
          letterSpacing="-0.02em"
          overflowWrap="break-word"
          mb={4}
          fontFamily="Pretendard, sans-serif"
        >
          K-RE100 이행방법
        </Heading>
      </div>

      {/* 배경 이미지 + 어두운 오버레이 영역 (차트만) */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "min(100vw, 560px)",
          backgroundImage: `url(${bg_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* 어두운 배경 오버레이 - 콘텐츠 가독용 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.5) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
      <style>{`
        @keyframes rotate-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .method-node { cursor: default; transition: filter .2s, transform .25s ease; }
        .method-node:hover { filter: brightness(1) drop-shadow(0 0 1px currentColor); transform: scale(1.05); }
        .orbit-ring { transform-origin: 260px 260px; animation: rotate-slow 150s linear infinite; }
      `}</style>

      {/* 이행방법 원형 차트 */}
      <svg
        viewBox="-50 -50 620 620"
        width="100%"
        height="100%"
        style={{ maxWidth: "min(100%, 560px)", aspectRatio: "1", flexShrink: 0, fontFamily: "Pretendard, pretendard, sans-serif" }}
      >
        <defs>
          {methods.map((m) => (
            <radialGradient key={m.id} id={`grad${m.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={m.color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={m.color} stopOpacity="0" />
            </radialGradient>
          ))}
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d1a2e" stopOpacity="0.9" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 회전하는 궤도 링 */}
        <circle
          className="orbit-ring"
          cx={cx}
          cy={cy}
          r={outerR + 18}
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
        <circle
          cx={cx}
          cy={cy}
          r={outerR - 10}
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="3 8"
        />

        {/* 방법별 빛줄기 + 노드 */}
        {methods.map((m) => {
          const nodePos = polarToXY(cx, cy, outerR, m.angle);
          const midPos = polarToXY(cx, cy, outerR * 0.55, m.angle);
          const IconComponent = m.Icon;

          return (
            <g
              key={m.id}
              className="method-node"
              style={{
                color: m.color,
                transformOrigin: `${nodePos.x}px ${nodePos.y}px`,
              }}
            >
              {/* 노드 외곽선 */}
              <circle
                cx={nodePos.x}
                cy={nodePos.y}
                r={glowR}
                fill={`url(#grad${m.id})`}
                opacity={0.5}
              />
              {/* 노드와 중앙 노드를 연결하는 선 */}
              <line
                x1={cx}
                y1={cy}
                x2={nodePos.x}
                y2={nodePos.y}
                stroke="white"
                strokeWidth={1.5}
                strokeDasharray="5 4"
                opacity={0.4}
              />
              {/* 노드 중앙 원 */}
              <circle cx={midPos.x} cy={midPos.y} r={3.5} fill="white" opacity={0.7} />
              <circle
                cx={nodePos.x}
                cy={nodePos.y}
                r={nodeR}
                fill="rgba(0, 109, 91, 0.6)"
                stroke="rgb(0, 130, 110)"
                strokeWidth={1.5}
              />
              <foreignObject
                x={nodePos.x - 24}
                y={nodePos.y - 48}
                width={48}
                height={48}
                style={{ overflow: "visible" }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconComponent size={30} color="white" strokeWidth={1.5} />
                </div>
              </foreignObject>
              <text
                x={nodePos.x}
                y={nodePos.y + 18}
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="900"
                fontFamily="Pretendard, pretendard, sans-serif"
              >
                {m.name}
              </text>
            </g>
          );
        })}

        {/* 중앙 노드: K-RE100 */}
        <circle
          cx={cx}
          cy={cy}
          r={innerR}
          fill="rgba(0, 109, 91, 0.6)"
          stroke="rgb(0, 130, 110)"
          strokeWidth="2"
          filter="url(#glow)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={innerR + 8}
          fill="rgba(0, 109, 91, 0.3)"
          stroke="white"
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="4 6"
        >
          <animate
            attributeName="r"
            values={`${innerR + 6};${innerR + 14};${innerR + 6}`}
            dur="10s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values=".3;.6;.3" dur="10s" repeatCount="indefinite" />
        </circle>
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="36"
          fontWeight="900"
          fontFamily="Pretendard, pretendard, sans-serif"
        >
          K-RE100
        </text>
      </svg>
      </div>
      </div>
    </div>
  );
}

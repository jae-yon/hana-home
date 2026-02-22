import { formatCountUpPrice } from '@/shared/hooks/useCountUp';

interface CustomAxisTickProps {
  axis: 'x' | 'y';
  x?: string | number;
  y?: string | number;
  payload?: { value?: string | number };
}

export default function CustomAxisTick(props: CustomAxisTickProps) {
  const { axis, x, y, payload } = props;

  // X축 틱 렌더링
  const renderXAxisTick = () => {
    return (
      <g transform={`translate(${Number(x ?? 0)},${Number(y ?? 0)})`}>
        <text
          x={0}
          y={0}
          dy={12}
          textAnchor="middle"
          style={{
            fontSize: '10px',
            fill: 'var(--chakra-colors-gray-700)',
            fontFamily: 'NanumSquareNeo, sans-serif',
          }}
        >
          {String(payload?.value ?? '')}
        </text>
      </g>
    );
  }

  // Y축 틱 렌더링
  const renderYAxisTick = () => {
    const text = formatCountUpPrice(Number(payload?.value ?? 0), 0) + '원';
    return (
      <g transform={`translate(${Number(x ?? 0)},${Number(y ?? 0)})`}>
        <text
          x={0}
          y={0}
          textAnchor="end"
          style={{
            fontSize: '10px',
            fill: 'var(--chakra-colors-gray-700)',
            fontFamily: 'NanumSquareNeo, sans-serif',
          }}
        >
          {text}
        </text>
      </g>
    );
  }
  
  return axis === 'x' && renderXAxisTick() || axis === 'y' && renderYAxisTick();
}
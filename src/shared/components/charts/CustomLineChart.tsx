import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { formatCountUpPrice } from '@/shared/hooks/useCountUp';

import CustomAxisTick from './CustomAxisTick';

interface CustomLineChartProps {
  data: any[];
  color: string;
}

export default function CustomLineChart(props: CustomLineChartProps) {
  const { data, color } = props;

  return (
    <LineChart
      data={data}
      margin={{ right: 50 }}
      style={{ outline: 'none' }}
    >
      {/* 격자 선 */}
      <CartesianGrid 
        stroke="var(--chakra-colors-gray-300)" 
        strokeWidth={1} 
        strokeDasharray="4 4" 
      />

      {/* X축 */}
      <XAxis 
        dataKey="label"
        axisLine={false}
        tickLine={false}
        tick={<CustomAxisTick axis="x" />}
      />

      {/* Y축 */}
      <YAxis 
        dataKey="value"
        axisLine={false}
        tickLine={false}
        domain={[
          (dataMin) => Math.floor(dataMin * 0.9),
          (dataMax) => Math.ceil(dataMax * 1.1)
        ]}
        tick={<CustomAxisTick axis="y" />}
      />

      {/* 툴팁 */}
      <Tooltip 
        contentStyle={{
          boxShadow: 'xs',
          fontSize: '10px',
          fill: 'var(--chakra-colors-gray-700)',
          fontFamily: 'NanumSquareNeo, sans-serif',
          border: '1px solid var(--chakra-colors-gray-200)',
          borderRadius: 'var(--chakra-radii-md)',
        }}
        labelStyle={{
          fontFamily: 'NanumSquareNeo, sans-serif',
          fontSize: '12px',
          fontWeight: 700,
          textAlign: 'center',
        }}
        itemStyle={{
          fontFamily: 'NanumSquareNeo, sans-serif',
          fontSize: '12px',
          fontWeight: 900,
          textAlign: 'center',
          color: `var(--chakra-colors-${color}-500)`,
        }}
        formatter={(value) => [formatCountUpPrice(Number(value), 2) + '원']}
      />

      {/* 라인 */}
      <Line 
        type="monotone"
        dataKey="value"
        stroke={`var(--chakra-colors-${color}-500)`}
        strokeWidth={2}
        dot={{ fill: `var(--chakra-colors-${color}-300)`, strokeWidth: 2 }}
        activeDot={{
          r: 6,
          fill: `var(--chakra-colors-${color}-500)`,
          stroke: `var(--chakra-colors-${color}-300)`,
          strokeWidth: 2,
        }}
      />
    </LineChart>
  );
}
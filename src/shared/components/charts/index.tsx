import { ResponsiveContainer } from 'recharts';
import CustomLineChart from './CustomLineChart';

interface ChartProps {
  data: any[];
  color: string;
  height?: number;
  chartStyle: 'line' | 'bar' | 'area';
}

export default function Chart(props: ChartProps) {
  const { height = 300, chartStyle = 'line', data, color } = props;

  const renderChart = (chartStyle: 'line' | 'bar' | 'area') => {
    switch (chartStyle) {
      case 'line':
        return <CustomLineChart data={data} color={color} />;
      case 'bar':
        return <></>;
      case 'area':
        return <></>;
    }
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      {renderChart(chartStyle)}
    </ResponsiveContainer>
  );
}
import { Rec, RecMonthlyItem } from '@/types/rec';

/** YYYY-MM-DD → YYYY년 MM월 DD일 */
function formatTradeDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-');
  return `${y}년 ${m}월 ${d}일`;
}

/** 통합평균가 = (육지 가격×육지 거래량 + 제주 가격×제주 거래량) / (육지 거래량 + 제주 거래량) */
export function calcUnifiedAvgPrice(rec: Rec): number {
  const { land_avg_price, land_trade_volume, jeju_avg_price, jeju_trade_volume } = rec;
  const totalVolume = land_trade_volume + jeju_trade_volume;
  if (totalVolume === 0) return 0;
  return (land_avg_price * land_trade_volume + jeju_avg_price * jeju_trade_volume) / totalVolume;
}

export function parseMonthlyRec(recs: Rec[]): RecMonthlyItem[] {
  return recs.map((rec) => ({
    date: rec.trade_date,
    dateFormatted: formatTradeDate(rec.trade_date),
    landAvgPrice: rec.land_avg_price,
    jejuAvgPrice: rec.jeju_avg_price,
    unifiedAvgPrice: calcUnifiedAvgPrice(rec),
  }));
}
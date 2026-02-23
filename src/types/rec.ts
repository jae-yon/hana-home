export interface Rec {
  id: number;
  trade_date: string;         // YYYY-MM-DD
  total_trade_count: number;  // 총 거래 건수
  total_trade_volume: number; // 총 거래 물량
  total_trade_value: number;  // 총 거래 가치
  closing_price: number;      // 종가
  land_avg_price: number;     // 육지 평균가
  land_high_price: number;    // 육지 최고가
  land_low_price: number;     // 육지 최저가
  land_trade_count: number;   // 육지 거래 건수
  land_trade_volume: number;  // 육지 거래 물량
  jeju_avg_price: number;     // 제주 평균가
  jeju_high_price: number;    // 제주 최고가
  jeju_low_price: number;     // 제주 최저가
  jeju_trade_count: number;   // 제주 거래 건수
  jeju_trade_volume: number;  // 제주 거래 물량
  created_at: Date;
}

/** 월간 REC 조회 시 사용하는 파싱된 한 건 타입 */
export interface RecMonthlyItem {
  /** 날짜 원본 (YYYY-MM-DD) */
  date: string;
  /** 포맷된 날짜 (YYYY년 MM월 DD일) */
  dateFormatted: string;
  /** 육지 평균가 */
  landAvgPrice: number;
  /** 제주 평균가 */
  jejuAvgPrice: number;
  /** 통합평균가 = (육지 가격×육지 거래량 + 제주 가격×제주 거래량) / (육지 거래량 + 제주 거래량) */
  unifiedAvgPrice: number;
}
import { Region } from './common';

export interface Smp {
  id: number;
  trade_date: string; // 일시(YYYYMMDD)
  trade_hour: number; // 시간(1-24)
  area_code: Region;  // 지역(육지, 제주)
  smp: number;        // 계통한계가격
  land_load: number;  // 육지 가중치
  jeju_load: number;  // 제주 가중치
  total_load: number; // 통합 가중치
  created_at: Date;
}

/** trade_date를 키로 묶은 SMP 목록 */
export type SmpGroupedByDate = Record<string, Smp[]>;

/** 날짜별 가중평균 등 파생 데이터 (groupSmpByTradeDate 결과에서 도출) */
export interface SmpDailyWeightedSummary {
  /** 날짜 원본 (YYYY-MM-DD) */
  date: string;
  /** 포맷된 날짜 (YYYY년 MM월 DD일) */
  dateFormatted: string;
  /** 육지 가중치(land_load)로 계산한 SMP 가중평균 */
  landWeightedAvg: number;
  /** 제주 가중치(jeju_load)로 계산한 SMP 가중평균 */
  jejuWeightedAvg: number;
  /** 통합 가중치(total_load)로 계산한 SMP 가중평균 */
  totalWeightedAvg: number;
}
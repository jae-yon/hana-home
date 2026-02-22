export interface Rec {
  id: number;
  trade_date: string;
  total_trade_count: number;
  total_trade_volume: number;
  total_trade_value: number;
  closing_price: number;
  land_avg_price: number;
  land_high_price: number;
  land_low_price: number;
  land_trade_count: number;
  land_trade_volume: number;
  jeju_avg_price: number;
  jeju_high_price: number;
  jeju_low_price: number;
  jeju_trade_count: number;
  jeju_trade_volume: number;
  created_at: Date;
}
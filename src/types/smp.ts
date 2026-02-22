import { Region } from './common';

export interface Smp {
  id: number;
  trade_date: string;
  trade_hour: number;
  area_code: Region;
  smp: number;
  land_load: number;
  jeju_load: number;
  total_load: number;
  created_at: Date;
}
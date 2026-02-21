import supabase from '@/shared/config/supabase';

import { getKSTDateRange } from '@/shared/formatDate';

export async function fetchByRange(
  tableName: string,
  days: number,
  limit?: number,
) {
  const { fromDate, toDate } = getKSTDateRange(days);

  console.log(fromDate, toDate);

  let query = supabase
    .from(tableName)
    .select('*')
    .gte('trade_date', fromDate)
    .lte('trade_date', toDate)
    .order('trade_date', { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) throw error;

  return data;
}
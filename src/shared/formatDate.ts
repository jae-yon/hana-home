// KST 기준 시간 오프셋 (9시간)
const KST_OFFSET = 9 * 60 * 60 * 1000;

// KST 기준 날짜 문자열 반환 (YYYY-MM-DD)
export const getKSTDateString = (date: Date) => {
  const kst = new Date(date.getTime() + KST_OFFSET);
  return kst.toISOString().slice(0, 10);
}

// KST 기준 날짜 범위 반환 (YYYY-MM-DD)
export const getKSTDateRange = (days: number) => {
  const now = new Date();

  const todayKST = getKSTDateString(now);

  const past = new Date();
  past.setDate(past.getDate() - days);
  const fromDateKST = getKSTDateString(past);

  return {
    fromDate: fromDateKST,
    toDate: todayKST,
  };
}
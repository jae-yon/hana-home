/**
 * 날짜를 YYYY.MM.DD 형식으로 포맷팅합니다.
 *
 * @param date - 포맷할 날짜
 * @returns YYYY.MM.DD 형식의 문자열
 *
 * @example
 * formatDateToKorean('2026-01-01') // "2026.01.01"
 */
export function formatDateToKorean(date: string | Date): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '-';

  // KST 보정 (UTC + 9시간)
  const kst = new Date(d.getTime() + 9 * 60 * 60 * 1000);

  const y = kst.getUTCFullYear();
  const m = String(kst.getUTCMonth() + 1).padStart(2, '0');
  const day = String(kst.getUTCDate()).padStart(2, '0');

  return `${y}.${m}.${day}`;
}
const MAN = 10_000;

export interface FormatManUnitOptions {
  /** 만 단위 소수 자릿수 (기본: 2). 예: 12345 → "1.23만" */
  decimals?: number;
  /** 접미사 (기본: "만") */
  suffix?: string;
  /** 1만 미만일 때 천 단위 구분자 적용 여부 (기본: true) */
  useCommaUnderMan?: boolean;
}

/**
 * 숫자를 만(1만=10,000) 단위로 포맷팅합니다.
 *
 * @param value - 포맷할 숫자
 * @param options - 포맷 옵션
 * @returns 만 단위로 포맷된 문자열
 *
 * @example
 * formatManUnit(10000)        // "1만"
 * formatManUnit(12345)        // "1.23만"
 * formatManUnit(123456)       // "12.35만"
 * formatManUnit(9999)         // "9,999"
 * formatManUnit(0)            // "0"
 */
export function formatManUnit(
  value: number,
  options: FormatManUnitOptions = {}
): string {
  const {
    decimals = 2,
    suffix = '',
    useCommaUnderMan = true,
  } = options;

  const num = Number(value);
  if (Number.isNaN(num)) return '0';

  if (num === 0) return '0';

  if (num < MAN) {
    return useCommaUnderMan
      ? num.toLocaleString('ko-KR', { maximumFractionDigits: 0 })
      : String(Math.floor(num));
  }

  const manValue = num / MAN;
  const fixed = manValue.toFixed(decimals);
  const trimmed = Number(fixed).toString(); // 불필요한 뒤 0 제거

  return `${trimmed}${suffix}`;
}

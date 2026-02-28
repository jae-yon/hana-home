/**
 * 한국 전화번호 포맷 검사
 * - 휴대폰: 010-1234-5678, 010-123-4567
 * - 지역번호: 02-123-4567, 031-123-4567 등
 */
const PHONE_REGEX =
  /^(01[0-9]-[0-9]{3,4}-[0-9]{4}|0[2-9][0-9]?-[0-9]{3,4}-[0-9]{4})$/;

export function isValidPhoneNumber(phone: string): boolean {
  if (!phone?.trim()) return false;
  return PHONE_REGEX.test(phone.trim());
}

/**
 * 입력값에서 숫자만 추출한 뒤 전화번호 형식으로 하이픈 삽입
 * - 010-XXXX-XXXX / 010-XXX-XXXX
 * - 02-XXX-XXXX / 02-XXXX-XXXX
 * - 01X-XXX-XXXX, 0XX-XXX-XXXX
 */
export function formatPhoneNumberInput(value: string): string {
  const digits = (value ?? '').replace(/\D/g, '');
  if (digits.length === 0) return '';

  const len = digits.length;

  if (digits.startsWith('010')) {
    if (len <= 3) return digits;
    if (len <= 7) return `010-${digits.slice(3)}`;
    return `010-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  }
  if (digits.startsWith('02')) {
    if (len <= 2) return digits;
    if (len <= 6) return `02-${digits.slice(2)}`;
    return `02-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
  }
  if (digits.startsWith('01') && digits[2] !== '0') {
    if (len <= 3) return digits;
    if (len <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  }
  if (digits[0] === '0') {
    if (len <= 3) return digits;
    if (len <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  }
  return digits.slice(0, 11);
}

/**
 * 이메일 로컬파트 + 도메인을 합쳐 이메일 포맷 검사
 * @param email - @ 앞쪽 로컬 파트
 * @param emailDomain - @ 뒤쪽 도메인 (예: naver.com, gmail.com)
 */
export function isValidEmailWithDomain(email: string, emailDomain: string): boolean {
  const local = (email ?? '').trim();
  const domain = (emailDomain ?? '').trim();
  if (!local || !domain) return false;

  const fullEmail = `${local}@${domain}`;
  // 일반적인 이메일 형식: 로컬@도메인 (RFC 5322 간소화)
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return EMAIL_REGEX.test(fullEmail);
}

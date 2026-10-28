import { execSync } from 'node:child_process';

// Vercel 빌드에서는 @sparticuz/chromium을 사용하므로 별도 Chrome을 내려받지 않는다
if (process.env.VERCEL) {
  console.log('[install-browser] Vercel 환경 — 서버리스 Chromium을 사용하므로 건너뜁니다');
  process.exit(0);
}

execSync('puppeteer browsers install chrome', { stdio: 'inherit' });

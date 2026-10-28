import path from 'node:path';
import fs from 'node:fs/promises';

import sharp from 'sharp';

// public/og-image.jpg를 생성하는 일회성 스크립트.
// 빌드 환경에 한글 폰트가 없을 수 있어 결과물을 저장소에 함께 커밋한다.
const WIDTH = 1200;
const HEIGHT = 630;
const ACCENT_COLOR = '#EA580C';
const LOGO_WIDTH = 300;

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#FFFFFF"/>
  <rect width="${WIDTH}" height="12" fill="${ACCENT_COLOR}"/>
  <text x="${WIDTH / 2}" y="432" text-anchor="middle"
        font-family="Malgun Gothic, Pretendard, sans-serif" font-size="68" font-weight="700" fill="#1A202C">
    (주)하나솔루션
  </text>
  <text x="${WIDTH / 2}" y="498" text-anchor="middle"
        font-family="Malgun Gothic, Pretendard, sans-serif" font-size="38" font-weight="500" fill="${ACCENT_COLOR}">
    태양광 에너지 솔루션
  </text>
  <text x="${WIDTH / 2}" y="562" text-anchor="middle"
        font-family="Malgun Gothic, Pretendard, sans-serif" font-size="26" font-weight="400" fill="#718096">
    www.solutionhana.co.kr
  </text>
</svg>
`);

const logo = await sharp(await fs.readFile(path.resolve('public/logo.svg')))
  .resize({ width: LOGO_WIDTH })
  .png()
  .toBuffer();

const { height: logoHeight } = await sharp(logo).metadata();

await sharp(background)
  .composite([{ input: logo, top: Math.round(330 - logoHeight), left: Math.round((WIDTH - LOGO_WIDTH) / 2) }])
  .jpeg({ quality: 90 })
  .toFile(path.resolve('public/og-image.jpg'));

console.log('[og-image] public/og-image.jpg 생성 완료');

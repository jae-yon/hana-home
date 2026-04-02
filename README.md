# 하나홈 (Hana Home)

> Vite + React + TypeScript 기반 SPA · 백엔드 Supabase 서버리스

![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Serverless-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)

**배포 URL**: [https://www.solutionhana.co.kr](https://www.solutionhana.co.kr)

---

## 빠른 시작

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5000`으로 접속합니다.

---

## 프로젝트 스펙

| 항목 | 내용 |
|------|------|
| 애플리케이션 | SPA (Single Page Application), React 18 |
| Node.js | **≥ 20.19** 또는 **≥ 22.12** 권장 (Vite 7 기준) |
| 패키지 매니저 | `npm` |
| 언어 / 컴파일 | TypeScript 5.x · `target` ES2020 · `strict` 모드 |
| 모듈 | ESNext · `moduleResolution` bundler · 경로 별칭 `@/*` → `src/*` |
| 번들러 | Vite 7.x + `@vitejs/plugin-react` |
| 개발 서버 | `http://localhost:5000` (`host: true`) |
| 빌드 산출물 | `dist/` — 배포 전 `npm run build` 실행 |
| 빌드 파이프라인 | `tsc` 타입 검사 → `vite build` |
| 품질 도구 | ESLint 9 (`npm run lint`, 대상: `src`) |
| SEO · 자산 | `vite-plugin-sitemap` · `vite-plugin-image-optimizer` |
| 배포 | Vercel |

---

## 기술 스택

### Frontend
`react` · `react-dom` · `react-router-dom` · `vite` · `typescript`

### UI / 애니메이션
`@chakra-ui/react` · `framer-motion`

### 상태 / 데이터
`@tanstack/react-query` · `axios` · `@supabase/supabase-js`

### 차트 / 에디터
`recharts` · `@tiptap/react` (highlight · image · placeholder 등)

### 지도 / 슬라이더
`네이버 지도 API` · `react-slick` · `slick-carousel`

---

## 환경변수

프로젝트 루트에 `.env` 파일을 생성하고 아래 변수를 설정합니다.

```env
VITE_SUPABASE_URL="..."
VITE_SUPABASE_PUBLISHABLE_KEY="..."
VITE_NAVER_MAP_URL="..."
```

> 실제 키/값은 외부에 공유하지 마세요.

---

## 빌드 / 검증

```bash
npm run build    # tsc 타입 검사 후 vite build
npm run lint     # ESLint 9 검사 (src 대상)
npm run preview  # 빌드 결과물 로컬 프리뷰
```

---

## API

### 내부 API

| 메서드 | 엔드포인트 | 설명 |
|--------|-----------|------|
| `POST` | `{SUPABASE_URL}/functions/v1/auth/sessions` | 로그인 |

**Request Body**
```json
{
  "email": "string",
  "password": "string"
}
```

### 외부 API

| 서비스 | 설명 | 활용기간 |
|--------|------|----------|
| [네이버 지도 API](https://navermaps.github.io/maps.js.ncp/) | 지도 렌더링 | - |
| [한국전력거래소 — 계통한계가격 및 수요예측](https://www.data.go.kr/data/15131225/openapi.do) | 하루전 발전계획용 SMP 데이터 | 2026-02-10 ~ 2028-02-10 |
| [한국전력거래소 — REC 현물시장 정보](https://www.data.go.kr/data/15099762/openapi.do) | REC 현물시장 거래 데이터 | 2026-02-10 ~ 2028-02-10 |

---

## 디렉터리 구조

```
├── public/              # favicon, robots 등 정적 파일
└── src/
    ├── pages/           # 앱 라우트에 대응하는 페이지 컴포넌트
    ├── domains/         # 메인·소개·사업·포트폴리오 등 섹션별 화면 조각
    ├── shared/          # 헤더/푸터, 차트, 에디터 등 공통 UI·설정·훅·유틸
    ├── routes/          # 라우팅 정의
    ├── types/           # 공통 타입 정의
    └── assets/          # 폰트·이미지 등 정적 에셋
```
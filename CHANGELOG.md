# Changelog

이 프로젝트의 모든 주목할 만한 변경 사항은 이 파일에 문서화됩니다.

형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.1.0/)를 따르며,
이 프로젝트는 [Semantic Versioning](https://semver.org/lang/ko/)을 준수합니다.

## [Unreleased]

## [1.3.0] - 2026-08-27

### Added

- 공통 페이지 레이아웃 컴포넌트 (`PageLayout`) — 헤더, 푸터, 서브히어로, 플로팅 버튼을 한곳에서 구성
- 회사소개 페이지 인증·증명 섹션 (`IntroCert`) — 중소벤처기업 확인서, 품질경영시스템 인증서, 생산물배상책임보험 가입증명서를 그리드로 표시. 이미지는 프로젝트 내부 에셋(`src/assets/images/cert/`)을 사용

### Changed

- `PageLayout`을 메인, 회사소개, 사업소개, 시공사례, 홍보, 고객센터 페이지에 적용. 페이지마다 헤더·푸터·서브히어로를 반복하던 구조를 제거하고, 본문이 짧아도 푸터가 화면 하단에 유지되도록 개선. 라우트 변경 시 스크롤 초기화도 레이아웃에서 일괄 처리
- 팝업창 컴포넌트 스타일 수정 — 모서리 라운드, 그림자·테두리, 하단 버튼 정렬 및 순서
- 회사소개 페이지 전반 UI 수정 — 인증 섹션 추가에 맞춰 인사말, 비전, 핵심가치 등 섹션 스타일 정리

### Fixed

- 서브히어로 섹션 높이 기본값 수정

## [1.2.0] - 2026-08-04

### Added

- 관리자 시공사례 관리 대시보드 및 라우트 연결
- 시공사례 공통 컴포넌트

### Changed

- 시공사례 페이지 리팩토링 및 메인 페이지 조회 로직 개선
- 시공사례 타입 정의 정리 및 하드코딩 데이터 제거

### Fixed

- 팝업 관리 대시보드 스타일 수정

### Removed

- 미사용 리소스

## [1.1.0] - 2026-07-27

### Added

- 관리자 대시보드, 사이드바, 인증(세션 토큰 검증) 및 관리자 라우트
- 팝업 표시/숨기기(로컬 스토리지) 및 관리자 팝업 CRUD·미리보기
- 헤더 로그아웃·설정 아이콘
- 이미지 업로드 경로 설정 (`useBucket` 통합)

### Changed

- 회사 주소 상수 수정 (부안읍 → 행안면)
- Chakra UI 등 의존성 패키지 업데이트

### Fixed

- 이미지 업로드 경로 인자 필수화

## [1.0.0] - 2026-04-10

### Added

- 하나솔루션 홈페이지 초기 공개 릴리스 (Vite + React + TypeScript + Supabase)
- 메인·회사소개·사업소개(RE100, RPS, PPA, 가정용·주차장 태양광, 리파워링, 청소모듈 등)·시공사례·고객센터
- SMP/REC 시세 인사이트, 예상 수익계산기, 견적문의(메일 전송·봇 방지)
- 공지사항·게시판 및 Tiptap 기반 에디터(이미지 업로드 포함)
- 로그인, 네이버 지도, SEO(메타·사이트맵)·이미지 최적화, README

### Fixed

- 링크·버튼 스타일, 견적문의 노출 조건, SEO 및 요청사항 반영

[unreleased]: https://github.com/jae-yon/hana-home/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/jae-yon/hana-home/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/jae-yon/hana-home/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/jae-yon/hana-home/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/jae-yon/hana-home/releases/tag/v1.0.0

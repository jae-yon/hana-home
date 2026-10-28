import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs/promises';

import { loadEnv } from 'vite';
import puppeteer from 'puppeteer';

import { CONTENT_ROUTES, UNLISTED_ROUTES, fetchNoticeRoutes } from './routes.mjs';

const DIST_DIR = path.resolve('dist');
const PORT = 4178;
const ORIGIN = `http://127.0.0.1:${PORT}`;

// '*' 라우트로 떨어져 NotFoundPage가 렌더되는 경로 — 결과물은 404.html로 저장한다
const NOT_FOUND_ROUTE = '/__not-found__';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

main();

async function main() {
  const env = loadEnv('production', process.cwd(), '');
  const noticeRoutes = await fetchNoticeRoutes(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_PUBLISHABLE_KEY);
  const routes = [...CONTENT_ROUTES, ...UNLISTED_ROUTES, ...noticeRoutes, NOT_FOUND_ROUTE];

  console.log(`[prerender] 대상 ${routes.length}개 (정적 ${CONTENT_ROUTES.length + UNLISTED_ROUTES.length} / 공지 ${noticeRoutes.length} / 404 1)`);

  const server = await startShellServer();
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });

  try {
    for (const route of routes) {
      const html = await renderRoute(browser, route);
      const outputPath = resolveOutputPath(route);

      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, html, 'utf-8');

      console.log(`[prerender] ${route} → ${path.relative(DIST_DIR, outputPath)} (${html.length.toLocaleString()} bytes)`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();

  // 이미지·폰트는 DOM 구조에 영향을 주지 않으므로 차단해 네트워크 유휴 판정을 앞당긴다
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (['image', 'media', 'font'].includes(request.resourceType())) {
      request.abort();
      return;
    }
    request.continue();
  });

  try {
    await page.goto(`${ORIGIN}${route}`, { waitUntil: 'domcontentloaded', timeout: 60_000 });

    // 네트워크가 멎으면 lazy 청크와 Supabase 응답이 모두 도착한 시점이므로 그 뒤에 렌더 결과를 확인한다
    await page.waitForNetworkIdle({ idleTime: 1_000, timeout: 60_000 });
    await page.waitForFunction(() => (document.getElementById('root')?.innerText.trim().length ?? 0) > 0, { timeout: 60_000 });

    return `<!DOCTYPE html>\n${await page.evaluate(() => document.documentElement.outerHTML)}`;
  } finally {
    await page.close();
  }
}

function resolveOutputPath(route) {
  if (route === NOT_FOUND_ROUTE) {
    return path.join(DIST_DIR, '404.html');
  }

  if (route === '/') {
    return path.join(DIST_DIR, 'index.html');
  }

  return path.join(DIST_DIR, route, 'index.html');
}

// 빌드 산출물을 그대로 서빙하되, 라우트 경로는 항상 원본 index.html로 폴백한다.
// 프리렌더 결과를 dist에 덮어쓰는 중에도 셸이 바뀌지 않도록 메모리에 올려둔다.
async function startShellServer() {
  const shellHtml = await fs.readFile(path.join(DIST_DIR, 'index.html'), 'utf-8');

  const server = http.createServer(async (request, response) => {
    const { pathname } = new URL(request.url, ORIGIN);
    const extension = path.extname(pathname);

    if (extension) {
      try {
        const file = await fs.readFile(path.join(DIST_DIR, pathname));
        response.writeHead(200, { 'Content-Type': MIME_TYPES[extension] ?? 'application/octet-stream' });
        response.end(file);
        return;
      } catch {
        response.writeHead(404).end();
        return;
      }
    }

    response.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
    response.end(shellHtml);
  });

  await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve));

  return server;
}

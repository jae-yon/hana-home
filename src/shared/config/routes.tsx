import { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/MainPage'));
const SupportPage = lazy(() => import('@/pages/SupportPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));

export const ROUTES = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/portfolio/:type',
    element: <PortfolioPage />,
  },
  {
    path: '/support',
    element: <SupportPage />,
  },
  {
    path: '/support/:type',
    element: <SupportPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

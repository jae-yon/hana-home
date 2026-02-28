import { lazy } from 'react';
const MainPage = lazy(() => import('@/pages/MainPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const SupportPage = lazy(() => import('@/pages/SupportPage'));
const BusinessPage = lazy(() => import('@/pages/BusinessPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));

export const ROUTES = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/business',
    element: <BusinessPage />,
  },
  {
    path: '/business/:type',
    element: <BusinessPage />,
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
    path: '/hana/back',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

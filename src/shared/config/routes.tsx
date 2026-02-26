import { lazy } from 'react';
const MainPage = lazy(() => import('@/pages/MainPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
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
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/about/:type',
    element: <AboutPage />,
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

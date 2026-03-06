import { lazy } from 'react';
const MainPage = lazy(() => import('@/pages/MainPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const SupportPage = lazy(() => import('@/pages/SupportPage'));
const BusinessPage = lazy(() => import('@/pages/BusinessPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const PromotionPage = lazy(() => import('@/pages/PromotionPage'));

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
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/about/:type',
    element: <AboutPage />,
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
    path: '/promotion',
    element: <PromotionPage />,
  },
  {
    path: '/promotion/:type',
    element: <PromotionPage />,
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

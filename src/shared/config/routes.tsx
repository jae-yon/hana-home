import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PortfolioPage from '@/pages/PortfolioPage';

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
    path: '*',
    element: <NotFoundPage />,
  },
];

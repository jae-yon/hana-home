import MainPage from '@/pages/MainPage';
import SupportPage from '@/pages/SupportPage';
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

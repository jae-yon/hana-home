import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';

const routes = [
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: <MainPage />,
  }, 
]

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
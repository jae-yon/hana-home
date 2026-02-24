import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ROUTES } from '@/shared/config/routes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
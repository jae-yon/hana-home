import { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ROUTES } from '@/shared/config/routes';
import Loader from '@/shared/components/common/Loader';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
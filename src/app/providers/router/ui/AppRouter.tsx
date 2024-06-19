import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { GuestGuard } from './GuestGuard';
import { routeConfig } from '../config/routeConfig';

const AppRoutes = () =>
  routeConfig.map(({ element, path, authOnly }) => (
    <Route
      key={path}
      path={path}
      element={authOnly ? <GuestGuard>{element}</GuestGuard> : element}
    />
  ));

export const AppRouter = () => (
  <div className='page-wrapper'>
    <Suspense fallback={<PageLoader />}>
      <Routes>{AppRoutes()}</Routes>
    </Suspense>
  </div>
);

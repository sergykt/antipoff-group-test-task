import { Navigate, type RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { appRoutes } from '@/shared/const/router';

export const routeConfig: RouteProps[] = [
  {
    path: appRoutes.mainPage,
    element: <MainPage />,
  },
  {
    path: appRoutes.notFound,
    element: <Navigate to={appRoutes.mainPage} />,
  },
];

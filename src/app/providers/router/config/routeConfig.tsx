import { Navigate } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { appRoutes } from '@/shared/const/router';
import { SignUpPage } from '@/pages/SignUpPage';
import React from 'react';

interface RoutePropsWithAuth {
  path: string;
  element: React.ReactNode;
  authOnly?: boolean;
}

export const routeConfig: RoutePropsWithAuth[] = [
  {
    path: appRoutes.mainPage,
    element: <MainPage />,
    authOnly: true,
  },
  {
    path: appRoutes.signUp,
    element: <SignUpPage />,
  },
  {
    path: appRoutes.notFound,
    element: <Navigate to={appRoutes.mainPage} />,
  },
];

import { Navigate } from 'react-router-dom';
import { getToken } from '@/entities/Session';
import { appRoutes } from '@/shared/const/router';
import { useAppSelector } from '@/shared/lib/store/hooks';

interface GuestGuardProps {
  children: React.ReactNode;
}

export const GuestGuard = ({ children }: GuestGuardProps) => {
  const token = useAppSelector(getToken);

  if (!token) return <Navigate to={appRoutes.signUp} replace />;

  return children;
};

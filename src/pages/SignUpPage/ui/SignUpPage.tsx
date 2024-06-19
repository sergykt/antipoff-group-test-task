import { memo } from 'react';
import { Navigate } from 'react-router-dom';
import { SignUpForm } from '@/features/signUp';
import { getToken } from '@/entities/Session';
import { Container } from '@/shared/ui/Container';
import { useAppSelector } from '@/shared/lib/store/hooks';
import { appRoutes } from '@/shared/const/router';
import styles from './SignUpPage.module.scss';

const SignUpPage = memo(() => {
  const token = useAppSelector(getToken);

  if (token) return <Navigate to={appRoutes.mainPage} replace />;

  return (
    <main>
      <Container className={styles.container}>
        <SignUpForm />
      </Container>
    </main>
  );
});

export default SignUpPage;

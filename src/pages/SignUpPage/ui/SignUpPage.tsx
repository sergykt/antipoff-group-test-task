import { memo } from 'react';
import { Container } from '@/shared/ui/Container';
import { SignUpForm } from '@/features/signUp';
import styles from './SignUpPage.module.scss';

const SignUpPage = memo(() => {
  return (
    <main>
      <Container className={styles.container}>
        <SignUpForm />
      </Container>
    </main>
  );
});

export default SignUpPage;

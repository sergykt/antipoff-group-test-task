import { memo } from 'react';
import { Container } from '@/shared/ui/Container';
import { Button } from '@/shared/ui/Button';
import styles from './Header.module.scss';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = memo((props: HeaderProps) => {
  const { children } = props;

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.controls}>
          <Button color='white'>Назад</Button>
          <Button color='white'>Выход</Button>
        </div>
        {children}
      </Container>
    </header>
  );
});

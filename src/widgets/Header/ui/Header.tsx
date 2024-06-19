import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { GrPrevious } from 'react-icons/gr';
import { IoMdExit } from 'react-icons/io';
import { sessionActions } from '@/entities/Session';
import { IconButton } from '@/shared/ui/IconButton';
import { useAppDispatch } from '@/shared/lib/store/hooks';
import { Container } from '@/shared/ui/Container';
import { Button } from '@/shared/ui/Button';
import { appRoutes } from '@/shared/const/router';
import styles from './Header.module.scss';

interface HeaderProps {
  children: React.ReactNode;
  backUrl?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { children, backUrl } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = useCallback(() => dispatch(sessionActions.logOut()), [dispatch]);

  const handleBackUrl = useCallback(
    () => navigate(backUrl ?? appRoutes.mainPage),
    [navigate, backUrl],
  );

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.controls}>
          {backUrl && (
            <>
              <Button id='back' color='white' className={styles.button} onClick={handleBackUrl}>
                Назад
              </Button>
              <IconButton id='back-mobile' className={styles.iconButton} onClick={handleBackUrl}>
                <GrPrevious />
              </IconButton>
            </>
          )}
          <Button
            id='logout'
            color='white'
            className={classNames(styles.button, styles.logOut)}
            onClick={handleLogOut}
          >
            Выход
          </Button>
          <IconButton
            id='logout-mobile'
            className={classNames(styles.iconButton, styles.logOut)}
            onClick={handleLogOut}
          >
            <IoMdExit />
          </IconButton>
        </div>
        {children}
      </Container>
    </header>
  );
});

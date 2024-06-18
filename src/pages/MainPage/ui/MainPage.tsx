import { memo } from 'react';
import { Header } from '@/widgets/Header';
import { UserList } from '@/widgets/UserList';
import { Container } from '@/shared/ui/Container';
import styles from './MainPage.module.scss';

const MainPage = memo(() => {
  return (
    <>
      <Header>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Наша Команда</h1>
          <p className={styles.description}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
          </p>
        </div>
      </Header>
      <main>
        <Container>
          <UserList />
        </Container>
      </main>
    </>
  );
});

export default MainPage;

import { memo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { UserProfile } from '@/widgets/UserProfile';
import { useGetUserByIdQuery } from '@/entities/User';
import { Container } from '@/shared/ui/Container';
import { appRoutes } from '@/shared/const/router';
import styles from './UserPage.module.scss';

type ILocationState = { from?: string } | null;

const UserPage = memo(() => {
  const params = useParams();
  const location = useLocation();
  const locationState = location.state as ILocationState;
  const backUrl = locationState?.from ?? appRoutes.mainPage;
  const id = Number(params.id);

  const { data: userData } = useGetUserByIdQuery(id);

  return (
    <>
      <Header backUrl={backUrl}>
        {userData && (
          <div className={styles.wrapper}>
            <img
              src={userData.avatar}
              alt={userData.firstName}
              className={styles.img}
              loading='lazy'
              width='187'
              height='187'
            />
            <div className={styles.info}>
              <h1 className={styles.title}>
                {userData.firstName} {userData.lastName}
              </h1>
              <p className={styles.subtitle}>Партнер</p>
            </div>
          </div>
        )}
      </Header>
      <main>
        <Container>
          {userData && (
            <UserProfile
              email={userData.email}
              phone='+7 (954) 333-44-55
'
            />
          )}
        </Container>
      </main>
    </>
  );
});

export default UserPage;

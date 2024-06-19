import { memo, useCallback, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { UserProfile } from '@/widgets/UserProfile';
import { useGetUserByIdQuery } from '@/entities/User';
import { Container } from '@/shared/ui/Container';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Loader } from '@/shared/ui/Loader';
import { appRoutes } from '@/shared/const/router';
import styles from './UserPage.module.scss';

type ILocationState = { from?: string } | null;

const UserPage = memo(() => {
  const params = useParams();
  const location = useLocation();
  const locationState = location.state as ILocationState;
  const backUrl = locationState?.from ?? appRoutes.mainPage;
  const id = Number(params.id);
  const { data: userData, isFetching } = useGetUserByIdQuery(id);

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleLoadImg = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Ошибка при создании изображения:', error);
      }
    }
  }, []);

  return (
    <>
      <Header backUrl={backUrl}>
        {userData && (
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img
                src={imageSrc ?? userData.avatar}
                alt={userData.firstName}
                className={styles.img}
                loading='lazy'
                width='187'
                height='187'
              />
              <input
                type='file'
                className={styles.inputFile}
                title='Загрузить аватар'
                accept='image/*'
                onChange={handleLoadImg}
              />
            </div>
            <div className={styles.info}>
              <h1 className={styles.title}>
                {userData.firstName} {userData.lastName}
              </h1>
              <p className={styles.subtitle}>Партнер</p>
            </div>
          </div>
        )}
        {!userData && isFetching && (
          <div className={styles.wrapper}>
            <Skeleton border='50%' width={187} height={187} />
            <div className={styles.info}>
              <Skeleton width={250} className={styles.titleSkeleton} />
              <Skeleton width={100} className={styles.subtitleSkeleton} />
            </div>
          </div>
        )}
      </Header>
      <main>
        <Container className={styles.container}>
          {userData && <UserProfile email={userData.email} phone='+7 (954) 333-44-55' />}
          {!userData && isFetching && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
        </Container>
      </main>
    </>
  );
});

export default UserPage;

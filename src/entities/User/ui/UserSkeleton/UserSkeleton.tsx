import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './UserSkeleton.module.scss';

export const UserSkeleton = memo(() => {
  return (
    <div className={styles.card}>
      <Skeleton width={150} height={150} border='50%' />
      <Skeleton width={150} height={20} />
    </div>
  );
});

interface UserSkeletonProps {
  count: number;
}

export const UserSkeletons = memo(({ count }: UserSkeletonProps) => {
  const skeletonArray = Array.from({ length: count }, (_, i) => i);

  return (
    <>
      {skeletonArray.map((skeleton) => (
        <UserSkeleton key={skeleton} />
      ))}
    </>
  );
});

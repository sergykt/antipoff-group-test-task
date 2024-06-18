import { memo } from 'react';
import styles from './UserSkeleton.module.scss';

export const UserSkeleton = () => {
  return <div className={styles.card} />;
};

interface UserSkeletonProps {
  count: number;
}

export const UserSkeletons = memo(({ count }: UserSkeletonProps) => {
  const skeletons = Array.from({ length: count }, (_, i) => <UserSkeleton key={i} />);

  return skeletons;
});

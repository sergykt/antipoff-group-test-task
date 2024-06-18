import { memo } from 'react';
import { LikeButton } from '@/shared/ui/LikeButton';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks';
import { type UserCardProps } from '../model/types';
import styles from './UserCard.module.scss';
import { getLikeById } from '../model/selectors';
import { usersActions } from '../model/slice';

export const UserCard = memo((props: UserCardProps) => {
  const { firstName, lastName, avatar, id } = props;
  const dispatch = useAppDispatch();
  const liked = useAppSelector((state) => getLikeById(state, id));

  const userName = `${firstName} ${lastName}`;

  const toggleLike = () => dispatch(usersActions.toggleLike(id));

  return (
    <div className={styles.card}>
      <img className={styles.img} src={avatar} alt={userName} width='150' height='150' />
      <p>{userName}</p>
      <LikeButton className={styles.like} liked={liked} onClick={toggleLike} />
    </div>
  );
});

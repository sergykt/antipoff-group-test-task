import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LikeButton } from '@/shared/ui/LikeButton';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks';
import { appRoutes } from '@/shared/const/router';
import { type UserCardProps } from '../../model/types';
import { getLikeById } from '../../model/selectors';
import { usersActions } from '../../model/slice';
import styles from './UserCard.module.scss';

export const UserCard = memo((props: UserCardProps) => {
  const { firstName, lastName, avatar, id } = props;

  const location = useLocation();
  const dispatch = useAppDispatch();
  const liked = useAppSelector((state) => getLikeById(state, id));

  const userName = `${firstName} ${lastName}`;
  const url = `${appRoutes.users}/${id}`;

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(usersActions.toggleLike(id));
  };

  const prevUrl = location.pathname + location.search;

  return (
    <Link to={url} className={styles.link} state={{ from: prevUrl }}>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={avatar}
          alt={userName}
          width='150'
          height='150'
          loading='lazy'
        />
        <p>{userName}</p>
        <LikeButton className={styles.like} liked={liked} onClick={toggleLike} />
      </div>
    </Link>
  );
});

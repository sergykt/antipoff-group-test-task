import { memo, useEffect } from 'react';
import { useGetUsersQuery, UserCard, UserSkeletons } from '@/entities/User';
import { usePagination } from '@/shared/lib/pagination';
import { Pagination } from '@/shared/ui/Pagination';
import styles from './UserList.module.scss';

export const UserList = memo(() => {
  const { page, setPage } = usePagination();
  const { data: userList, isFetching } = useGetUsersQuery(page);
  const { totalPages, perPage = 6 } = userList ?? {};

  useEffect(() => {
    if (totalPages && page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages, setPage]);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {isFetching ? (
          <UserSkeletons count={perPage} />
        ) : (
          userList?.data.map(({ firstName, lastName, id, avatar }) => (
            <UserCard key={id} id={id} firstName={firstName} lastName={lastName} avatar={avatar} />
          ))
        )}
      </div>
      <Pagination page={page} pagesCount={totalPages ?? 1} onPageChange={setPage} />
    </div>
  );
});

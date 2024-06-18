import { type FC, memo, useCallback } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import styles from './Pagination.module.scss';

interface IPaginationProps {
  page: number;
  pagesCount: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = memo((props) => {
  const { page, pagesCount, onPageChange } = props;

  const toPrevPage = useCallback(() => {
    onPageChange(page - 1);
  }, [onPageChange, page]);

  const toNextPage = useCallback(() => {
    onPageChange(page + 1);
  }, [onPageChange, page]);

  return (
    <div className={styles.pagination}>
      <button type='button' className={styles.button} onClick={toPrevPage} disabled={page === 1}>
        <GrPrevious className={styles.arrow} />
      </button>
      <p className={styles.page}>Страница #{page}</p>
      <button
        type='button'
        className={styles.button}
        onClick={toNextPage}
        disabled={page >= pagesCount}
      >
        <GrNext className={styles.arrow} />
      </button>
    </div>
  );
});

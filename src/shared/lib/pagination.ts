import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const getPage = (searchParams: URLSearchParams) => Number(searchParams.get('page')) || 1;

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = useMemo(() => getPage(searchParams), [searchParams]);

  const setPage = useCallback(
    (newPage: number) => {
      setSearchParams({ page: String(newPage) });
    },
    [setSearchParams],
  );

  return { page, setPage };
};

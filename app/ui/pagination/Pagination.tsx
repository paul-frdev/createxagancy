import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Container } from '../elements/Container';
import { PaginationArrow } from './PaginationArrow';
import { PaginationNumber } from './PaginationNumber';
import { generatePagination } from '@/app/lib/utils';
import React, { useEffect } from 'react';

type PaginationProps = {
  totalPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter()

  const currentPage = searchParams.get('page')

  useEffect(() => {
    if (currentPage === null) {
      params.set('page', '1')
      replace(`${pathname}?${params.toString()}`)
    }
  }, []);

  const createPageURL = (pageNumber: number | string) => {
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`
  }

  const allPages = generatePagination(+currentPage, totalPages);

  return (
    <Container className="flex justify-center gap-x-2 items-center">
      {totalPages >= 1 ? <PaginationArrow direction="left" href={createPageURL(+currentPage - 1)} isDisabled={+currentPage <= 1} /> : null}

      <div className="flex w-fit justify-center items-center gap-x-2">
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          return <PaginationNumber key={page} href={createPageURL(page)} page={page} position={position} isActive={+currentPage === page} />;
        })}
      </div>

      {totalPages >= 1 ? <PaginationArrow direction="right" href={createPageURL(+currentPage + 1)} isDisabled={+currentPage >= totalPages} /> : null}
    </Container>
  );
};

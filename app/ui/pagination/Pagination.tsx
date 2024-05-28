import { Container } from '../elements/Container';
import { PaginationArrow } from './PaginationArrow';
import { PaginationNumber } from './PaginationNumber';
import { generatePagination } from '@/app/lib/utils';
import React from 'react';

type PaginationProps = {
  createPageURL: (number: number | string) => string;
  totalPages: number;
  currentPage: string;
};

export const Pagination: React.FC<PaginationProps> = ({ createPageURL, totalPages, currentPage }) => {
  const allPages = generatePagination(+currentPage, totalPages);

  return (
    <Container className="flex justify-center gap-x-2 items-center">
      <PaginationArrow direction="left" href={createPageURL(+currentPage - 1)} isDisabled={+currentPage <= 1} />

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

      <PaginationArrow direction="right" href={createPageURL(+currentPage + 1)} isDisabled={+currentPage >= totalPages} />
    </Container>
  );
};

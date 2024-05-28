import { Button } from '../elements/Button';
import { cn } from '@/app/lib/utils';
import Link from 'next/link';
import React from 'react';

export const PaginationNumber = ({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) => {
  const className = cn(
    position === 'first' || (position === 'single' && 'rounded-l-md'),
    position === 'last' || (position === 'single' && 'rounded-r-md'),
    isActive && 'bg-transparent text-[1.5rem]',
    !isActive && position !== 'middle' && 'hover:bg-transparent',
    position === 'middle' && 'text-gray300'
  );
  return isActive || position === 'middle' ? (
    <div className={cn(`text-base text-primary font-lato font-black`, className)}>{page}</div>
  ) : (
    <Link href={href} className={cn(`text-base text-gray900 font-lato font-black`, className)}>
      {page}
    </Link>
  );
};

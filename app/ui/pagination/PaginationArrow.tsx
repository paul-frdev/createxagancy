import { cn } from '@/app/lib/utils';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import React from 'react';

export const PaginationArrow = ({ href, direction, isDisabled }: { href: string; direction: 'left' | 'right'; isDisabled?: boolean }) => {
  const className = cn(
    `flex h-12 w-12 text-orange transition duration-300 items-center justify-center rounded border`,
    direction === 'left' && 'mr-2 md:mr-4',
    direction === 'right' && 'ml-2 md:ml-4',
    !isDisabled && 'hover:text-white hover:bg-primary',
    isDisabled && 'pointer-events-none text-gray opacity-2'
  );
  const icon = direction === 'left' ? <ArrowBackIosNewIcon className="w-6" /> : <ArrowForwardIosIcon className="w-6" />;

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
};

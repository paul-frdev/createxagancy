import { cn } from '@/app/lib/utils';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';

type CategorySkeletonProps = {
  counts: any;
  maxWidth?: string;
  className?: string;
};
export const CategorySkeleton = ({ counts, maxWidth = '815px', className }: CategorySkeletonProps) => {
  return (
    <div className={cn(`flex w-full justify-between items-center`, className)} style={{ maxWidth: maxWidth }}>
      {Object.entries(counts).map(([key, _], index) => (
        <Skeleton animation="wave" key={index} className="w-fit px-[1em] py-[0.8em] h-[63px]">
          <div className="w-fit">{key}</div>
        </Skeleton>
      ))}
    </div>
  );
};

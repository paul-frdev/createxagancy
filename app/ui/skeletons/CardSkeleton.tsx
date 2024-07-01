import { cn } from '@/app/lib/utils';
import { Skeleton } from '@mui/material';
import React from 'react'

type SkeletonProps = {
  items: any[];
  className?: string;
  height?: number;
};
export const CardSkeleton = ({ items, className, height = 444 }: SkeletonProps) => {

  return (
    <div className={cn(`grid grid-cols-1 h-auto items-center sm:items-start sm:grid-cols-2 lg:grid-cols-3 gap-[1.875rem] my-10`, className)} >
      {items.map((_, index) => (
        <Skeleton height={height} width='100%' key={index} className='rounded w-full mx-auto sm:mx-0 max-w-[390px]' variant="rectangular" />
      ))}
    </div>
  )
}

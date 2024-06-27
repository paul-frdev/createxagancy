import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

type CategorySkeletonProps = {
  counts: any;
}
export const CategorySkeleton = ({ counts }: CategorySkeletonProps) => {
  return (
    <div className='flex w-full max-w-[815px] justify-between items-center'>
      {Object.values(counts).map((item, index) => (
        <Skeleton animation='wave' key={index} className='w-fit px-[2.5em] py-[0.8em] h-[58px]' />
      ))}
    </div>
  )
}

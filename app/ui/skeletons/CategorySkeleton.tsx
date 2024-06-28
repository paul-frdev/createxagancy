import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

type CategorySkeletonProps = {
  counts: any;
  maxWidth?: string
}
export const CategorySkeleton = ({ counts, maxWidth = '815px' }: CategorySkeletonProps) => {

  return (
    <div className='flex w-full justify-between items-center' style={{maxWidth: maxWidth}}>
      {Object.entries(counts).map(([key, _], index) => (
        <Skeleton animation='wave' key={index} className='w-fit px-[1em] py-[0.8em] h-[63px]' >
          <div className='w-fit'>{key}</div>
        </Skeleton>
      ))}
    </div>
  )
}

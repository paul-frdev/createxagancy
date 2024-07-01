import { Skeleton } from '@mui/material';
import React from 'react';

type SkeletonProps = {
  items: any[];
};

export const EventFlexSkeleton = ({ items }: SkeletonProps) => {
  return (
    <div className="w-full rounded mb-6">
      {items.map((_, index) => (
        <Skeleton animation="wave" key={index} sx={{ height: '180px', marginBottom: '20px' }} width="100%" className="rounded" variant="rectangular" />
      ))}
    </div>
  );
};

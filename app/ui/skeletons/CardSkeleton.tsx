import { CourseType } from '@/types/courses';
import { Skeleton } from '@mui/material';
import React from 'react'

type SkeletonProps = {
  allCourses: CourseType[];
};
export const CardSkeleton = ({ allCourses }: SkeletonProps) => {
  return (
    <div className='grid grid-cols-1 h-auto items-start  sm:grid-cols-2 lg:grid-cols-3 max-w-fit lg:max-w-full mx-auto  gap-[1.875rem]' >
      {allCourses.map((item, index) => (
        <Skeleton animation='wave' height={444} key={item.id} className=' rounded w-full max-w-[390px]'  variant="rectangular"/>
      ))}
    </div>
  )
}

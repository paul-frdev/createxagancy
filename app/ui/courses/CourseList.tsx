'use client';

import { useQueryParams } from '@/hooks/useQueryParams';
import { Search } from '../Search';
import { CoursePreviewCard } from '../courseId/CoursePreviewCard';
import { Button } from '../elements/Button';
import { CourseType } from '@/types/courses';
import SyncIcon from '@mui/icons-material/Sync';
import React, { useState } from 'react';

type CourseListProps = {
  allCourses: CourseType[];
};

export const CourseList: React.FC<CourseListProps> = ({ allCourses }) => {
  const [limit, setLimit] = useState(12);

  const { setQueryParams } = useQueryParams()

  const loadMore = () => {
    setLimit((prev) => (prev += 3));
    setQueryParams('limit', limit.toString());
  };

  return (
    <>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 lg:max-w-full mx-auto  gap-[1.875rem]">
        {allCourses ? allCourses.map((course: CourseType) => <CoursePreviewCard key={course.id} {...course} />) : null}
      </div>
      <div className="flex justify-center mt-12">
        <Button
          onClick={loadMore}
          variantCss="outline"
          sizeCss="lg"
          className="p-0 py-2 px-4 flex justify-center items-center gap-x-2 border-transparent bg-transparent hover:text-black text-black hover:bg-transparent hover:border hover:border-solid hover:border-black"
        >
          <SyncIcon />
          Load more
        </Button>
      </div>
    </>
  );
};

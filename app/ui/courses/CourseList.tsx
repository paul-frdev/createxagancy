'use client';

import { useQueryParams } from '@/hooks/useQueryParams';
import { Search } from '../Search';
import { CoursePreviewCard } from '../courseId/CoursePreviewCard';
import { Button } from '../elements/Button';
import { Container } from '../elements/Container';
import { CourseType } from '@/types/courses';
import SyncIcon from '@mui/icons-material/Sync';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type CourseListProps = {
  allCourses: CourseType[];
};

export const CourseList: React.FC<CourseListProps> = ({ allCourses }) => {
  const [limit, setLimit] = useState(12);

  const { setQueryParams } = useQueryParams()

  const handleSearchInputChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setQueryParams('query', term);
  }, 500);

  const loadMore = () => {
    setLimit((prev) => (prev += 3));
    setQueryParams('limit', limit.toString());
  };

  return (
    <>
      {/* <div className="flex flex-col gap-y-6 lg:flex-row justify-start gap-x-3 lg:justify-between items-start lg:items-center mt-[2rem] lg:mt-[4.375rem] mb-[3.75rem] ">
        <Search
          className="w-full max-w-[450px] lg:max-w-[350px] "
          label="Search course..."
          items={allCourses}
          handleSearchInputChange={handleSearchInputChange}
          searchParams={searchParams.get('query')?.toString()}
        />
      </div> */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 max-w-fit lg:max-w-full mx-auto  gap-[1.875rem]">
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

'use client';

import { categoryTitle } from '@/constants';
import { Categories } from '../Categories';
import { Search } from '../Search';
import { CoursePreviewCard } from '../courseId/CoursePreviewCard';
import { Button } from '../elements/Button';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Typography } from '../elements/Typography';
import { CourseType } from '@/types/courses';
import SyncIcon from '@mui/icons-material/Sync';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type CourseListProps = {
  allCourses: CourseType[];
  quantityCourses: { id: number; label: string }[];
};

export const CourseList: React.FC<CourseListProps> = ({ allCourses, quantityCourses }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [limit, setLimit] = useState(12);
  const [labelCounts, setLabelCounts] = useState<{ [label: string]: number }>({});

  /* set query params */
  const setQueryParams = (query: string, str: string) => {
    const params = new URLSearchParams(searchParams);
    if (str) {
      params.set(query, str);
    } else {
      params.delete(query);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearchInputChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setQueryParams('query', term);
  }, 500);

  const filterItems = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = event.target as HTMLButtonElement;
    setQueryParams('filter', element.value as any);
  };

  const loadMore = () => {
    setLimit((prev) => (prev += 3));
    setQueryParams('limit', limit.toString());
  };

  useEffect(() => {
    let counts: { [label: string]: number; id: number } = { id: 0 };
    quantityCourses.forEach((course, index) => {
      counts[course.label] = counts[course.label] ? counts[course.label] + 1 : 1;
      counts.id = index + 1;
    });
    setLabelCounts(counts);
  }, []);

  return (
    <section className="w-full my-[5rem]">
      <Container>
        <Typography className="text-center text-gray900">Enjoy your studying!</Typography>
        <Heading variant="h3" className="text-center text-[2.875rem] font-lato font-black leading-[130%] text-gray900">
          Our online courses
        </Heading>
        <div className="flex flex-col gap-y-6 lg:flex-row justify-start gap-x-3 lg:justify-between items-start lg:items-center mt-[2rem] lg:mt-[4.375rem] mb-[3.75rem] ">
          <Categories   categoryTitle={categoryTitle} quantityCourses={labelCounts.id} categories={labelCounts} filterItems={filterItems} className="overflow-hidden flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 justify-start sm:justify-between gap-x-2 sm:gap-x-0" />
          <Search
            className="w-full max-w-[450px] lg:max-w-[350px] "
            label="Search course..."
            items={allCourses}
            handleSearchInputChange={handleSearchInputChange}
            searchParams={searchParams.get('query')?.toString()}
          />
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 max-w-fit lg:max-w-full mx-auto  gap-[1.875rem]">
          {allCourses ? allCourses.map((course: CourseType) => <CoursePreviewCard key={course.id} {...course} />) : null}
        </div>
        {labelCounts.id >= limit ? (
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
        ) : null}
      </Container>
    </section>
  );
};

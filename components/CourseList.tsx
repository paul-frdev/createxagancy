'use client';

import { Categories } from './Categories';
import { CoursePreviewCard } from './CoursePreviewCard';
import { Search } from './common/Search';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { Heading } from './ui/Heading';
import { Typography } from './ui/Typography';
import { CourseType } from '@/types';
import SyncIcon from '@mui/icons-material/Sync';
import React, { useEffect, useState } from 'react';

type CourseListProps = {
  coursesPreview: CourseType[];
};

export const CourseList: React.FC<CourseListProps> = ({ coursesPreview }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<CourseType[]>(coursesPreview);
  const [visibleCourses, setVisibleCourses] = useState(9);
  const [labelCounts, setLabelCounts] = useState<{ [label: string]: number }>({});

  useEffect(() => {
    const counts: { [label: string]: number } = {};
    coursesPreview.forEach((course) => {
      counts[course.label] = counts[course.label] ? counts[course.label] + 1 : 1;
    });
    setLabelCounts(counts);
  }, [coursesPreview]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateSearchResults(value);
  };

  const updateSearchResults = (query: string) => {
    const filteredResults = coursesPreview.filter((course) =>
      Object.values(course).some((value) => typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(filteredResults);
  };

  const handleLoadMore = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 3);
  };

  const filterItems = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = event.target as HTMLButtonElement;

    if (element.value === 'All') {
      setSearchResults(coursesPreview);
    } else {
      const filteredResults = coursesPreview.filter((course) => course.label === element.value);
      setSearchResults(filteredResults);
    }
  };

  return (
    <section className="w-full my-[5rem]">
      <Container>
        <Typography className="text-center text-gray900">Enjoy your studying!</Typography>
        <Heading variant="h3" className="text-center text-[2.875rem] font-latoBlack font-[900] leading-[130%] text-gray900">
          Our online courses
        </Heading>
        <div className="flex flex-col gap-y-6 lg:flex-row justify-start lg:justify-between items-start lg:items-center mt-[2rem] lg:mt-[4.375rem] mb-[3.75rem] ">
          {/* <Categories
            items={coursesPreview}
            categories={labelCounts}
            filterItems={filterItems}
            className="overflow-hidden"
          /> */}
          <Search
            className="w-full max-w-[950px] lg:max-w-[350px] "
            label="Search course..."
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
            items={coursesPreview}
          />
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 max-w-fit lg:max-w-full mx-auto  gap-[1.875rem]">
          {(!searchResults.length ? coursesPreview : searchResults).slice(0, visibleCourses).map((course: CourseType) => (
            <CoursePreviewCard key={course.id} {...course} />
          ))}
        </div>
        {searchResults.length > visibleCourses ? (
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleLoadMore}
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

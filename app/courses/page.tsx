import { Metadata } from 'next';
import { countCourses, getAllCourses } from '../actions/getCourses';
import { getReviews } from '../actions/getReviews';
import { Certificate } from '../ui/Certificate';
import { Reviews } from '../ui/Reviews';
import { Subscribe } from '../ui/Subscribe';
import { CourseList } from '../ui/courses/CourseList';
import { Typography } from '../ui/elements/Typography';
import { Heading } from '../ui/elements/Heading';
import { Container } from '../ui/elements/Container';
import { Suspense } from 'react';
import { CategorySkeleton } from '../ui/skeletons/CategorySkeleton';
import CategoryClientPage from '../ui/courses/CategoryClientPage';
import { Search } from '../ui/Search';
import CourseListClient from '../ui/courses/CourseListClient';
import { CardSkeleton } from '../ui/skeletons/CardSkeleton';

export const metadata: Metadata = {
  title: 'Courses',
};

const CoursesPage = async ({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    page?: string;
    query?: string;
    limit?: number;
  };
}) => {
  const filter = searchParams?.filter || '';
  let limit = searchParams?.limit! || '9';
  const query = searchParams?.query || '';

  const allCourses = await getAllCourses(limit.toString(), filter, query);
  const reviews = await getReviews();
  const quantity = await countCourses()


  let counts: { [label: string]: number; id: number } = { id: 0 };
  quantity.forEach((course, index) => {
    counts[course.label] = counts[course.label] ? counts[course.label] + 1 : 1;
    counts.id = index + 1;
  });

  const isKeyCourseList = searchParams.filter || searchParams.query || searchParams.limit

  return (
    <>
      <section className="w-full my-[5rem]">
        <Typography className="text-center text-gray900">Enjoy your studying!</Typography>
        <Heading variant="h3" className="text-center text-[2.875rem] font-lato font-black leading-[130%] text-gray900">
          Our online courses
        </Heading>
        <Container>
          <div className="flex h-[47.60px] flex-col gap-y-6 lg:flex-row justify-start gap-x-3 lg:justify-between items-start lg:items-center mt-[2rem] lg:mt-[4.375rem] mb-[3.75rem]">
            <Suspense key={searchParams.filter} fallback={<CategorySkeleton counts={counts} />} >
              <CategoryClientPage />
            </Suspense>
            <Search
              className="w-full max-w-[450px] lg:max-w-[350px] "
              label="Search course..."
              items={allCourses}
            />
          </div>
          <Suspense key={isKeyCourseList} fallback={<CardSkeleton allCourses={allCourses} />}>
            <CourseListClient limit={limit!.toString()} filter={filter} query={query} />
          </Suspense>
        </Container>
      </section>
      <Reviews items={reviews} className="px-0 sm:px-4 pt-[5rem]" />
      <Certificate />
      <Subscribe />
    </>
  );
};

export default CoursesPage;

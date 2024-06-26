import { Metadata } from 'next';
import { countCourses, getAllCourses } from '../actions/getCourses';
import { getReviews } from '../actions/getReviews';
import { Certificate } from '../ui/Certificate';
import { Reviews } from '../ui/Reviews';
import { Subscribe } from '../ui/Subscribe';
import { CourseList } from '../ui/courses/CourseList';

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
  const quantity = await countCourses();

  return (
    <>
      <CourseList quantityCourses={quantity!} allCourses={allCourses} />
      <Reviews items={reviews} className="px-0 sm:px-4 pt-[5rem]" />
      <Certificate />
      <Subscribe />
    </>
  );
};

export default CoursesPage;

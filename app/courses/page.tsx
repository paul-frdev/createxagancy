
import { PrismaClient } from '@prisma/client';
import { getCourses } from '../actions/getCourses';
import { getReviews } from '../actions/getReviews';
import { CourseList } from '../ui/courses/CourseList';
import { Certificate } from '../ui/Certificate';
import { Reviews } from '../ui/reviews/Reviews';
import { Subscribe } from '../ui/Subscribe';

const prisma = new PrismaClient();


const CoursesPage = async () => {

  const courses = await getCourses()
  const reviews = await getReviews()

  return (
    <>
      <CourseList coursesPreview={courses} />
      <Reviews items={reviews} className="px-0 sm:px-4 pt-[5rem]" />
      <Certificate />
      <Subscribe />
    </>
  );
};

export default CoursesPage;

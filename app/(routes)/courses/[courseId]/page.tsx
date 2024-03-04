import courses from '@/app/courses.json';
import reviews from '@/app/reviews.json';
import { CourseItem } from '@/components/courseItemlanding/CourseItem';
import React from 'react';

const CoursePage = ({ params: { courseId } }: { params: { courseId: string } }) => {
  const courseItem = courses.find((course) => course.id.toString() === courseId);

  if (!courseItem) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <CourseItem reviews={reviews} course={courseItem} />
    </>
  );
};

export default CoursePage;

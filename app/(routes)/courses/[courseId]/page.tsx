import courses from '@/app/courses.json';
import reviews from '@/app/reviews.json';
import { CourseItem } from '@/components/courseItemlanding/CourseItem';
import { CourseType } from '@/types';
import React from 'react';

const CoursePage = ({ params: { courseId } }: { params: { courseId: string } }) => {
  const courseItem = courses.find((course) => course.id.toString() === courseId);

  const coursesPreview: CourseType[] = courses.map((course) => ({
    id: course.id,
    src: course.src,
    alt: course.alt,
    label: course.label,
    colorLabel: course.colorLabel,
    text: course.text,
    author: course.author,
    price: course.price[0].value || '',
  }));

  if (!courseItem) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <CourseItem courses={coursesPreview} reviews={reviews} course={courseItem} />
    </>
  );
};

export default CoursePage;

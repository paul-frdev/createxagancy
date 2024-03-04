import React from 'react';
import courses from '@/app/courses.json';
import { CourseItem } from '@/components/courseItemlanding/CourseItem';

const CoursePage = ({ params: { courseId } }: { params: { courseId: string } }) => {
  const courseItem = courses.find(course => course.id.toString() === courseId);
  
  if (!courseItem) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <CourseItem course={courseItem} />
    </>
  );
};

export default CoursePage;
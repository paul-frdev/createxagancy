import { getCourseById } from '@/app/actions/getCourseId';
import { getCourses } from '@/app/actions/getCourses';
import { getReviews } from '@/app/actions/getReviews';
import { CourseItem } from '@/app/ui/courseId/CourseItem';
import { ICourseId } from '@/types/courses';
import { notFound } from 'next/navigation';
import React from 'react';

const CoursePage = async ({ params }: { params: ICourseId }) => {
  const { courseId } = params;

  const [courseById, courses, reviews] = await Promise.all([getCourseById({ courseId }), getCourses(), getReviews()]);

  if (!courseById) {
    notFound();
  }

  return (
    <>
      <CourseItem courses={courses} reviews={reviews} courseById={courseById} />
    </>
  );
};

export default CoursePage;

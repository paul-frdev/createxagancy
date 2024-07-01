import { getCourseById } from '@/app/actions/getCourseId';
import { getAllCourses } from '@/app/actions/getCourses';
import { getReviews } from '@/app/actions/getReviews';
import { CourseItem } from '@/app/ui/courseId/CourseItem';
import { ICourseId } from '@/types/courses';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Course',
};

const CoursePage = async ({ params }: { params: ICourseId }) => {
  const { courseId } = params;

  const [courseById, courses, reviews] = await Promise.all([getCourseById({ courseId }), getAllCourses('6', '', ''), getReviews()]);

  return (
    <>
      <CourseItem courses={courses} reviews={reviews} courseById={courseById} />
    </>
  );
};

export default CoursePage;

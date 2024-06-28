import { getAllCourses } from '@/app/actions/getCourses';
import React from 'react'
import { CourseList } from './CourseList';

const CourseListClient = async ({ limit, filter, query }: { limit: string, filter: string, query: string }) => {
  const allCourses = await getAllCourses(limit.toString(), filter, query);

  return (
    <CourseList allCourses={allCourses} />
  )
}

export default CourseListClient
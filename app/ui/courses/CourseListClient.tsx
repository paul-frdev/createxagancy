import { getAllCourses } from '@/app/actions/getCourses';
import React from 'react'
import { CourseList } from './CourseList';
import { EmptyState } from '../EmptyState';

const CourseListClient = async ({ limit, filter, query }: { limit: string, filter: string, query: string }) => {
  const allCourses = await getAllCourses(limit.toString(), filter, query);

  return (
    <>
      {allCourses.length ? <CourseList allCourses={allCourses} /> : <EmptyState title='No Courses found' message='Try another filters' />}
    </>
  )
}

export default CourseListClient
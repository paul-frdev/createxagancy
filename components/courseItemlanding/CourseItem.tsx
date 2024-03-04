'use client'
import { CourseItem as CourseItemType, CourseType } from '@/types';
import React from 'react';
import { AboutCourse } from './AboutCourse';
import { CourseProcess } from './CourseProcess';
import { DiscountForm } from '../forms/DiscountForm';
import { BenefitsItem } from '../common/BenefitsItem';
import { benefitsCourseItem } from '@/constants';
import { YouWillLearn } from './YouWillLearn';

type CourseItemProps = {
  course: CourseItemType<CourseType>;
};
export const CourseItem: React.FC<CourseItemProps> = ({ course }) => {

  return (
    <>
      <AboutCourse course={course} />
      <CourseProcess />
      <DiscountForm />
      <BenefitsItem
        title='Who will benefit from the course:'
        subtitle='For whom?'
        list={benefitsCourseItem}
      />
      <YouWillLearn />
    </>
  )
};

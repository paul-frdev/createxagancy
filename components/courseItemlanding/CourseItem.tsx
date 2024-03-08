'use client';

import { BenefitsItem } from '../common/BenefitsItem';
import { Reviews } from '../common/Reviews';
import { DiscountForm } from '../forms/DiscountForm';
import { AboutCourse } from './AboutCourse';
import { CourseProcess } from './CourseProcess';
import { MayLikeCarousel } from './MayLikeCarousel';
import { RegisterCourse } from './RegisterCourse';
import { YouWillLearn } from './YouWillLearn';
import { benefitsCourseItem } from '@/constants';
import { CourseItem as CourseItemType, CourseType, ReviewsType } from '@/types';
import React from 'react';

type CourseItemProps = {
  course: CourseItemType<CourseType>;
  reviews: ReviewsType[];
  courses: CourseType[];
};
export const CourseItem: React.FC<CourseItemProps> = ({ course, reviews, courses }) => {
  return (
    <>
      <AboutCourse course={course} />
      <CourseProcess />
      <DiscountForm />
      <BenefitsItem title="Who will benefit from the course:" subtitle="For whom?" list={benefitsCourseItem} />
      <YouWillLearn />
      <Reviews items={reviews} className=" pt-24" />
      <RegisterCourse />
      <MayLikeCarousel courses={courses} />
    </>
  );
};

'use client';

import { BenefitsItem } from '../BenefitsItem';
import { Reviews } from '../Reviews';
import { DiscountForm } from '../forms/DiscountForm';
import { AboutCourse } from './AboutCourse';
import { CourseProcess } from './CourseProcess';
import { MayLikeCarousel } from './MayLikeCarousel';
import { RegisterCourse } from './RegisterCourse';
import { YouWillLearn } from './YouWillLearn';
import { benefitsCourseItem } from '@/constants';
import { ReviewsType } from '@/types';
import { CourseItem as CourseItemType, CourseType } from '@/types/courses';
import React from 'react';

type CourseItemProps = {
  courseById: CourseType;
  reviews: ReviewsType[];
  courses: CourseType[];
};
export const CourseItem: React.FC<CourseItemProps> = ({ courseById, reviews, courses }) => {
  return (
    <>
      <AboutCourse course={courseById} />
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

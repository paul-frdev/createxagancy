import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Image } from '../ui/Image';
import { CourseType } from '@/types';
import React from 'react';

type CoursesProps = {
  courses: CourseType[];
};

const CoursePreviewCard = ({ id, src, alt, label, colorLabel, text, price, author }: CourseType) => {
  return (
    <div className="flex flex-col xsm:flex-row justify-start xsm:gap-x-[2rem] gap-y-8 items-center h-auto xsm:h-[214px]">
      <div className="bg-secondary xsm:bg-white flex justify-center items-center h-[214px] w-full xsm:max-w-[214px]">
        <Image src={src} alt={alt} className="max-w-[214px] h-[216px] rounded-tl rounded-bl" />
      </div>
      <div className="flex flex-col justify-center xsm:justify-start items-center p-2 xsm:p-0 xsm:items-start gap-y-[1.25rem]">
        <span className=" text-sm font-latoRegular font-[400] text-white leading-[150%] py-[3px] px-2 rounded" style={{ backgroundColor: colorLabel }}>
          {label}
        </span>
        <p className="text-[1.25rem] text-center xsm:text-left font-latoBold font-[700] leading-[150%]">{text}</p>
        <div className="flex justify-start items-start gap-x-[4px]">
          <span className="text-[1.125rem] font-latoBold font-[700] leading-[150%] text-danger">{price.slice(0, 4)}</span>
          <span className="text-gray">|</span>
          <span className="text-[1.125rem] font-latoRegular font-[400] leading-[150%] text-gray">{author}</span>
        </div>
      </div>
    </div>
  );
};

export const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <section className="mb-[8rem] w-full">
      <Container>
        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 justify-center sm:justify-between items-center mb-[3.75rem]">
          <div>
            <p className=" text-center sm:text-left text-[0.8rem] md:text-base font-latoBold font-[700] uppercase tracking-[1px] leading-[150%] mb-[0.5rem]">Ready to learn?</p>
            <Heading variant="h4" className=" text-center xsm:text-left text-[2.2rem] md:text-[2.875rem] font-latoBold font-[900]">
              Featured Courses
            </Heading>
          </div>
          <Button variantCss="outline" sizeCss="lg">
            View all courses
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.875rem]">
          {courses.slice(0, 6).map((course) => (
            <Card
              key={course.id}
              classname=" cursor-pointer hover:shadow-cardHover p-0 rounded shadow-card  max-w-[600px] w-full lg:max-w-[603px] border border-solid border-gray min-h-[214px] mx-auto lg:mx-0"
            >
              <CoursePreviewCard {...course} />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

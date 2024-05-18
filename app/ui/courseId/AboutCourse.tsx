import { CourseItem, CourseType } from '@/types/courses';
import { Card } from '../elements/Card';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import { Outline } from './Outline';
import { SocialLinks } from './SocialLinks';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

type AboutCourseProps = {
  course: CourseType;
};
export const AboutCourse: React.FC<AboutCourseProps> = ({ course }) => {

  console.log(course);

  return (
    <section className="w-full">
      <div className="w-full bg-orange02 py-24">
        <Container className="w-full max-w-[1060px] px-4 mx-auto">
          <Typography className="text-primary text-center">course</Typography>
          <Heading variant="h3" className="text-center text-[2rem] md:text-[2.875rem]">
            User Experience. Principles of Human-Centered Design
          </Heading>
        </Container>
      </div>
      <Container className="my-[3.75rem]">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-between items-center mb-[3rem] lg:mb-[10rem]">
          <div className="flex flex-col justify-start items-start w-full lg:max-w-[600px] mr-4 px-2">
            <div className="mb-[3rem]">
              <Heading variant="h4" className="text-center lg:text-left text-[3rem] md:text-[3.75rem] mb-[2.5rem]">
                About the course
              </Heading>
              <Typography className=" normal-case text-base text-center lg:text-left text-gray800 font-lato font-normal mb-0">{course.description}</Typography>
            </div>
            <div className=" mx-auto">
              <Heading variant="h5" className=" text-center lg:text-leftfont-lato font-bold text-[1.75rem] mb-6">
                You will learn:
              </Heading>
              {course.study?.map((item) => (
                <div className="flex justify-start items-center gap-x-2 mb-1" key={item}>
                  <CheckCircleOutlineIcon className="text-orange w-4 h-4" />
                  <Typography className="mb-0 normal-case text-base text-gray800 font-lato font-normal">{item}</Typography>
                </div>
              ))}
            </div>
          </div>
          <Card classname=" max-w-[700px] lg:max-w-[495px] w-full py-[2.5rem] px-8 border border-solid border-light shadow-xl">
            <Outline className="mb-14" title="Dates" date={course.dates![0].value} desc={course.dates![1].value} />
            <Outline className="mb-14" title="Duration" date={course.durations![0].value} desc={course.durations![1].value} />
            <Outline title="Price" date={course.price[0].value} desc={course.price[1].value} />
          </Card>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <Image src={course.src} alt="person" className="w-full max-w-[458px] h-auto mx-auto" />
          <div className="w-full lg:max-w-[600px] pt-4 lg:ml-4">
            <Heading variant="h5" className="text-base text-center lg:text-left font-lato font-bold uppercase tracking-[1px] mb-2">
              Course curator
            </Heading>
            <Heading variant="h5" className="text-[2.875rem] text-center lg:text-left mb-4">
              {course.author.slice(2)}
            </Heading>
            <Typography className=" normal-case text-center lg:text-left text-rgbGray text-[1.25rem] font-lato font-normal leading-[150%] mb-8">{course.position}</Typography>
            <div className="mb-8 flex flex-row lg:justify-start justify-center items-center lg:items-start lg:flex-col gap-x-1">
              <div className="flex justify-start items-center gap-x-0 xsm:gap-x-2 mb-1">
                <StarIcon className="text-primary" />
                <Typography className="mb-0 normal-case text-base text-gray700 text-nowrap">{course.rate}</Typography>
              </div>
              <div className="flex justify-start items-center gap-x-0 xsm:gap-x-2 mb-1">
                <PlayCircleOutlineIcon className="text-primary" />
                <Typography className="mb-0 normal-case text-base text-gray700 text-nowrap">{course.quantityCourses}</Typography>
              </div>
              <div className="flex justify-start items-center gap-x-0 xsm:gap-x-2">
                <PersonOutlineIcon className="text-primary" />
                <Typography className="mb-0 normal-case text-base text-gray700 text-nowrap">{course.quantityStudents}</Typography>
              </div>
            </div>
            <Typography className=" normal-case text-center lg:text-left font-lato font-normal text-rgbGray mb-10">{course.aboutAuthor}</Typography>
            <SocialLinks className="mx-auto lg:ml-0 lg:mr-auto" socialLinks={course.socialLinks as any} />
          </div>
        </div>
      </Container>
    </section>
  );
};

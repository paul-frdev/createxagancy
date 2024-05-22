import { Head } from '../Head';
import { Button } from '../elements/Button';
import { Container } from '../elements/Container';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import { aboutCourses } from '@/constants';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

export const Teach = () => {
  return (
    <section className=" w-full my-5 xmd:my-10">
      <Container className="py-5 xmd:py-10">
        <Head text="our main directions" title="What do we teach" />
        <div className=" grid w-full max-w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-y-6 gap-x-4">
          {aboutCourses.map((course) => (
            <div key={course.id} className=" w-full max-w-[390px] rounded border-solid border border-gray300 hover:shadow-shadowSmall transition-all duration-300">
              <Image src={course.src} alt={course.label} className=" w-full mb-4" />
              <div className=" flex flex-col justify-start items-start p-6">
                <span className="px-[5px] py-[2px] rounded text-white font-lato font-bold mb-6" style={{ backgroundColor: course.color }}>
                  {course.label}
                </span>
                <Typography className=" normal-case text-gray700 font-lato font-normal mb-6">{course.text}</Typography>
                <Button
                  icon={<ArrowForwardIcon className="order-2 ml-2 pt-[1px]" />}
                  href="/courses"
                  variantCss="link"
                  className=" text-gray900 font-lato font-bold hover:bg-transparent hover:no-underline hover:text-primary p-0 justify-start"
                >
                  Check courses
                </Button>
              </div>
            </div>
          ))}
          <div className=" w-full h-[448px] max-w-[390px] bg-gray200 rounded border-solid border border-gray300 flex flex-col justify-center items-center p-6">
            <div className="">
              <Typography className=" w-full max-w-[242px] normal-case text-gray800 font-lato font-bold text-center">New studying program coming soon...</Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

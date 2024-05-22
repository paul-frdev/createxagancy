import { Button } from '../elements/Button';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import React from 'react';

export const AboutUs = () => {
  return (
    <section className="my-5 xmd:my-10 w-full">
      <Container className="flex flex-col gap-y-12 md:gap-y-0 md:flex-row justify-between items-center py-5 xmd:py-10">
        <div className="w-full max-w-[600px] order-2 md:order-1">
          <Typography className=" font-bold text-center md:text-left">About us</Typography>
          <Heading className="text-center md:text-left text-[2.3rem] mb-[2.875rem] xmd:text-[2.875rem]">Createx Online School</Heading>
          <Typography className="text-center md:text-left text-base sm:text-[1.25rem] normal-case font-bold mb-2">
            Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.
          </Typography>
          <Typography className=" text-justify xsm:text-center md:text-left normal-case leading-[160%] mb-10">
            We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new
            specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.
          </Typography>
          <div className=" flex justify-center md:justify-start gap-x-6">
            <Button className='text-[0.85rem] xsm:text-base' variantCss="outline">Explore events</Button>
            <Button className='text-[0.85rem] xsm:text-base'>Browse courses</Button>
          </div>
        </div>
        <div className='order-1 md:order-2'>
          <Image src="/svg/about.svg" className=" w-full max-w-[465px] h-full" alt="about-us" />
        </div>
      </Container>
    </section>
  );
};

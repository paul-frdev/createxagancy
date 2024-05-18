import { Button } from '../elements/Button';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import React from 'react';

export const AboutUs = () => {
  return (
    <section className="my-20 w-full">
      <Container className="flex justify-between items-center py-10">
        <div className="w-full max-w-[600px]">
          <Typography className=" font-bold">About us</Typography>
          <Heading className="text-[2.875rem] mb-[2.875rem]">Createx Online School</Heading>
          <Typography className="text-[1.25rem] normal-case font-bold mb-2">
            Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.
          </Typography>
          <Typography className=" normal-case leading-[160%] mb-10">
            We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new
            specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.
          </Typography>
          <div className=" flex justify-start gap-x-6">
            <Button variantCss="outline">Explore events</Button>
            <Button>Browse courses</Button>
          </div>
        </div>
        <div>
          <Image src="/svg/about.svg" className=" w-full max-w-[465px] h-full" alt="about-us" />
        </div>
      </Container>
    </section>
  );
};

import { SubscribeForm } from '../forms/SubscribeForm';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Typography } from '../ui/Typography';
import React from 'react';

export const Subscribe = () => {
  return (
    <section className="w-full bg-orange02 relative pt-[3.5rem] sm:pt-24 pb-[16rem]">
      <span className=" bg-illustration1 absolute bottom-0 xsm:left-[115px] sm:left-0 w-[320px] xsm:w-[354px] h-[230px] xsm:h-[246px] bg-no-repeat bg-cover" />
      <span className=" hidden  sm:block bg-illustration1 absolute bottom-0 right-0 w-[354px] h-[246px] bg-no-repeat bg-cover" />
      <Container>
        <Typography className="text-center mb-2">Don’t miss anything</Typography>
        <Heading variant="h3" className="mx-auto max-w-[810px] text-center text-[2rem] xsm:text-[2.2rem] md:text-[2.875rem] mb-10">
          Subscribe to the Createx School announcements
        </Heading>
        <SubscribeForm />
      </Container>
    </section>
  );
};

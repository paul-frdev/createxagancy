import { Container } from '../elements/Container';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import { RegisterForm } from '../forms/RegisterForm';
import React from 'react';

export const Request = () => {
  return (
    <section className="my-5 xmd:my-10 w-full">
      <Container className="py-5 xmd:py-10 flex justify-between items-center">
        <div className="flex flex-col justify-start items-start gap-y-4">
          <RegisterForm classesBtn="hover:bg-transparent text-base" title="Leave a request" text="Don’t miss the event" buttonLabel="Join the event" />
          <Typography className=" normal-case text-base text-gray800 leading-[160%]">* You will receive a link to the online lecture in an email after registration.</Typography>
        </div>
        <Image src="/event/request.svg" alt="request" className="w-full max-w-[600px] h-full" />
      </Container>
    </section>
  );
};

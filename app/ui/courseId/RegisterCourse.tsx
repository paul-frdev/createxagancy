import { Container } from '../elements/Container';
import { Image } from '../elements/Image';
import { RegisterForm } from '../forms/RegisterForm';
import register from '/public/courses/register.svg';
import React from 'react';

export const RegisterCourse = () => {
  return (
    <section className="w-full  bg-gray200">
      <Container className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 justify-between items-center  py-12 lg:py-24 ">
        <div className="w-full  max-w-[550px] order-2">
          <Image className="w-full max-w-[550px]" src={register} alt="learn" />
        </div>
        <RegisterForm className="order-1" classesBtn="hover:bg-transparent" />
      </Container>
    </section>
  );
};

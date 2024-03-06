import { RegisterForm } from '../forms/RegisterForm';
import { Container } from '../ui/Container';
import { Image } from '../ui/Image';
import register from '/public/courses/register.svg';
import React from 'react';

export const RegisterCourse = () => {
  return (
    <section className="w-full  bg-gray200">
      <Container className=" flex justify-between items-center py-24 ">
        <div className="w-full  max-w-[550px]">
          <Image className="w-full max-w-[550px]" src={register} alt="learn" />
        </div>
        <RegisterForm />
      </Container>
    </section>
  );
};

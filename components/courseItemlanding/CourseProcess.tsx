import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Typography } from '../ui/Typography';
import React from 'react';

export const CourseProcess = () => {
  return (
    <section className="w-full mt-8 mb-32">
      <Container>
        <Typography className="text-center">Main steps</Typography>
        <Heading variant="h3" className="text-center text-[2rem] md:text-[2.875rem] mb-[3.75rem]">
          Online learning process
        </Heading>
        <div className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row justify-between gap-x-4 items-center w-full">
          {/* remove this code to it's own component  */}
          <div className="flex lg:block w-full max-w-[285px] h-auto">
            <div className="w-full flex justify-start mb-4 relative h-[90px]">
              <span className="absolute top-[124px] lg:top-1/2 rotate-90 lg:rotate-0 right-[22px] lg:right-0 border border-dashed border-gray400 w-full max-w-[210px]" />
              <span className="flex justify-center items-start lg:items-center text-[2.875rem] text-gray400 font-latoBold font-[900] text-left">01</span>
            </div>
            <div className="flex flex-col">
              <p className=" text-xl text-gray900 mb-2">Watching online video lectures</p>
              <p className=" text-gray700 text-base leading-[160%] font-latoRegular font-[400]">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
              </p>
            </div>
          </div>
          <div className="flex lg:block w-full max-w-[285px] h-auto">
            <div className="w-full flex justify-start mb-4 relative h-[90px]">
              <span className="absolute top-[124px] lg:top-1/2 rotate-90 lg:rotate-0 right-[22px] lg:right-0 border border-dashed border-gray400 w-full max-w-[210px]" />
              <span className="flex justify-center items-start lg:items-center text-[2.875rem] text-gray400 font-latoBold font-[900] text-left">02</span>
            </div>
            <div className="flex flex-col">
              <p className=" text-xl text-gray900 mb-2">Passing test</p>
              <p className=" text-gray700 text-base leading-[160%] font-latoRegular font-[400]">
                Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.
              </p>
            </div>
          </div>
          <div className="flex lg:block w-full max-w-[285px] h-auto">
            <div className="w-full flex justify-start mb-4 relative h-[90px]">
              <span className="absolute top-[124px] lg:top-1/2 rotate-90 lg:rotate-0 right-[22px] lg:right-0 border border-dashed border-gray400 w-full max-w-[210px]" />
              <span className="flex justify-center items-start lg:items-center text-[2.875rem] text-gray400 font-latoBold font-[900] text-left">03</span>
            </div>
            <div className="flex flex-col">
              <p className=" text-xl text-gray900 mb-2">Curator’s feedback</p>
              <p className=" text-gray700 text-base leading-[160%] font-latoRegular font-[400]">
                Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.
              </p>
            </div>
          </div>
          <div className="flex lg:block w-full max-w-[285px] h-auto">
            <div className="w-full flex justify-start mb-4 h-[84px]">
              <span className="text-[2.875rem] w-[68px] lg:w-[84px] h-[68px] lg:h-[84px] text-orange bg-primary bg-opacity-[0.12] rounded-full font-latoBold font-[900] flex justify-center items-center animation-pulse -ml-3 lg:-ml-0 mt-3 lg:mt-0">
                04
              </span>
            </div>
            <div className="flex flex-col">
              <p className=" text-xl text-gray900 mb-2">Corrections if needed</p>
              <p className=" text-gray700 text-base leading-[160%] font-latoRegular font-[400]">
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

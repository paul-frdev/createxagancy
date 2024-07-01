import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Typography } from '../elements/Typography';
import { cn } from '@/app/lib/utils';
import React from 'react';

const items = [
  {
    id: 1,
    number: '01',
    title: 'Watching online video lectures',
    text: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
  },
  {
    id: 2,
    number: '02',
    title: 'Passing test',
    text: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.',
  },
  {
    id: 3,
    number: '03',
    title: 'Curator’s feedback',
    text: 'Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.',
  },
  {
    id: 4,
    number: '04',
    title: 'Corrections if needed',
    text: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
  },
];
export const CourseProcess = () => {
  return (
    <section className="w-full mt-8 mb-12 lg:mb-24">
      <Container>
        <Typography className="text-center">Main steps</Typography>
        <Heading variant="h3" className="text-center text-[2rem] md:text-[2.875rem] mb-[3.75rem]">
          Online learning process
        </Heading>
        <div className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row justify-between gap-x-4 items-center w-full">
          {items.map((item) => (
            <div key={item.id} className="flex lg:block w-full max-w-[285px] h-[161px] lg:h-[218px]">
              <div className="w-full flex justify-start mb-4 relative h-[90px]">
                {item.id !== 4 ? (
                  <span className="absolute top-[124px] lg:top-1/2 rotate-90 lg:rotate-0 right-[16px] lg:right-0 border border-dashed border-gray400 w-full max-w-[210px]" />
                ) : null}
                <span
                  className={cn(
                    `flex justify-center items-start lg:items-center text-[2.875rem] text-gray400 text-left font-lato font-bold`,
                    item.id === 4
                      ? 'w-[68px] lg:w-[84px] h-[68px] lg:h-[84px] text-orange bg-primary bg-opacity-[0.12] rounded-full animation-pulse -ml-3 lg:-ml-0 mt-3 lg:mt-0'
                      : ''
                  )}
                >
                  {item.number}
                </span>
              </div>
              <div className="flex flex-col">
                <p className=" text-xl text-gray900 mb-2">{item.title}</p>
                <p className=" text-gray700 text-base leading-[160%] font-latoRegular font-[400]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

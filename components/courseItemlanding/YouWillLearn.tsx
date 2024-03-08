import { MainAccordion } from '../common/MainAccordion';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Image } from '../ui/Image';
import { Typography } from '../ui/Typography';
import learn from '/public/courses/learn.svg';
import { courseLearnList } from '@/constants';
import React from 'react';

export const YouWillLearn = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-between items-center mb-16 lg:mb-32">
      <div className="w-full max-w-[600px]">
        <Typography className="text-center lg:text-left">Course program</Typography>
        <Heading className="text-center lg:text-left text-[2rem] md:text-[2.875rem] mb-10">What will you learn</Heading>
        <MainAccordion items={courseLearnList} />
      </div>
      <div className="w-full hidden lg:block  max-w-[495px]">
        <Image className="w-full max-w-[495px]" src={learn} alt="learn" />
      </div>
    </Container>
  );
};

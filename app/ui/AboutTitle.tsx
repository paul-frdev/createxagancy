import { Container } from './elements/Container';
import { Heading } from './elements/Heading';
import { Typography } from './elements/Typography';
import React from 'react';

type AboutTitleProps = {
  text: string;
  title: string;
};
export const AboutTitle: React.FC<AboutTitleProps> = ({ title, text }) => {
  return (
    <div className="w-full bg-orange02 py-24">
      <Container className="w-full max-w-[1060px] px-4 mx-auto">
        <Typography className="text-primary font-bold text-center">{text}</Typography>
        <Heading variant="h3" className="text-center text-[2rem] md:text-[2.875rem]">
          {title}
        </Heading>
      </Container>
    </div>
  );
};

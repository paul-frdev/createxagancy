import { Heading } from './elements/Heading';
import { Typography } from './elements/Typography';
import React from 'react';

type OutlineProps = {
  title: string;
  date: string;
  desc: string;
  className?: string;
};
export const Outline: React.FC<OutlineProps> = ({ title, date, desc, className }) => {
  return (
    <div className={className}>
      <Heading variant="h5" className="text-sm font-latoBold font-[700] tranking-[1px] uppercase">
        {title}
      </Heading>
      <Typography className=" normal-case text-primary text-[1.5rem] font-lato font-bold leading-[130%] mb-2">{date}</Typography>
      <Typography className=" normal-case font-lato font-normal text-base leading-[160%] text-gray700">{desc}</Typography>
    </div>
  );
};

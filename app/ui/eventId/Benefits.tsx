import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Typography } from '../elements/Typography';
import { benefitsEvent } from '@/constants';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';

export const Benefits = () => {
  return (
    <section className="my-5 xmd:my-10 w-full">
      <Container className="py-5 xmd:py-10 flex justify-between items-start">
        <div className=" w-full max-w-[495px]">
          <Typography>For whom?</Typography>
          <Heading variant="h4">Who will benefit from the event:</Heading>
        </div>
        <div className=" w-full max-w-[600px]">
          {benefitsEvent.map((item) => (
            <div key={item.id} className=" flex justify-start items-start gap-x-4">
              <span className="pt-[6px]">
                <CheckCircleOutlineIcon className=" text-primary w-[20px] h-[20px]" />
              </span>
              <Typography className=" font-bold normal-case text-[1.25rem] text-gray700">{item.text}</Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

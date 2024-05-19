import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import { cn } from '@/app/lib/utils';
import { studyList } from '@/constants';
import { Container } from '@mui/material';
import React from 'react';

export const Study = () => {
  return (
    <section className=" w-full my-10">
      <Container className="flex justify-between items-end py-10">
        <div>
          <Typography className="text-gray900">Studying process</Typography>
          <Heading variant="h5" className="text-[2.875rem] mb-10">
            That’s how we do it
          </Heading>
          <div className="flex flex-col justify-start items-start w-full max-w-[490px]">
            {studyList.map((item) => (
              <div key={item.id} className="pl-10 relative">
                <span className={cn(`w-[1px] absolute top-[22px] left-0 bg-gray600 opacity-[0.5]`, item.id === 4 ? 'h-[105px]' : 'h-[166px]')} />
                <span className=" w-[8px] absolute top-[10px] -left-[3.5px] h-[8px] rounded-full bg-red" />
                <span className=" text-[0.75rem] text-gray700 font-lato font-black mb-2 uppercase">step {item.step}</span>
                <Typography className=" normal-case text-gray900 text-[1.25rem] font-lato font-bold mb-6">{item.title}</Typography>
                <Typography className=" normal-case text-gray700 text-[1rem] font-lato font-normal mb-8">{item.text}</Typography>
              </div>
            ))}
          </div>
        </div>
        <Image className=" w-full max-w-[525px] h-full pb-10" src="/svg/study.svg" alt="study" />
      </Container>
    </section>
  );
};

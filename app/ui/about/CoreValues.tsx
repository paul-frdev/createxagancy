import { Head } from '../Head';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import { cn } from '@/app/lib/utils';
import { coreValues } from '@/constants';
import React from 'react';

export const CoreValues = () => {
  return (
    <section className=" w-full my-10 py-10">
      <Container className="py-10">
        <Head text=" We always stand for" title="Our core values" />
        <div className=" flex justify-between items-start w-full">
          {coreValues.map((value) => {
            return (
              <React.Fragment key={value.id}>
                <div className="w-full max-w-[280px] flex flex-col justify-start items-center">
                  <Image src={value.src} alt={value.title} className="w-[48px] h-[48px] mb-8" />
                  <Heading variant="h5" className=" font-bold text-[1.25rem] mb-2">
                    {value.title}
                  </Heading>
                  <Typography className=" normal-case font-normal text-gray700 text-center text-base">{value.text}</Typography>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

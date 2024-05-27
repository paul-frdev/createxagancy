import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { SubscribeForm } from '../forms/SubscribeForm';
import React from 'react';

export const Subscribe = () => {
  return (
    <section className="my-5 xmd:my-10 w-full">
      <Container className=" rounded px-28 py-14 xmd:py-16 flex justify-between items-center bg-[linear-gradient(45deg,_rgba(255,63,58,0.2)_0%,_rgba(247,94,5,0.2)_100%)]">
        <Image src="/event/subscribe.svg" alt="subscribe" className=" w-full max-w-[308px] h-full" />
        <div className="flex flex-col justify-start items-start w-full max-w-[600px] gap-y-6">
          <Heading className="text-[2rem]" variant="h3">
            Don’t want to miss the best events? Subscribe to our newsletter!
          </Heading>
          <SubscribeForm isCheckBox={true} className="mx-0" buttonClasses="w-full" inputStyles={{ width: '100%' }} classInput="max-w-full" />
        </div>
      </Container>
    </section>
  );
};

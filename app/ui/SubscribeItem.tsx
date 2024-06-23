import { cn } from '../lib/utils';
import { Container } from './elements/Container';
import { Heading } from './elements/Heading';
import { Image } from './elements/Image';
import { SubscribeForm } from './forms/SubscribeForm';
import React from 'react';

type SubscribeItemProps = {
  src: string;
  from?: string;
  to?: string;
  title?: string;
  maxWidth?: string
  color?: string;
  className?: string
}
export const SubscribeItem: React.FC<SubscribeItemProps> = ({ className, color = 'bg-transparent', maxWidth = 'max-w-[506px]', src, title = 'Want to get the best articles weekly? Subscribe to our newsletter!', to, from }) => {
  return (
    <section className={`w-full ${color}`}>
      <Container className={cn(`bg-gradient-to-r from-${from} to-${to} rounded py-14 px-0 xmd:py-16 flex justify-between items-center`, className)}>
        <Image src={src} alt="subscribe" className={` w-full ${maxWidth} h-full`} />
        <div className="flex flex-col justify-center px-2 sm:px-0  lg:justify-start items-center lg:items-start w-full max-w-[600px] gap-y-6">
          <Heading className=" text-[1.6rem] xsm:text-[2rem] text-center lg:text-left" variant="h3">
            {title}
          </Heading>
          <SubscribeForm isCheckBox={true} className="mx-0" buttonClasses="w-full" inputStyles={{ width: '100%' }} classInput="max-w-full" />
        </div>
      </Container>
    </section>
  );
};

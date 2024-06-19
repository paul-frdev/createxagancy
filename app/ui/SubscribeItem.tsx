import { cn } from '../lib/utils';
import { Container } from './elements/Container';
import { Heading } from './elements/Heading';
import { Image } from './elements/Image';
import { SubscribeForm } from './forms/SubscribeForm';
import React from 'react';

type SubscribeItemProps = {
  src: string;
  bg?: string;
  title?: string;
  maxWidth?: string
  color?: string;
  className?: string
}
export const SubscribeItem: React.FC<SubscribeItemProps> = ({ className, color = 'bg-transparent', maxWidth = 'max-w-[506px]', src, title = 'Want to get the best articles weekly? Subscribe to our newsletter!', bg = '[linear-gradient(45deg,_rgba(255,63,58,0.2)_0%,_rgba(247,94,5,0.2)_100%)]' }) => {
  return (
    <section className={`w-full ${color}`}>
      <Container className={cn(`rounded px-28 py-14 px-0 xmd:py-16 flex justify-between items-center bg-${bg}`, className)}>
        <Image src={src} alt="subscribe" className={` w-full ${maxWidth} h-full`} />
        <div className="flex flex-col justify-start items-start w-full max-w-[600px] gap-y-6">
          <Heading className="text-[2rem]" variant="h3">
            {title}
          </Heading>
          <SubscribeForm isCheckBox={true} className="mx-0" buttonClasses="w-full" inputStyles={{ width: '100%' }} classInput="max-w-full" />
        </div>
      </Container>
    </section>
  );
};

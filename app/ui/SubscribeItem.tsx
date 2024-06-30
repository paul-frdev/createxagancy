'use client'

import { useParams, usePathname } from 'next/navigation';
import { cn } from '../lib/utils';
import { Container } from './elements/Container';
import { Heading } from './elements/Heading';
import { Image } from './elements/Image';
import { SubscribeForm } from './forms/SubscribeForm';
import React from 'react';

type SubscribeItemProps = {
  src: string;
  title?: string;
  maxWidth?: string
  color?: string;
  className?: string
}
export const SubscribeItem: React.FC<SubscribeItemProps> = ({ className, color = 'bg-transparent', maxWidth = 'max-w-[506px]', src, title = 'Want to get the best articles weekly? Subscribe to our newsletter!' }) => {
  const pathname = usePathname();
  const params = useParams();

  const isEventId = pathname === `/events/${params.eventId}`

  return (
    <section className={`w-full ${color}`}>
      <Container className={cn(`rounded py-8 px-0 xmd:py-16 flex justify-between items-center`, isEventId ? 'bg-gradient-to-r from-[rgba(255,63,58,.2)_0%] to-[rgba(247,94,5,.2)_100%]' : '', className)}>
        <Image src={src} alt="subscribe" className={cn(` w-full ${maxWidth} h-full`, isEventId ? 'hidden lg:block' : 'block')} />
        <div className="flex flex-col justify-center px-2 sm:px-0  lg:justify-start items-center lg:items-start w-full max-w-[600px] gap-y-6">
          <Heading className=" text-[1.6rem] xsm:text-[2rem] text-center lg:text-left" variant="h3">
            {title}
          </Heading>
          <SubscribeForm isCheckBox={true} className="mx-0" buttonClasses="w-full hover:bg-transparent" inputStyles={{ width: '100%' }} classInput="max-w-full" />
        </div>
      </Container>
    </section>
  );
};

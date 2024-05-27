'use client';

import { Button } from '../elements/Button';
import { Heading } from '../elements/Heading';
import { cn } from '@/app/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import { usePathname } from 'next/navigation';
import React from 'react';

type EventItemProps = {
  event: WorkshopPreview;
  style: string;
  className?: string;
};
export const EventItem: React.FC<EventItemProps> = ({ event, style, className }) => {
  const pathname = usePathname();

  const day = event.date.split('').splice(0, 2);
  const month = event.date.split('').splice(2);
  const time = `${event.time[0]} - ${event.time[event.time.length - 1]}`;

  const isEventId = pathname === `/events/${event.id}`;

  return (
    <div
      className={cn(
        `w-full h-auto bg-white rounded mb-6 py-4  px-2  gap-x-[1.5rem] border hover:shadow-eventShadow border-solid border-gray300 transition duration-300`,
        style === 'flex' ? 'flex justify-between items-center flex-row py-4  px-6 last:mb-10' : `flex justify-start items-start flex-col max-w-[390px] mb-0 p-6`
      )}
    >
      <div className={cn(`flex justify-start gap-x-[1.25rem]`, className, style === 'flex' ? 'flex-row' : 'flex-col')}>
        <span className="text-[3rem] text-primary font-lato font-black">{day}</span>
        <div className="flex flex-col justify-start items-start gap-y-[5px]">
          <span className=" text-[1.25rem] text-gray900 font-lato font-bold leading-[150%]">{month}</span>
          <span className="text-base font-latoRegular font-[400] leading-[160%] text-nowrap">{time}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start w-full my-4">
        <Heading className="text-left text-[1.125rem] leading-[150%] mb-4 ">{isEventId ? event.title.slice(0, 80) + '...' : event.title}</Heading>
        <p className="text-base font-lato font-normal leading-[160%]">{event.type}</p>
      </div>
      <Button href={`/events/${event.id}`} variantCss="outline" sizeCss="lg" className={cn(`text-nowrap text-sm px-11`, style === 'grid' ? 'w-full mt-auto' : '')}>
        View more
      </Button>
    </div>
  );
};

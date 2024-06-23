'use client';

import { Button } from '../elements/Button';
import { Heading } from '../elements/Heading';
import { cn } from '@/app/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

type EventItemProps = {
  event: WorkshopPreview;
  style: string;
  className?: string;
};
export const EventItem: React.FC<EventItemProps> = ({ event, style, className }) => {
  const pathname = usePathname();
  const params = useParams()

  const day = event.date.split('').splice(0, 2);
  const month = event.date.split('').splice(2);
  const time = `${event.time[0]} - ${event.time[event.time.length - 1]}`;

  const isEventId = pathname === `/events/${params.eventId}`;

  return (
    <div
      className={cn(
        `w-full h-auto bg-white rounded mb-6 py-4 gap-x-[1.5rem] border hover:shadow-eventShadow border-solid border-gray300 transition duration-300`,
        style === 'flex' ? 'flex flex-col justify-between items-center sm:flex-row py-4  px-6 last:mb-10' : `flex justify-between items-center sm:items-start flex-col max-w-[390px] mb-0`,
      )}
    >
      <div className={cn(`flex gap-x-[1.25rem]`, className, style === 'flex' ? 'flex-row items-center' : 'flex-row sm:flex-col items-start px-4')}>
        <span className="text-[3rem] text-primary font-lato font-black">{day}</span>
        <div className={cn(`flex`, style === 'flex' ? 'flex-row sm:flex-col gap-x-1 sm:gap-x-0 sm:gap-y-[5px] justify-start items-end sm:items-start' : 'flex-col gap-y-[5px] justify-start items-start')}>
          <span className=" text-[1.25rem] text-gray900 font-lato font-bold leading-[150%]">{month}</span>
          <span className="text-base font-latoRegular font-[400] leading-[160%] text-nowrap">{time}</span>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start max-w-[390px] my-4 px-4">
        <Heading variant='h4' className={cn(`leading-[150%] text-[1.125rem] mb-4 text-center sm:text-left`)}>{isEventId && event.title.length >= 80 ? event.title.slice(0, 60) + '...' : event.title}</Heading>
        <p className={cn(`w-full text-base font-lato font-normal leading-[160%] text-center sm:text-left`)}>{event.type}</p>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Button href={`/events/${event.id}`} variantCss="outline" sizeCss="lg" className={cn(`text-nowrap text-sm w-full max-w-[360px]`, style === 'grid' ? 'w-full mt-auto' : '')}>
          View more
        </Button>
      </div>
    </div>
  );
};

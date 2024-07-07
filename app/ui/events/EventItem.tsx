'use client';

import { Button } from '../elements/Button';
import { Heading } from '../elements/Heading';
import { cn } from '@/app/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

type EventItemProps = {
  event: WorkshopPreview;
  className?: string;
  listStyle?: string;
};
export const EventItem: React.FC<EventItemProps> = ({ event, className, listStyle }) => {
  const pathname = usePathname();
  const params = useParams();

  const day = event.date.split('').splice(0, 2);
  const month = event.date.split('').splice(2);
  const time = `${event.time[0]} - ${event.time[event.time.length - 1]}`;

  const isEventId = pathname === `/events/${params.eventId}`;

  return (
    <div
      className={cn(
        `w-full h-auto bg-white rounded mb-6 gap-x-[1.5rem] border hover:shadow-eventShadow border-solid border-gray300 transition duration-300`,
        listStyle === 'flex'
          ? 'flex flex-col justify-between items-center sm:flex-row py-4  px-6 last:mb-10'
          : `flex justify-between items-center sm:items-start flex-col max-w-[390px] pt-4 pb-6 mb-0`
      )}
    >
      <div className={cn(`flex gap-x-[1.25rem]`, className, listStyle === 'flex' ? 'flex-row items-center' : 'flex-row sm:flex-col items-start px-4')}>
        <span className="text-[3rem] text-primary font-lato font-black">{day}</span>
        <div
          className={cn(
            `flex`,
            listStyle === 'flex'
              ? 'flex-row sm:flex-col gap-x-1 sm:gap-x-0 sm:gap-y-[5px] justify-start items-end sm:items-start'
              : 'flex-col gap-y-[5px] justify-start items-start'
          )}
        >
          <span className="text-[1.25rem] text-gray900 font-lato font-bold leading-[150%]">{month}</span>
          <span className=" whitespace-nowrap text-base font-latoRegular font-[400] leading-[160%] text-nowrap">{time}</span>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full max-w-[390px] my-4 px-4">
        <Heading variant="h4" className={cn(`leading-[150%] text-[1.125rem] mb-4 text-center sm:text-left`)}>
          {isEventId && event.title.length >= 80 ? event.title.slice(0, 60) + '...' : event.title}
        </Heading>
        <p className={cn(`text-base font-lato font-normal leading-[160%] text-center sm:text-left`)}>{event.type}</p>
      </div>
      <div className="flex justify-center items-center w-full">
        <Button
          href={`/events/${event.id}`}
          variantCss="outline"
          sizeCss="lg"
          className={cn(`text-nowrap text-sm w-full max-w-[260px]`, listStyle === 'grid' ? 'w-full mt-auto max-w-[90%]' : '')}
        >
          View more
        </Button>
      </div>
    </div>
  );
};

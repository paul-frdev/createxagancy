import { cn } from '@/app/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import React from 'react';
import { Heading } from '../elements/Heading';
import { Button } from '../elements/Button';

type EventFlexProps = {
  event: WorkshopPreview;
  style: string;
};
export const EventFlex: React.FC<EventFlexProps> = ({ event, style }) => {
  const day = event.date.split('').splice(0, 2);
  const month = event.date.split('').splice(2);
  const time = `${event.time[0]} - ${event.time[event.time.length - 1]}`;

  return (
    <>
      <div className={cn(`flex justify-start gap-x-[1.25rem]`, style === 'flex' ? 'flex-row' : 'flex-col')}>
        <span className="text-[3rem] text-primary font-lato font-black">{day}</span>
        <div className="flex flex-col justify-start items-start gap-y-[5px]">
          <span className=" text-[1.25rem] text-gray900 font-lato font-bold leading-[150%]">{month}</span>
          <span className="text-base font-latoRegular font-[400] leading-[160%] text-nowrap">{time}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start w-full my-4">
        <Heading className="text-left text-[1.125rem] leading-[150%] mb-4 ">{event.title}</Heading>
        <p className="text-base font-lato font-normal leading-[160%]">{event.type}</p>
      </div>
      <Button variantCss="outline" sizeCss="lg" className={cn(`text-nowrap text-sm px-11`, style === 'grid' ? 'w-full mt-auto' : '')}>
        View more
      </Button>
    </>
  );
};

import { Button } from './Button';
import { Heading } from './Heading';
import { WorkshopPreview } from '@/types/workshop';
import React from 'react';

type WorkshopCardProps = {
  item: WorkshopPreview;
};
export const WorkshopCard: React.FC<WorkshopCardProps> = ({ item }) => {
  const day = item.date.split('').splice(0, 2);
  const month = item.date.split('').splice(2);
  const time = `${item.time[0]} - ${item.time[item.time.length - 1]}`;
  return (
    <div className="w-full h-auto xl:h-[126px] bg-white last:mb-10 rounded mb-6 flex flex-col lg:flex-row justify-between items-center py-4 sm:py-8 px-2 xsm:px-4 sm:px-10 gap-x-[1.5rem] hover:shadow-workshopHover transition-all duration-500">
      <div className="flex justify-start gap-x-[1.25rem]">
        <span className="text-[3rem] text-primary font-lato font-black">{day}</span>
        <div className="flex flex-col justify-start items-start gap-y-[5px]">
          <span className=" text-[1.25rem] text-gray900 font-lato font-bold leading-[150%]">{month}</span>
          <span className="text-base font-lato font-normal leading-[160%] text-nowrap">{time}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start w-full my-4">
        <Heading className=" text-center lg:text-left text-[1.125rem] leading-[150%] mb-4 lg:mb-0">{item.title}</Heading>
        <p className="text-base font-lato font-normal leading-[160%]">{item.type}</p>
      </div>
      <Button variantCss="outline" sizeCss="lg" className=" text-nowrap text-sm px-11">
        View more
      </Button>
    </div>
  );
};

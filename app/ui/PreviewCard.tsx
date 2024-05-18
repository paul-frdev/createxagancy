'use client';

import { CourseType } from '@/types/courses';
import { Image } from '../../app/ui/elements/Image';
import { cn } from '@/app/lib/utils';


type PreviewCardProps = {
  course: CourseType;
  className?: string;
};

export const PreviewCard = ({ course, className }: PreviewCardProps) => {
  if (!course) {
    return <div>Loading</div>;
  }

  return (
    <div className={cn(`flex flex-col xsm:flex-row justify-start xsm:gap-x-[2rem] gap-y-8 items-center h-auto xsm:h-[214px]`, className)}>
      <div className="bg-secondary xsm:bg-white flex justify-center items-center h-[214px] w-full xsm:max-w-[214px]">
        <Image src={course.src} alt={course.alt} className="max-w-[214px] h-[216px] rounded-tl rounded-bl" />
      </div>
      <div className="flex flex-col justify-center xsm:justify-start items-center p-2 xsm:p-0 xsm:items-start gap-y-[1.25rem]">
        <span className=" text-sm font-lato font-normal text-white leading-[150%] py-[3px] px-2 rounded" style={{ backgroundColor: course.colorLabel }}>
          {course.label}
        </span>
        <p className="text-[1.25rem] text-center xsm:text-left font-lato font-bold leading-[150%]">{course.text}</p>
        <div className="flex justify-start items-start gap-x-[4px]">
          <span className="text-[1.125rem] font-lato font-bold leading-[150%] text-danger">{course.price[0].value.slice(0, 4)}</span>
          <span className="text-gray">|</span>
          <span className="text-[1.125rem] font-lato font-normal leading-[150%] text-gray">{course.author}</span>
        </div>
      </div>
    </div>
  );
};

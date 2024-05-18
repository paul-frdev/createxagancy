'use client';

import { cn } from '@/app/lib/utils';
import { CourseType } from '@/types/courses';
import { Card } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Image } from '../elements/Image';

export const CoursePreviewCard = ({ id, src, alt, label, colorLabel, text, price, author }: CourseType) => {
  const route = useRouter();
  return (
    <Card className={cn(`cursor-pointer hover:shadow-cardHover p-0 rounded shadow-card  max-w-[390px] w-full border border-solid border-gray min-h-[214px] mx-auto`)}>
      <Link href={`courses/${id}`}>
        <div className="flex flex-col justify-start  gap-y-8 items-center h-auto">
          <div className="bg-secondary  flex justify-center items-center h-[240px] w-full">
            <Image src={src} alt={alt} className="max-w-[214px] h-[240px] rounded-tl rounded-bl" />
          </div>
          <div className="flex flex-col p-6 justify-start items-start p-2  gap-y-[1.25rem] w-full">
            <span className=" text-sm font-latoRegular font-[400] text-white leading-[150%] py-[3px] px-2 rounded" style={{ backgroundColor: colorLabel }}>
              {label}
            </span>
            <p className="text-[1.25rem] text-center xsm:text-left font-latoBold font-[700] leading-[150%] text-green-900 text-nowrap">{text.length > 30 ? text.slice(0, 30) + '...' : text}</p>
            <div className="flex justify-start items-start gap-x-[4px]">
              <span className="text-[1.125rem] font-latoBold font-[700] leading-[150%] text-danger">{price[0].value.slice(0, 4)}</span>
              <span className="text-gray">|</span>
              <span className="text-[1.125rem] font-latoRegular font-[400] leading-[150%] text-gray">{author}</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

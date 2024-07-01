import { cn } from '@/app/lib/utils';
import Link from 'next/link';
import React from 'react';

type Tags = {
  tags: string[];
  isTitle?: boolean;
  className?: string;
};
export const Tags = ({ tags, className, isTitle = true }: Tags) => {
  return (
    <div className={cn(` w-full max-w-[380px] flex justify-start items-center flex-nowrap gap-x-3`, className)}>
      {isTitle ? <span className="text-base font-lato font-bold text-gray900 text-nowrap">Tags :</span> : null}
      {tags.map((tag, index) => (
        <Link
          className=" text-nowrap rounded hover:bg-gray300 transition-all duration-300 text-[0.875rem] px-4 py-2 font-lato font-bold text-gray700 border border-solid border-gray200 hover:bg-red hover:text-white"
          key={index}
          href={tag}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
};

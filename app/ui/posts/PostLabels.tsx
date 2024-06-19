import { LabelPost } from '@/types'
import React from 'react'
import { Image } from '../elements/Image'
import { cn } from '@/app/lib/utils';

type PostLabels = {
  labels: LabelPost[];
  className?: string;
}
export const PostLabels: React.FC<PostLabels> = ({ labels, className }) => {

  return (
    <div className={cn(`flex justify-start items-start text-sm mb-2 px-2 md:py-3`, className)}>
      {labels?.map((label) => (
        <React.Fragment key={label.id}>
          {label.text ? <span className="pr-[12px] font-lato font-normal text-gray700">{label.text}</span> : null}
          {label.src && label.date ? (
            <div className="flex justify-between items-center gap-x-[2.5px] px-[12px] border-x border-gray700 ">
              <Image src={label.src as string} alt="icon" className="w-4 h-4 text-gray700" />
              <span className=" font-lato font-normal text-gray700">{label.date}</span>
            </div>
          ) : null}
          {label.icon && label.time ? (
            <span className="flex items-center gap-x-[2.5px] pl-[12px]">
              <Image src={label.icon} alt="icon" className="w-4 h-4 text-gray700" />
              <span className=" font-lato font-bold text-gray700">{label.time}</span>
            </span>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  )
}

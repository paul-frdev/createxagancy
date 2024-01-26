import { Box } from '@mui/material'
import React from 'react'
import { Image } from './Image'
import { cn } from '@/lib/utils';


type CardCourseProps = {
  src: string;
  alt: string;
  label: string;
  colorLabel: string;
  text: string;
  price: string;
  author: string
}
export const CardCourse: React.FC<CardCourseProps> = ({ src, alt, label, colorLabel, text, price, author }) => {
  return (
    <div className='flex justify-start gap-x-[2rem] items-center h-[214px]'>
      <div className=' flex justify-center items-center h-[214px] w-full max-w-[214px]'>
        <Image src={src} alt={alt} className='max-w-[214px] h-[216px] rounded-tl rounded-bl' />
      </div>
      <div className='flex flex-col justify-start items-start gap-y-[1.25rem]'>
        <span className=" text-sm font-latoRegular font-[400] text-white leading-[150%] py-[3px] px-2 rounded" style={{backgroundColor: colorLabel}}>{label}</span>
        <p className='text-[1.25rem] font-latoBold font-[700] leading-[150%]'>{text}</p>
        <div className='flex justify-start items-start gap-x-[4px]'>
          <span className='text-[1.125rem] font-latoBold font-[700] leading-[150%] text-danger'>${price}</span>
          <span className='text-gray'>|</span>
          <span className='text-[1.125rem] font-latoRegular font-[400] leading-[150%] text-gray'>{author}</span>
        </div>
      </div>
    </div>
  )
}

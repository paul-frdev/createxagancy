import React from 'react'
import { Image } from './Image'


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
    <div className='flex flex-col xsm:flex-row justify-start xsm:gap-x-[2rem] gap-y-8 items-center h-auto xsm:h-[214px]'>
      <div className=' flex justify-center items-center h-[214px] w-full max-w-[214px]'>
        <Image src={src} alt={alt} className='max-w-[214px] h-[216px] rounded-tl rounded-bl' />
      </div>
      <div className='flex flex-col justify-center xsm:justify-start items-center p-2 xsm:p-0 xsm:items-start gap-y-[1.25rem]'>
        <span className=" text-sm font-latoRegular font-[400] text-white leading-[150%] py-[3px] px-2 rounded" style={{backgroundColor: colorLabel}}>{label}</span>
        <p className='text-[1.25rem] text-center xsm:text-left font-latoBold font-[700] leading-[150%]'>{text}</p>
        <div className='flex justify-start items-start gap-x-[4px]'>
          <span className='text-[1.125rem] font-latoBold font-[700] leading-[150%] text-danger'>${price}</span>
          <span className='text-gray'>|</span>
          <span className='text-[1.125rem] font-latoRegular font-[400] leading-[150%] text-gray'>{author}</span>
        </div>
      </div>
    </div>
  )
}

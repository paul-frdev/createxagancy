import { WorkshopPreview } from '@/types/workshop'
import React from 'react'
import { Heading } from './Heading'
import { Button } from './Button'

type WorkshopCardProps = {
  item: WorkshopPreview
}
export const WorkshopCard: React.FC<WorkshopCardProps> = ({ item }) => {

  const day = item.date.split('').splice(0, 2);
  const month = item.date.split('').splice(2);
  const time = `${item.time[0]} - ${item.time[item.time.length - 1]}`
  return (
    <div className='w-full h-[126px] bg-white last:mb-10 rounded mb-6 flex justify-between items-start py-8 px-10 gap-x-[1.5rem] hover:shadow-workshopHover transition-all duration-500'>
      <div className='flex justify-start gap-x-[1.25rem]'>
        <span className='text-[3rem] text-primary font-latoBlack font-[900]'>{day}</span>
        <div className='flex flex-col justify-start items-start gap-y-[5px]'>
          <span className=' text-[1.25rem] text-gray900 font-latoBold font-[700] leading-[150%]'>{month}</span>
          <span className='text-base font-latoRegular font-[400] leading-[160%] text-nowrap'>{time}</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start w-full'>
        <Heading className='text-[1.125rem] leading-[150%]'>{item.title}</Heading>
        <p className=' text-base font-latoRegular font-[400] leading-[160%]' >{item.type}</p>
      </div>
      <div>
        <Button variantCss='outline' sizeCss='lg' className=' text-nowrap text-sm'>View more</Button>
      </div>
    </div>
  )
}

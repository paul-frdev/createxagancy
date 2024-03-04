import React from 'react'
import { Typography } from '../ui/Typography';
import { Heading } from '../ui/Heading';
import { Image } from '../ui/Image';
import check from '/public/svg/check.svg';
import { Container } from '../ui/Container';

type BenefitItemProps = {
  subtitle: string;
  title: string;
  list: { id: number, text: string }[];
}
export const BenefitsItem: React.FC<BenefitItemProps> = ({ title, subtitle, list }) => {
  return (
    <Container className=' mb-32'>
      <div className='flex w-full justify-between items-start'>
        <div className='w-full max-w-[492px] -mt-14'>
          <Typography>{subtitle}</Typography>
          <Heading className='text-[2.875rem]'>{title}</Heading>
        </div>
        <div className='flex flex-col w-full max-w-[600px] gap-y-[1.25rem] '>
          {list.map((item) => (
            <div key={item.id} className='flex justify-start items-start gap-x-2'>
              <div className="w-6 h-6 flex justify-start items-start text-gray800">
                <Image className='w-[18px] mt-[5px] h-[18px]' src={check} alt="check" />
              </div>
              <span className=' w-full text-[1rem] font-latoRegular font-[400] leading-[140%]'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

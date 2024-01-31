import Image from 'next/image'
import React from 'react';
import why from '/public/assets/why.jpg'
import { Heading } from '../ui/Heading';
import { whyCreatexList } from '@/constants';
import check from '/public/svg/check.svg'
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export const WhyCreatex = () => {
  return (
    <section className='my-[8rem] relative w-full '>
        <span className=' bg-leftStars absolute top-1/2 left-0 w-[181px] h-[132px] -rotate-[275deg] bg-no-repeat bg-cover' />
      <Container>
        <div className='flex justify-between items-start gap-x-[3.438em]'>
          <div>
            <Image
              src={why}
              alt='why'
              width="0"
              height="0"
              sizes="100vw"
              className="w-full max-w-[702px] bg-cover h-[560px]"
            />
          </div>
          <div>
            <p className='text-base font-latoBold font-[700] tracking-[1px] leading-[150%] mb-[0.5rem] uppercase'>Who we are</p>
            <Heading variant='h3' className='text-[2.875rem] font-latoBold font-[900] mb-[2.5rem]'>Why Createx?</Heading>
            <ul className='mb-[3rem]'>
              {whyCreatexList.map(item => (
                <li key={item.id} className='flex justify-start items-start gap-x-[1.5rem] text-base font-latoRegular font-[400] mb-[0.75rem]'>
                  <div className='w-4 h-8 flex justify-center items-center'>
                    <Image src={check} alt='check' />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <Button href='/' sizeCss='lg'>More about us</Button>
          </div>
        </div>
      </Container>
      <span className=' bg-rightCircle absolute bottom-0 right-0 w-[181px] h-[132px] bg-no-repeat bg-cover' />
    </section>
  )
}

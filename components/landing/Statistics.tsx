import React from 'react'
import play from '../../public/svg/large.svg'
import statistics from '../../public/assets/statis.png'
import Image from 'next/image'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import Link from 'next/link'
import { statisticsList } from '@/constants'
import { Container } from '../ui/Container'

export const Statistics = () => {
  return (
    <Container>
      <div className=' flex justify-between pt-[6em]'>
        <div>
          <Link href='/' className='flex justify-start items-center gap-x-3 mb-[1.5em] text-black'>
            <Image src={play} alt='play' />
            <span className='text-sm font-latoBold font-[700]'>Play showreel</span>
          </Link>
          <div>
            <Heading variant='h1' className='text-[4em] font-latoBlack font-[900] w-full max-w-[496px] tracking-[1px] leading-[130%] mb-[1.75em]'>
              Enjoy studying
              with Createx Online Courses
            </Heading>
            <div className='flex justify-start items-center gap-x-[1.5em]'>
              <Button variantCss='outline' className='bg-[#ffdad5]'>About us</Button>
              <Button sizeCss='lg' className='hover:bg-[#ffdad5] border-transparent hover:border-orange'>Explore courses</Button>
            </div>
          </div>
        </div>
        <Image
          src={statistics}
          alt='statistics'
          width="0"
          height="0"
          sizes="100vw"
          className="w-full max-w-[602px] h-auto"
        />
      </div>
      <div className='w-ful mt-12'>
        <div className='flex justify-between gap-x-[2rem] items-center'>
          {statisticsList.map(item => (
            <>
              <div key={item.id} className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-x-[0.75em] gap-x-[0.75em]'>
                  <span className='text-[2.875em] leading-[130%] font-latoBold font-[700] text-nowrap'>
                    {item.number}
                  </span>
                  <span className='text-base font-latoRegular font-[400] text-nowrap'>
                    {item.text}
                  </span>
                </div>
              </div>
              {item.id < 4 && <div><span className='w-[8px] h-[8px] bg-red block rounded-full' /></div>}
            </>
          ))}
        </div>
      </div>
    </Container>
  )
}



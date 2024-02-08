'use client'
import React, { useState } from 'react'
import play from '../../public/svg/large.svg'
import statistics from '../../public/assets/statis.png'
import Image from 'next/image'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import Link from 'next/link'
import { statisticsList } from '@/constants'
import { Container } from '../ui/Container'
import { Video } from '../Video'
import { cn } from '@/lib/utils'
import { useMyContext } from '@/context/useContextMenu'

export const Statistics = () => {

  const { toggleShowVideo } = useMyContext()

  return (
    <section className='w-full bg-lightOrange bg-opacity-[0.2] pt-[2rem] h-screen'>
      <Container>
        <div className=' flex justify-between pt-[2rem] md:pt-[6em]'>
          <div>
            <Link href='/' onClick={() => toggleShowVideo()} className='flex justify-center md:justify-start items-center gap-x-3 mb-[1.5em] text-black'>
              <Image src={play} alt='play' className='animation-pulse rounded-full' />
              <span className='text-sm font-latoBold font-[700]'>Play showreel</span>
            </Link>
            <div className='w-full'>
              <Heading variant='h1' className='text-[2.5rem] sm:text-[3rem] text-center md:text-left lg:text-[4rem] font-latoBlack font-[900] w-full md:max-w-[496px] tracking-[1px] leading-[130%] mb-8 sm:mb-[1.75em]'>
                Enjoy studying
                with Createx Online Courses
              </Heading>
              <div className='flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 justify-center md:justify-start items-center gap-x-[1.5em]'>
                <Button variantCss='outline' className='bg-[#ffe0d3]'>About us</Button>
                <Button sizeCss='lg' className='hover:bg-[#ffe0d3] border-transparent text-nowrap hover:border-orange'>Explore courses</Button>
              </div>
            </div>
          </div>
          <Image
            src={statistics}
            alt='statistics'
            width="0"
            height="0"
            sizes="100vw"
            className="hidden md:block w-full max-w-[350px] h-[400px] lg:max-w-[400px] lg:h-[450px] xl:max-w-[602px] xl:h-auto"
          />
        </div>
        <div className='w-ful mt-12 mb-8'>
          <div className='flex flex-col md:flex-row justify-between gap-x-[2rem] items-center '>
            {statisticsList.map((item) => (
              <React.Fragment key={item.id}>
                <div className='flex flex-col lg:flex-row justify-start items-center gap-x-[0.75em] gap-x-[0.75em]'>
                  <span className='text-[2.875em] leading-[130%] font-latoBold font-[700] text-nowrap'>
                    {item.number}
                  </span>
                  <span className='text-base font-latoRegular font-[400] text-nowrap'>
                    {item.text}
                  </span>
                </div>
                {item.id < 4 ? <div><span className='hidden md:block w-[8px] h-[8px] bg-red block rounded-full' /></div> : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}



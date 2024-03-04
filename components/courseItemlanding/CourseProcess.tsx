import React from 'react'
import { Container } from '../ui/Container'
import { Typography } from '../ui/Typography'
import { Heading } from '../ui/Heading'

export const CourseProcess = () => {
  return (
    <section className='w-full mt-8 mb-32'>
      <Container>
        <Typography className='text-center'>Main steps</Typography>
        <Heading variant='h3' className='text-center text-[2.875rem] mb-[3.75rem]'>Online learning process</Heading>
        <div className='flex justify-between items-center w-full'>
          <div className='w-full max-w-[285px] h-auto'>
            <div className='w-full flex justify-start mb-4 relative h-[90px]'>
              <span className='absolute top-1/2 right-0 border border-dashed border-gray400 w-full max-w-[210px]' />
              <span className='flex justify-center items-center text-[2.875rem] text-gray400 font-latoBold font-[900] text-left'>01</span>
            </div>
            <p className=' text-xl text-gray900 mb-2'>Watching online video lectures</p>
            <p className=' text-gray700 text-base leading-[160%] font-latoRegular font-[400]'>
              Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
            </p>
          </div>
          <div className='w-full max-w-[285px] h-auto'>
            <div className='w-full flex justify-start mb-4 relative h-[90px]'>
              <span className='absolute top-1/2 right-0 border border-dashed border-gray400 w-full max-w-[210px]' />
              <span className='flex justify-center items-center text-[2.875rem] text-gray400 font-latoBold font-[900] text-left'>02</span>
            </div>
            <p className=' text-xl text-gray900 mb-2'>Passing test</p>
            <p className=' text-gray700 text-base leading-[160%] font-latoRegular font-[400]'>
            Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.
            </p>
          </div>
          <div className='w-full max-w-[285px] h-auto'>
            <div className='w-full flex justify-start mb-4 relative h-[90px]'>
              <span className='absolute top-1/2 right-0 border border-dashed border-gray400 w-full max-w-[210px]' />
              <span className='flex justify-center items-center text-[2.875rem] text-gray400 font-latoBold font-[900] text-left'>03</span>
            </div>
            <p className=' text-xl text-gray900 mb-2'>Curator’s feedback</p>
            <p className=' text-gray700 text-base leading-[160%] font-latoRegular font-[400]'>
            Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.
            </p>
          </div>
          <div className='w-full max-w-[285px] h-auto'>
            <div className='w-full flex justify-start mb-4 h-[84px]'>
              <span className='text-[2.875rem] w-[84px] h-[84px] text-orange bg-primary bg-opacity-[0.12] rounded-full font-latoBold font-[900] flex justify-center items-center animation-pulse'>04</span>
            </div>
            <p className=' text-xl text-gray900 mb-2'>Corrections if needed</p>
            <p className=' text-gray700 text-base leading-[160%] font-latoRegular font-[400]'>
            Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
import React from 'react'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import { Box } from '@mui/material'
import { Card } from '../ui/Card'
import { CardCourse } from '../ui/CardCourse'
import { coursesList } from '@/constants'
import { Container } from '../ui/Container'

export const Courses = () => {
  return (
    <section className='mb-[8rem] w-full'>
      <Container>
        <div className='flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 justify-center sm:justify-between items-center mb-[3.75rem]'>
          <div>
            <p className=' text-center sm:text-left text-[0.8rem] md:text-base font-latoBold font-[700] uppercase tracking-[1px] leading-[150%] mb-[0.5rem]'>Ready to learn?</p>
            <Heading variant='h4' className='text-[2.2rem] md:text-[2.875rem] font-latoBold font-[900]'>Featured Courses</Heading>
          </div>
          <Button variantCss='outline' sizeCss='lg'>View all courses</Button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[1.875rem]'>
          {coursesList.map(course => (
            <Card key={course.id} classname=' cursor-pointer hover:shadow-cardHover p-0 rounded shadow-card max-w-fit lg:max-w-[603px] border border-solid border-gray min-h-[214px]'>
              <CardCourse
                {...course}
              />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

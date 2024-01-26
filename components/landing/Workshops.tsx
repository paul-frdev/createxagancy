import React from 'react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Typography } from '../ui/Typography'
import { WorkshopPreview } from '@/types/workshop'
import { WorkshopCard } from '../ui/WorkshopCard'


type WorkshopsProps = {
  workshops: WorkshopPreview[]
}
export const Workshops: React.FC<WorkshopsProps> = ({ workshops }) => {
  return (
    <section className='my-8 w-full relative bg-orange02 pt-10'>
      <Container>
        <div className='flex flex-col justify-center items-center'>
          <Typography>Our Events</Typography>
          <Heading variant='h5' className='text-[2.875rem] mb-12'>Lectures & workshops</Heading>
        </div>
        {workshops.map((item) => (
          <WorkshopCard item={item} key={item.id} />
        ))}
      </Container>
    </section>
  )
}

import React from 'react'
import { Container } from '../ui/Container'
import { Typography } from '../ui/Typography'
import { Heading } from '../ui/Heading'
import { SubscribeForm } from '../forms/SubscribeForm'

export const Subscribe = () => {
  return (
    <section className='w-full bg-orange02 relative min-h-[564px]'>
      <span className=' bg-illustration1 absolute bottom-0 left-0 w-[354px] h-[246px] bg-no-repeat bg-cover' />
      <span className=' bg-illustration1 absolute bottom-0 right-0 w-[354px] h-[246px] bg-no-repeat bg-cover' />
      <Container className='pt-28'>
        <Typography className='text-center mb-2'>Don’t miss anything</Typography>
        <Heading variant='h3' className='mx-auto max-w-[810px] text-center text-[2.875rem] mb-10'>
          Subscribe to the Createx School announcements
        </Heading>
        <SubscribeForm />
      </Container>
    </section>
  )
}

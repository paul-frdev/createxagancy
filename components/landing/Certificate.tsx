import React from 'react'
import { Container } from '../ui/Container'
import { Typography } from '../ui/Typography'
import { Heading } from '../ui/Heading'
import { Image } from '../ui/Image';

export const Certificate = () => {
  return (
    <section className='bg-white w-full'>
      <Container className='flex justify-between items-center w-full relative'>
        <div>
          <div className='w-full max-w-[400px]'>
            <Typography>
              Createx Certificate
            </Typography>
            <Heading variant='h3' className='text-[2.875rem] mb-10'>Your expertise will be confirmed</Heading>
            <Typography className=' text-gray800 font-latoRegular font-[400] normal-case	leading-[160%]'>
              We are accredited by international professional organizations and institutes:
            </Typography>
            <div className='flex w-full justify-between items-center gap-x-[3rem]'>
              <Image src='/svg/logo1.svg' alt='logo-one' className='w-[100px] h-[80px] bg-cover bg-center' />
              <Image src='/svg/logo2.svg' alt='logo-two' className='w-[100px] h-[80px] bg-cover bg-center' />
              <Image src='/svg/logo3.svg' alt='logo-three' className='w-[100px] h-[100px] bg-cover bg-center' />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-end items-center'>
          <Image src='/assets/certificate.jpg' alt='certificate' className='max-w-[705px] h-[500px]' />
        </div>
        <div></div>
      </Container>
    </section>
  )
}

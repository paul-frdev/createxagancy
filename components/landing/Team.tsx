'use client'
import React, { useEffect, useState } from 'react'
import { Container } from '../ui/Container'
import { Typography } from '../ui/Typography'
import { Heading } from '../ui/Heading'
import { Carousel, CustomNextArrow, CustomPrevArrow } from '../swiper/Carousel';
import { Image } from '../ui/Image';
import { Team as TeamType } from '@/types/team';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


type TeamProps = {
  items: TeamType[]
}

type CarouselItemProps = TeamType & {
};

const carouselOptions = {
  breakpoints: {
    // 785: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    //   slidesOffsetBefore: 0,
    // },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesOffsetBefore: 0,
    },
  },
  spaceBetween: 32,
  grabCursor: true,
  loop: true,
  pagination: false,
  slidesPerView: 3,
  navigation: {
    clickable: true,
    prevEl: ".custom-prev-arrow",
    nextEl: ".custom-next-arrow",
  },
  slidesOffsetBefore: 20,
};


const CarouselItem: React.FC<CarouselItemProps> = ({ src, author, position, links }) => {
  return (
    <div className='w-full max-w-[285px] h-[416px]'>
      <div className='w-full bg-secondary flex justify-center items-center mb-4'>
        <Image src={src} alt="person" className='w-[245px] h-[320px] bg-cover bg-center' />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Heading variant='h6' className='text-[1.25rem]'>{author}</Heading>
        <Typography className=' text-gray700 font-latoRegular font-[400] normal-case text-center'>{position}</Typography>
      </div>
    </div>
  );
};

export const Team: React.FC<TeamProps> = ({ items }) => {

  const navPrevButton = React.useRef<HTMLButtonElement>(null);
  const navNextButton = React.useRef<HTMLButtonElement>(null);

  useEffect(() => { }, [navNextButton, navPrevButton])

  const carouselOptions = {
    breakpoints: {
      // 785: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      //   slidesOffsetBefore: 0,
      // },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesOffsetBefore: 0,
      },
    },
    spaceBetween: 32,
    grabCursor: true,
    loop: true,
    pagination: false,
    speed: 1000,
    slidesPerView: 3,
    navigation: {
      clickable: true,
      prevEl: navPrevButton.current,
      nextEl: navNextButton.current,
    },
    slidesOffsetBefore: 20,
  };

  const carouselItems = items.map(item => (
    <CarouselItem key={item.id} {...item} />
  ))
  return (
    <section className='w-full bg-gray200 py-[10rem] relative'>
      <Container>
        <span className=' bg-vector absolute top-[70px] left-0 w-[41px] h-[41px]' />
        <div className='flex justify-between items-center'>
          <div>
            <Typography>Best tutors are all here</Typography>
            <Heading variant='h4' className='text-[2.875rem] mb-10'>Meet our team</Heading>
          </div>
          <div className='flex justify-end items-center gap-x-2'>
            <CustomPrevArrow
              icon={<ArrowBackIcon className='w-[24px] h-[24px]' />}
              ref={navPrevButton}
              className='w-[48px] h-[48px] rounded-full bg-transparent border-none hover:bg-orange p-0'
              variant='outline'
            />
            <CustomNextArrow
              icon={<ArrowForwardIcon className='w-[24px] h-[24px]' />}
              ref={navNextButton}
              className='w-[48px] h-[48px] rounded-full bg-transparent border-none hover:bg-orange p-0'
              variant='outline'
            />
          </div>
        </div>
        <div className='min-h-[420px]'>
          <Carousel items={carouselItems} options={carouselOptions} />
        </div>
        <span className=' bg-shapes absolute bottom-[70px] right-0 w-[96px] h-[96px] bg-no-repeat bg-center bg-cover' />
      </Container>
    </section>
  )
}

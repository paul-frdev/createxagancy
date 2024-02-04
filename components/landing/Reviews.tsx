'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../ui/Container'
import { Typography } from '../ui/Typography'
import { Heading } from '../ui/Heading'
import { Carousel, CustomNextArrow, CustomPrevArrow } from '../swiper/Carousel'
import { Image } from '../ui/Image'
import { ReviewsType } from '@/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper as SwiperCore } from 'swiper/types';



type CarouselItemProps = ReviewsType & {
};

type ReviewsProps = {
  items: ReviewsType[]
}

const ReviewItem: React.FC<CarouselItemProps> = ({ src, author, text, course }) => {
  return (
    <div className='bg-white rounded shadow-xl py-14 px-10'>
      <div className='flex justify-start items-start gap-x-[1.875rem] mb-6'>
        <span>
          <Image src='/svg/braces.svg' alt='braces' className='w-[28px] h-[20px]' />
        </span>
        <Typography className=' text-gray800 font-latoRegular font-[400] max-w-[750px] normal-case text-left mb-6'>
          {text}
        </Typography>
      </div>
      <div className='w-full flex justify-start items-start gap-x-[1.25rem]'>
        <Image src={src} alt="reviewer" className='w-[72px] h-[72px] bg-cover bg-center' />
        <div className='flex flex-col justify-center items-center'>
          <Heading variant='h6' className='text-[1.25rem]'>{author}</Heading>
          <Typography className=' text-gray700 font-latoRegular font-[400] normal-case text-center mb-6'>{course}</Typography>
        </div>
      </div>
    </div>
  );
};

export const Reviews: React.FC<ReviewsProps> = ({ items }) => {

  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);
  const [swipe, setSwipe] = useState<SwiperCore>();


  useEffect(() => {

  }, [navNextButton, navPrevButton, swipe])

  const carouselOptions = {
    breakpoints: {
      1400: {
        slidesPerView: 1,
        spaceBetween: 50,
        slidesOffsetBefore: 0,
      },
    },
    spaceBetween: 50,
    speed: 700,
    grabCursor: true,
    loop: true,
    pagination: true,
    slidesPerView: 1,
    navigation: {
      clickable: true,
      prevEl: navPrevButton.current,
      nextEl: navNextButton.current,
    },
    slidesOffsetBefore: 0,
  };

  const carouselItems = items.map(item => {
    return (
      <ReviewItem key={item.id} {...item} />
    )
  })

  return (
    <section className='w-full bg-gray200 relative'>
      <span className=' bg-circles absolute top-0 left-0 w-[145px] h-[145px]' />
      <Container>
        <div className='mb-12 relative'>
          <Typography className='text-center mb-0'>TESTIMONIALS</Typography>
          <Heading variant='h4' className='text-center text-[2.875rem]'>What our students say</Heading>
          <span className=' bg-shapes2 bg-no-repeat text-sm absolute top-[29px] right-[25%] w-[87px] h-[47px]' />
        </div>
        <div className='flex gap-x-[3rem] m-auto justify-between items-center pb-20 bg-transparent max-w-[1020px] w-full'>
          <CustomPrevArrow
            ref={navPrevButton}
            icon={<ArrowBackIcon className='w-[24px] h-[24px]' />}
            className='w-[48px] h-[48px] rounded-full bg-transparent border-none hover:bg-orange p-0'
            variant='outline'
          />
          <Carousel className='reviews px-8' onBeforeInit={setSwipe} height={344} options={carouselOptions} items={carouselItems} />
          <CustomNextArrow
            ref={navNextButton}
            icon={<ArrowForwardIcon className='w-[24px] h-[24px]' />}
            className='w-[48px] h-[48px] rounded-full bg-transparent border-none hover:bg-orange p-0'
            variant='outline'
          />
          <span className=' bg-dots absolute bottom-[50px] left-0 w-[143px] h-[105px]' />
        </div>
      </Container>
      <span className='bg-circles absolute bottom-0 right-0 bg-no-repeat w-[145px] h-[145px]' />
    </section>
  )
}

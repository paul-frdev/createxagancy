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
import { Swiper as SwiperCore } from 'swiper/types';


type TeamProps = {
  items: TeamType[]
}

type CarouselItemProps = TeamType & {
};

const CarouselItem: React.FC<CarouselItemProps> = ({ src, author, position, links }) => {
  return (
    <div className='w-full max-w-[285px] h-[416px]'>
      <div className='w-full flex justify-center items-center mb-4'>
        <Image src={src} alt="person" className='w-full h-[320px] bg-cover bg-center' />
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
  const [swipe, setSwipe] = useState<SwiperCore>();

  useEffect(() => {
  }, [navNextButton, navPrevButton, swipe])

  const carouselOptions = {
    breakpoints: {
      315: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      827: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    grabCursor: true,
    loop: true,
    pagination: false,
    slidesOffsetBefore: 0,
    speed: 700,
    navigation: {
      clickable: true,
      prevEl: navPrevButton.current,
      nextEl: navNextButton.current,
    },
  };

  const carouselItems = items.map(item => (
    <CarouselItem key={item.id} {...item} />
  ))
  return (
    <section className='w-full bg-gray200 py-[3rem] lg:py-[10rem] relative'>
      <Container>
        <span className=' bg-vector absolute top-[70px] left-0 w-[41px] h-[41px]' />
        <div className='flex flex-col xsm:flex-row justify-between items-center'>
          <div>
            <Typography className='text-center xsm:text-left'>Best tutors are all here</Typography>
            <Heading variant='h4' className='text-[2.5rem] md:text-[2.875rem] mb-10'>Meet our team</Heading>
          </div>
          <div className='hidden xsm:flex justify-end items-center gap-x-2'>
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
          <Carousel onBeforeInit={setSwipe} items={carouselItems} options={carouselOptions} />
        </div>
        <span className=' bg-shapes absolute bottom-[70px] right-0 w-[96px] h-[96px] bg-no-repeat bg-center bg-cover' />
      </Container>
    </section>
  )
}

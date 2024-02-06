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
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link'


const social = [
  {
    id: 1,
    icon: <FacebookIcon />,
    src: '/'
  },
  {
    id: 2,
    icon: <InstagramIcon />,
    src: '/'
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
    src: '/'
  }
]

type TeamProps = {
  items: TeamType[]
}

type CarouselItemProps = TeamType & {
};

const CarouselItem: React.FC<CarouselItemProps> = ({ src, author, position, links }) => {
  return (
    <div className='w-full max-w-[285px] h-[416px] group mx-auto'>
      <div className='w-full flex justify-center items-center mb-4 relative'>
        <Image src={src} alt="person" className='w-full h-[320px] bg-cover bg-center' />
        <div className='opacity-0 group-hover:opacity-[1] flex justify-end items-end gap-x-4 bg-hoverCard absolute bottom-0 left-0 right-0 w-full h-[200px] transition-opacity delay-[35] duration-300'>
          {social.map(link => (
            <Link key={link.id} href={link.src} className=' transition-opacity duration-300 last:mr-4 mb-1 text-white opacity-[0.6] hover:opacity-[1]'>
              <span className='w-[20px] h-[20px]'>{link.icon}</span>
            </Link>
          ))}
        </div>
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
        spaceBetween: 0,
      },
      501: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1031: {
        slidesPerView: 3,
        spaceBetween: 10,
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
            <Heading variant='h4' className='text-[2.5rem] md:text-[2.875rem] mb-10 z-[3]'>Meet our team</Heading>
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
        <div className='min-h-[420px] max-w-[583px] md:max-w-[900px] xl:max-w-full mx-auto'>
          <Carousel onBeforeInit={setSwipe} items={carouselItems} options={carouselOptions} />
        </div>
        <span className=' bg-shapes absolute bottom-[70px] right-0 w-[96px] h-[96px] bg-no-repeat bg-center bg-cover' />
      </Container>
    </section>
  )
}

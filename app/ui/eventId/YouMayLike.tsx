'use client';

import { Button } from '../elements/Button';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Typography } from '../elements/Typography';
import { EventItem } from '../events/EventItem';
import { Carousel, CustomNextArrow, CustomPrevArrow } from '../swiper/Carousel';
import { WorkshopPreview } from '@/types/workshop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';

type YouMayLikeProps = {
  events: WorkshopPreview[];
};

export const YouMayLike: React.FC<YouMayLikeProps> = ({ events }) => {
  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);
  const [swipe, setSwipe] = useState<SwiperCore>();

  const isMobile = useMediaQuery('(max-width: 498px)');

  useEffect(() => {}, [navNextButton, navPrevButton, swipe]);

  const carouselOptions = {
    breakpoints: {
      315: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      968: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 15,
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

  const carouselItems = events.map((item) => <EventItem listStyle="grid" key={item.id} event={item} />);

  return (
    <section className="w-full bg-[#f4f5f7] py-12 lg:py-24">
      <Container className="h-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="w-full">
            <Typography className="text-center xsm:text-left">Check other online events</Typography>
            <Heading className="text-center mb-0 xsm:text-left text-[2rem] md:text-[2.875rem]" variant="h4">
              You may also like
            </Heading>
          </div>
          <div className="hidden xsm:flex max-w-[100px] w-full justify-between items-center">
            <CustomPrevArrow
              icon={<ArrowBackIcon className="w-[24px] h-[24px]" />}
              ref={navPrevButton}
              className="min-w-fit w-full max-w-[48px] h-[48px] rounded-full bg-transparent border-none hover:bg-orange p-0"
              variant="outline"
            />
            <CustomNextArrow
              icon={<ArrowForwardIcon className="w-[24px] h-[24px]" />}
              ref={navNextButton}
              className="min-w-fit w-full max-w-[48px] h-[48px] rounded-full bg-transparent border-none hover:bg-orange p-0"
              variant="outline"
            />
          </div>
        </div>
        <Carousel classNameSlide="max-w-fit" height={!isMobile ? 390 : 370} className="mx-auto max-w-fit" onBeforeInit={setSwipe} items={carouselItems} options={carouselOptions} />
        <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 justify-center items-center gap-x-[2.5rem]">
          <Typography className="text-center sm:text-left mb-0 text-[1rem] xsm:text-[1.2rem] text-gray900">Do you want more?</Typography>
          <Button className=" text-nowrap w-[202px]" href="/events">
            Explore all events
          </Button>
        </div>
      </Container>
    </section>
  );
};

import { PreviewCard } from '../common/PreviewCard';
import { Carousel, CustomNextArrow, CustomPrevArrow } from '../swiper/Carousel';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Typography } from '../ui/Typography';
import { CourseType } from '@/types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';

type MayLikeCarouselProps = {
  courses: CourseType[];
};

export const MayLikeCarousel: React.FC<MayLikeCarouselProps> = ({ courses }) => {
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
        spaceBetween: 30,
      },
      1250: {
        slidesPerView: 2,
        spaceBetween: 30,
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

  const carouselItems = courses.map((item) => (
    <PreviewCard className="mx-auto border shadow-preview border-solid border-gray300 w-full max-w-[700px] xmd:max-w-[600px]" key={item.id} course={item} />
  ));

  return (
    <section className="w-full bg-white py-12 lg:py-24">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div className="w-full">
            <Typography className="text-center xsm:text-left">Check other courses</Typography>
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
        <Carousel height={isMobile ? 460 : 270} className="mx-auto" onBeforeInit={setSwipe} items={carouselItems} options={carouselOptions} />
        <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 justify-center items-center gap-x-[2.5rem]">
          <Typography className="text-center sm:text-left mb-0 text-[1rem] xsm:text-[1.2rem] text-gray900">Do you want more courses?</Typography>
          <Button className=" text-nowrap w-[202px]" href="/courses">
            View all courses
          </Button>
        </div>
      </Container>
    </section>
  );
};

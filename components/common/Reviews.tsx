'use client';

import { Carousel, CustomNextArrow, CustomPrevArrow } from '../swiper/Carousel';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Image } from '../ui/Image';
import { Typography } from '../ui/Typography';
import { cn } from '@/lib/utils';
import { ReviewsType } from '@/types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';

type CarouselItemProps = ReviewsType & {};

type ReviewsProps = {
  items: ReviewsType[];
  className?: string;
};

const ReviewItem: React.FC<CarouselItemProps> = ({ src, author, text, course }) => {
  return (
    <div className="bg-white rounded shadow-xl py-8 lg:py-14 px-6 lg:px-10">
      <div className="flex justify-start items-start gap-x-[1.875rem] mb-6">
        <span className="hidden xsm:block">
          <Image src="/svg/braces.svg" alt="braces" className="w-[28px] h-[20px]" />
        </span>
        <Typography className="text-gray800 font-latoRegular font-[400] max-w-[750px] normal-case text-justify sm:text-left mb-0 md:mb-6">{text}</Typography>
      </div>
      <div className="w-full flex justify-start items-start gap-x-[1.25rem]">
        <Image src={src} alt="reviewer" className="w-[72px] h-[72px] bg-cover bg-center" />
        <div className="flex flex-col justify-center items-center">
          <Heading variant="h6" className="text-[1.25rem]">
            {author}
          </Heading>
          <Typography className=" text-gray700 font-latoRegular font-[400] normal-case text-center mb-6">{course}</Typography>
        </div>
      </div>
    </div>
  );
};

export const Reviews: React.FC<ReviewsProps> = ({ items, className }) => {
  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);
  const [swipe, setSwipe] = useState<SwiperCore>();

  useEffect(() => {}, [navNextButton, navPrevButton, swipe]);

  const carouselOptions = {
    slidesPerView: 1,
    spaceBetween: 60,
    slidesOffsetBefore: 0,
    speed: 700,
    grabCursor: true,
    loop: true,
    pagination: true,
    navigation: {
      clickable: true,
      prevEl: navPrevButton.current,
      nextEl: navNextButton.current,
    },
  };

  const carouselItems = items.map((item) => {
    return <ReviewItem key={item.id} {...item} />;
  });

  return (
    <section className={cn(`w-full bg-gray200 relative`, className)}>
      <span className=" bg-circles absolute top-0 left-0 w-[145px] h-[145px]" />
      <Container>
        <div className="mb-12 relative">
          <Typography className="text-center mb-2">TESTIMONIALS</Typography>
          <Heading variant="h4" className="text-center text-[2.4rem] md:text-[2.875rem]">
            What our students say
          </Heading>
          <span className=" bg-shapes2 bg-no-repeat text-sm absolute top-[29px] right-[25%] w-[87px] h-[47px]" />
        </div>
        <div className="flex gap-x-[0.5rem] lg:gap-x-[1.5rem]  xl:gap-x-[3rem] m-auto justify-between items-center pb-20 bg-transparent max-w-[1020px] w-full">
          <CustomPrevArrow
            ref={navPrevButton}
            icon={<ArrowBackIcon className="w-[24px] h-[24px]" />}
            className="hidden md:block w-[48px] h-[48px] rounded-full bg-transparent border-none hover:bg-orange p-0"
            variant="outline"
          />
          <Carousel className="reviews px-3 xsm:px-4 h-[500px] xsm:h-auto" onBeforeInit={setSwipe} height={344} options={carouselOptions} items={carouselItems} />
          <CustomNextArrow
            ref={navNextButton}
            icon={<ArrowForwardIcon className="w-[24px] h-[24px]" />}
            className="hidden md:block w-[48px] h-[48px] rounded-full bg-transparent border-none hover:bg-orange p-0"
            variant="outline"
          />
          <span className=" bg-dots absolute bottom-[50px] left-0 w-[143px] h-[105px]" />
        </div>
      </Container>
      <span className="bg-circles absolute bottom-0 right-0 bg-no-repeat w-[145px] h-[145px]" />
    </section>
  );
};

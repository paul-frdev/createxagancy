'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import React from 'react';

export type CustomArrowPrev = {
  onClick?: () => void;
  icon?: React.ReactElement;
  className?: string;
  variant?: "secondary" | "link" | "outline" | "default" | "ghost";
  size?: "icon" | "default" | "lg" | "md" | "sm";
}

export type CustomArrowNext = {
  onClick?: () => void;
  icon?: React.ReactElement;
  className?: string;
  variant?: "secondary" | "link" | "outline" | "default" | "ghost";
  size?: "icon" | "default" | "lg" | "md" | "sm";
}

type SwipperProps = {
  items: React.ReactElement[];
  options: SwiperOptions;
  slidesPerView?: number | 'auto';
  height?: number;
  className?: string;
  onBeforeInit?: (swiper: any) => void;
}

export const CustomPrevArrow = React.forwardRef<HTMLButtonElement, CustomArrowPrev>(
  ({ onClick, icon: Icon, className, variant, size }, ref) => (
    <Button ref={ref} onClick={onClick} className={className} variantCss={variant} sizeCss={size}>
      {Icon as any}
    </Button>
  )
);

export const CustomNextArrow = React.forwardRef<HTMLButtonElement, CustomArrowNext>(
  ({ onClick, icon: Icon, className, variant, size }, ref) => (
    <Button ref={ref} onClick={onClick} className={className} variantCss={variant} sizeCss={size}>
      {Icon as any}
    </Button>
  )
);

export const Carousel: React.FC<SwipperProps> = ({ options, items, height = 416, slidesPerView = 3, className, onBeforeInit }) => {

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      onBeforeInit={onBeforeInit}
      slidesPerView={slidesPerView}
      {...options}
      className={cn(className)}
    >
      {items.map((item, index) => (
        <SwiperSlide style={{ height: height }} key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  )
}
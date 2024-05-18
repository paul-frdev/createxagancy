'use client';

import notFound from '../../public/svg/not-found.svg';
import { Image } from './elements/Image';
import { Button } from '@/app/ui/elements/Button';
import { Container } from '@/app/ui/elements/Container';
import { Heading } from '@/app/ui/elements/Heading';
import { Typography } from '@/app/ui/elements/Typography';
import { useRouter } from 'next/navigation';
import React from 'react';

export const NotFoundClient = () => {
  const router = useRouter();

  return (
    <Container className="flex flex-col justify-center items-center my-auto">
      <Image src={notFound} alt="not-found" className="w-full max-w-[600px] mb-12" />
      <div className="flex flex-col justify-center items-center gap-y-4 mb-9">
        <Heading variant="h5" className="text-center text-[26px] md:text-[32px] tracking-[0.5px]">
          Ooops! Page not found!
        </Heading>
        <Typography className="text-center text-[16px] tracking-[0.15px] leading-6  font-lato font-normal text-gray900">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
      </div>
      <Button onClick={() => router.push('/')} className="w-full max-w-[328px] md:max-w-[264px] font-lato font-bold tracking-[1px] leading-[16px]">
        To main page
      </Button>
    </Container>
  );
};

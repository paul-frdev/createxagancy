'use client';

import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Image } from '../ui/Image';
import { Typography } from '../ui/Typography';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Certificate = () => {
  const pathname = usePathname();
  return (
    <section className="bg-white w-full py-8 md:py-14">
      <Container className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full relative">
        <div className="w-full lg:max-w-[400px]">
          <Typography className="text-center lg:text-left">Createx Certificate</Typography>
          <Heading variant="h3" className="text-center lg:text-left text-[2.2rem] lg:text-[2.875rem] mb-4 lg:mb-10">
            Your expertise will be confirmed
          </Heading>
          <Typography className="text-center lg:text-left text-gray800 font-latoRegular font-[400] normal-case	leading-[160%]">
            We are accredited by international professional organizations and institutes:
          </Typography>
          <div className="flex flex-col xsm:flex-row w-full max-w-[400px] mx-auto justify-between items-center gap-x-[3rem] mb-6 lg:mb-0">
            <Image src="/svg/logo1.svg" alt="logo-one" className="w-[100px] h-[80px] bg-cover bg-center" />
            <Image src="/svg/logo2.svg" alt="logo-two" className="w-[100px] h-[80px] bg-cover bg-center" />
            <Image src="/svg/logo3.svg" alt="logo-three" className="w-[100px] h-[100px] bg-cover bg-center" />
          </div>
        </div>
        <div className={cn(`w-full flex justify-center lg:justify-end items-center`, pathname !== '/courses' ? 'lg:absolute lg:bottom-[-131px] lg:right-0 z-[1]' : '')}>
          <Image src="/assets/certificate.jpg" alt="certificate" className="max-w-[605px] xl:max-w-[705px] h-auto lg:h-[500px]" />
        </div>
      </Container>
    </section>
  );
};

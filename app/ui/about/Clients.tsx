import { Head } from '../Head';
import { Reviews } from '../Reviews';
import { Container } from '../elements/Container';
import { ReviewsType } from '@/types';
import React from 'react';
import { Image } from '../elements/Image';
import { clients } from '@/constants';

type IClients = {
  reviews: ReviewsType[];
};
export const Clients: React.FC<IClients> = ({ reviews }) => {
  return (
    <section className=" bg-gray200 w-full my-5 xmd:my-10">
      <Container className="py-5 xmd:py-10">
        <Reviews className='px-0' items={reviews} />
        <Head text="best jobs for you" title="Our students work here" />
        <div className=' grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-3 w-full max-w-fit mx-auto'>
          {clients.map(item => (
            <Image key={item.id} src={item.src} alt='logo' className='w-[120px] h-[64px]' />
          ))}
        </div>
      </Container>
    </section>
  );
};

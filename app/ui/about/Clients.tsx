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
    <section className=" bg-gray200 w-full my-10">
      <Container className=" py-10">
        <Reviews items={reviews} />
        <Head text="best jobs for you" title="Our students work here" />
        <div className=' grid grid-cols-6'>
          {clients.map(item => (
            <Image key={item.id} src={item.src} alt='logo' className='w-[120px] h-[64px]' />
          ))}
        </div>
      </Container>
    </section>
  );
};

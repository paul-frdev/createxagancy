import { Head } from '../Head';
import { Reviews } from '../Reviews';
import { Container } from '../elements/Container';
import { ReviewsType } from '@/types';
import React from 'react';

type IClients = {
  reviews: ReviewsType[];
};
export const Clients: React.FC<IClients> = ({ reviews }) => {
  return (
    <section className=" bg-gray200 w-full my-10">
      <Container className=" py-10">
        <Reviews items={reviews} />
        <Head text="best jobs for you" title="Our students work here" />
      </Container>
    </section>
  );
};

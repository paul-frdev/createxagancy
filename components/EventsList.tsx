import { Filters } from './Filters';
import { Container } from './ui/Container';
import { Heading } from './ui/Heading';
import { Typography } from './ui/Typography';
import React from 'react';

export const EventsList = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="w-full my-10">
          <Typography className="text-center mb-0">Our events</Typography>
          <Heading variant="h3" className="text-center">
            Lectures, workshops & master-classes
          </Heading>
        </div>
        <Filters />
      </Container>
    </section>
  );
};

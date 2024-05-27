'use client';

import { Filters } from '../Filters';
import { Subscribe } from '../Subscribe';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Typography } from '../elements/Typography';
import { EventItem } from './EventItem';
import { cn } from '@/app/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import React, { useState } from 'react';

type EventListProps = {
  events: WorkshopPreview[];
};
export const EventList: React.FC<EventListProps> = ({ events }) => {
  const [styled, setStyled] = useState('flex');
  const flexStyles = `flex justify-between items-center flex-col`;
  const gridStyles = `grid grid-cols-3 w-full gap-4`;

  return (
    <>
      <section className="w-full">
        <Container>
          <div className="w-full my-10">
            <Typography className="text-center mb-0">Our events</Typography>
            <Heading variant="h3" className="text-center">
              Lectures, workshops & master-classes
            </Heading>
          </div>
          <Filters styled={styled} setStyled={setStyled} />
          <div className={cn(``, styled === 'flex' ? flexStyles : gridStyles)}>
            {events.map((event) => (
              <EventItem key={event.id} event={event} style={styled} />
            ))}
          </div>
        </Container>
      </section>
      <Subscribe />
    </>
  );
};

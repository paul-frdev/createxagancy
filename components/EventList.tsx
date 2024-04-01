'use client';

import { EventFlex } from './EventFlex';
import { Filters } from './Filters';
import { Subscribe } from './common/Subscribe';
import { Container } from './ui/Container';
import { Heading } from './ui/Heading';
import { Typography } from './ui/Typography';
import { WorkshopCard } from './ui/WorkshopCard';
import { cn } from '@/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import React, { useCallback, useEffect, useState } from 'react';

type EventListProps = {
  events: WorkshopPreview[];
};
export const EventList: React.FC<EventListProps> = ({ events }) => {
  const [query, setquery] = useState('');
  const [topic, setTopic] = useState('');
  const [sortBy, setSortBY] = useState('newest');
  const [count, setCount] = useState('6');
  const [styled, setStyled] = useState('flex');
  const [selectedEvents, setSelectedEvents] = useState<WorkshopPreview[]>(events);

  const flexStyles = `flex justify-between items-center flex-col`;
  const gridStyles = `grid grid-cols-3 w-full gap-4`;

  useEffect(() => {
    if (topic === 'All' || !topic) {
      setSelectedEvents(events);
    } else {
      changeList(events);
    }
  }, [topic]);

  function changeList(events: WorkshopPreview[]) {
    const changedEventsList = [];
    if (topic) {
      for (const item of events) {
        if (item.type === topic) {
          changedEventsList.push(item);
        }
      }
    }

    return setSelectedEvents(changedEventsList);
  }

  return (
    <section className="w-full">
      <Container>
        <div className="w-full my-10">
          <Typography className="text-center mb-0">Our events</Typography>
          <Heading variant="h3" className="text-center">
            Lectures, workshops & master-classes
          </Heading>
        </div>
        <Filters styled={styled} setCount={setCount} setSortBY={setSortBY} setStyled={setStyled} setTopic={setTopic} />
        <div className={cn(``, styled === 'flex' ? flexStyles : gridStyles)}>
          {selectedEvents
            ? selectedEvents.map((event) => (
                <div
                  key={event.id}
                  className={cn(
                    `w-full h-auto bg-white rounded mb-6 py-4  px-2  gap-x-[1.5rem] border hover:shadow-eventShadow border-solid border-gray300`,
                    styled == 'flex' ? 'flex justify-between items-center flex-row py-4  px-6 last:mb-10' : 'flex justify-start items-start flex-col max-w-[390px] mb-0 p-6'
                  )}
                >
                  <EventFlex event={event} style={styled} />
                </div>
              ))
            : null}
        </div>
      </Container>
      <Subscribe />
    </section>
  );
};

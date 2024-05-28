'use client';

import { Filters } from '../Filters';
import { Subscribe } from '../Subscribe';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Typography } from '../elements/Typography';
import { Pagination } from '../pagination/Pagination';
import { EventItem } from './EventItem';
import { cn } from '@/app/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type EventListProps = {
  events: WorkshopPreview[];
  totalPages: number;
};
export const EventList: React.FC<EventListProps> = ({ events, totalPages }) => {
  const [styled, setStyled] = useState('flex');
  const [topic, setTopic] = useState('all');
  const [sort, setSort] = useState('newest');
  const [count, setCount] = useState('6');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const flexStyles = `flex justify-between items-center flex-col`;
  const gridStyles = `grid grid-cols-3 w-full gap-4`;

  const setParams = (key: string, value: string | number) => {
    params.set(key, value.toString());
  };

  useEffect(() => {
    setParams('limit', count);
    setParams('topic', topic);
    setParams('filter', sort);
    setParams('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, [count, topic, sort]);

  const createPageURL = (pageNumber: number | string) => {
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <section className="w-full">
        <Container className="pb-5 xsm:pb-12">
          <div className="w-full my-10">
            <Typography className="text-center mb-0">Our events</Typography>
            <Heading variant="h3" className="text-center">
              Lectures, workshops & master-classes
            </Heading>
          </div>
          <Filters setCount={setCount} setTopic={setTopic} setSort={setSort} setParams={setParams} events={events} styled={styled} setStyled={setStyled} />
          <div className={cn(``, styled === 'flex' ? flexStyles : gridStyles)}>
            {events.map((event) => (
              <EventItem key={event.id} event={event} style={styled} />
            ))}
          </div>
          <Pagination currentPage={searchParams.get('page')} createPageURL={createPageURL} totalPages={totalPages} />
        </Container>
      </section>
      <Subscribe />
    </>
  );
};

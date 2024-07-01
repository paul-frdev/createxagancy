'use client';

import { Pagination } from '../pagination/Pagination';
import { EventItem } from './EventItem';
import { cn } from '@/app/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import React from 'react';

type EventListProps = {
  events: WorkshopPreview[];
  totalPages: number;
  listStyle?: string;
};
export const EventList: React.FC<EventListProps> = ({ events, totalPages, listStyle }) => {
  const flexStyles = `flex justify-between items-center flex-col`;
  const gridStyles = `grid max-w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 mb-8`;

  return (
    <>
      <div className={cn(``, listStyle === 'flex' ? flexStyles : gridStyles)}>
        {events.map((event) => (
          <EventItem key={event.id} event={event} listStyle={listStyle} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </>
  );
};

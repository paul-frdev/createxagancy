'use client';

import { Pagination } from '../pagination/Pagination';
import { EventItem } from './EventItem';
import { cn } from '@/app/lib/utils';
import { WorkshopPreview } from '@/types/workshop';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

type EventListProps = {
  events: WorkshopPreview[];
  totalPages: number;
  listStyle?: string
};
export const EventList: React.FC<EventListProps> = ({ events, totalPages, listStyle }) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const flexStyles = `flex justify-between items-center flex-col`;
  const gridStyles = `grid max-w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4`;

  const setParams = (key: string, value: string | number) => {
    params.set(key, value.toString());
  };

  useEffect(() => {
    setParams('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, []);

  const createPageURL = (pageNumber: number | string) => {
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <div className={cn(``, listStyle === 'flex' ? flexStyles : gridStyles)}>
        {events.map((event) => (
          <EventItem key={event.id} event={event} listStyle={listStyle} />
        ))}
      </div>
      <Pagination currentPage={searchParams.get('page')} createPageURL={createPageURL} totalPages={totalPages} />
    </>
  );
};

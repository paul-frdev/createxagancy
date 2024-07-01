import { fetchEventsPages, filterEvents } from '@/app/actions/getEvents';
import React from 'react'
import { EventList } from './EventList';
import { EmptyState } from '../EmptyState';

const EventListClient = async ({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    topic?: string;
    limit?: string;
    query?: string;
    page?: string;
    style?: string;
  };
}) => {

  const events = await filterEvents(searchParams.limit, searchParams.filter, searchParams.topic, searchParams.query, searchParams.page);
  const pages = await fetchEventsPages(searchParams.topic, searchParams.query, searchParams.filter);

  const countTotalPages = Math.round(pages / +searchParams.limit);
  return (
    <>
      {events.length ? (<EventList events={events} totalPages={countTotalPages} listStyle={searchParams.style} />) : <EmptyState title='There are no events based on your filters' message='Try ' />}
    </>
  )
}

export default EventListClient
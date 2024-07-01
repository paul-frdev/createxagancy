import { filterEvents } from '../actions/getEvents';
import { Filters } from '../ui/Filters';
import { Subscribe } from '../ui/Subscribe';
import { Heading } from '../ui/elements/Heading';
import { Typography } from '../ui/elements/Typography';
import EventListClient from '../ui/events/EventListClient';
import { CardSkeleton } from '../ui/skeletons/CardSkeleton';
import { EventFlexSkeleton } from '../ui/skeletons/EventFlexSkeleton';
import { Container } from '@mui/material';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Events',
  description: 'page about upcoming events',
};

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    topic?: string;
    page?: string;
    query?: string;
    count?: string;
    style?: string;
  };
}) {
  const filter = searchParams.filter || '';
  const topic = searchParams.topic || '';
  const limit = searchParams.count || '6';
  const query = searchParams.query || '';
  const page = searchParams.page || '1';
  const style = searchParams?.style || 'flex';

  const events = await filterEvents(limit, filter, topic, query, page);

  const isKey = `${filter}-${topic}-${limit}-${query}-${page}-${style}`;

  return (
    <>
      <section className="w-full">
        <Container className="pb-5 xsm:pb-12">
          <div className="w-full my-10">
            <Typography className="text-center mb-0">Our events</Typography>
            <Heading variant="h3" className="text-center text-[2rem] xmd:text-[2.875rem]">
              Lectures, workshops & master-classes
            </Heading>
          </div>
          <Filters currentStyle={style} />
          <Suspense key={isKey} fallback={style === 'flex' ? <EventFlexSkeleton items={events} /> : <CardSkeleton items={events} height={330} />}>
            <EventListClient searchParams={{ filter, topic, limit, query, page, style }} />
          </Suspense>
        </Container>
      </section>
      <Subscribe />
    </>
  );
}

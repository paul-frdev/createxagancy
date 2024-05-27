import { filterEvents, getEvents } from '../actions/getEvents';
import { EventList } from '../ui/events/EventList';

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    topic?: string;
    page?: string;
    query?: string;
    limit?: string;
  };
}) {
  const filter = searchParams.filter || 'newest';
  const topic = searchParams.topic || 'all';
  const limit = searchParams.limit || '6';
  const query = searchParams.query || '';

  // console.log(filter, topic, limit, query);

  const events = await filterEvents(limit, filter, topic, query);

  console.log(events);

  return (
    <>
      <EventList events={events} />
    </>
  );
}

import { fetchEventsPages, filterEvents } from '../actions/getEvents';
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
  const topic = searchParams.topic || '';
  const limit = searchParams.limit || '6';
  const query = searchParams.query || '';
  const page = searchParams.page || '1';

  const events = await filterEvents(limit, filter, topic, query, page);
  const pages = await fetchEventsPages(topic, query, filter);

  const countTotalPages = Math.round(pages / +limit);

  return (
    <>
      <EventList events={events} totalPages={countTotalPages} />
    </>
  );
}

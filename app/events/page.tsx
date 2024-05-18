import { getEvents } from '../actions/getEvents';
import { EventList } from '../ui/events/EventList';


export default async function Home() {

  const events = await getEvents()

  return (
    <>
      <EventList events={events} />
    </>
  );
}

import { getEventById, getEvents } from '@/app/actions/getEvents';
import { Event } from '@/app/ui/eventId/Event';
import { IEventId } from '@/types/courses';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Event',
};

const EventPage = async ({ params }: { params: IEventId }) => {
  const { eventId } = params;

  const event = await getEventById({ eventId });
  const events = await getEvents();

  const formattedEvent = {
    ...event,
    faq: event?.faq.map((question) => ({
      id: question.id,
      text: question.text,
      title: question.title,
      pannel: question.id.toString(),
    })),
    socialLinks: event?.socialLinks.map((social) => ({
      id: social.id,
      url: social.url,
    })),
  };

  return (
    <>
      <Event events={events} event={formattedEvent} />
    </>
  );
};

export default EventPage;

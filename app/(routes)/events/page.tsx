import courses from '@/app/courses.json';
import workshops from '@/app/events.json';
import { EventsList } from '@/components/EventsList';
import { CourseType } from '@/types';

export default function Home() {
  const workshopsPreview = workshops.map((workshop) => ({
    id: workshop.id,
    date: workshop.date,
    time: workshop.time,
    title: workshop.title,
    type: workshop.type,
  }));

  return (
    <>
      <EventsList />
    </>
  );
}

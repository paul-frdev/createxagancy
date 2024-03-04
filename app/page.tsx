import courses from '@/app/courses.json';
import workshops from '@/app/events.json';
import posts from '@/app/posts.json';
import reviews from '@/app/reviews.json';
import team from '@/app/team.json';
import { Landing } from '@/components/landing/Landing';
import { CourseType } from '@/types';

export default function Home() {
  const workshopsPreview = workshops.map((workshop) => ({
    id: workshop.id,
    date: workshop.date,
    time: workshop.time,
    title: workshop.title,
    type: workshop.type,
  }));

  const coursesPreview: CourseType[] = courses.map((course) => ({
    id: course.id,
    src: course.src,
    alt: course.alt,
    label: course.label,
    colorLabel: course.colorLabel,
    text: course.text,
    author: course.author,
    price: course.price[0].value || '',
  }));
  return (
    <>
      <Landing reviews={reviews} team={team} workshops={workshopsPreview} posts={posts} courses={coursesPreview} />
    </>
  );
}

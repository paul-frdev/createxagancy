import { getCourses } from './actions/getCourses';
import { getEvents } from './actions/getEvents';
import { getPosts } from './actions/getPosts';
import { getReviews } from './actions/getReviews';
import { getTeam } from './actions/getTeam';
import { Landing } from '@/app/ui/landing/Landing';

export default async function Home() {
  const [courses, events, team, posts, reviews] = await Promise.all([getCourses(), getEvents(), getTeam(), getPosts({ number: 6 }), getReviews()]);

  return (
    <>
      <Landing events={events} courses={courses} reviews={reviews} team={team} posts={posts} />
    </>
  );
}

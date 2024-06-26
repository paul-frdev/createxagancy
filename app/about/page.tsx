import { Metadata } from 'next';
import { getPosts } from '../actions/getPosts';
import { getReviews } from '../actions/getReviews';
import { getTeam } from '../actions/getTeam';
import { Subscribe } from '../ui/Subscribe';
import { AboutUs } from '../ui/about/AboutUs';
import { AboutVideo } from '../ui/about/AboutVideo';
import { Clients } from '../ui/about/Clients';
import { CoreValues } from '../ui/about/CoreValues';
import { Study } from '../ui/about/Study';
import { Teach } from '../ui/about/Teach';
import { Team } from '../ui/about/Team';
import { Posts } from '../ui/posts/Posts';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = async () => {
  const [team, reviews, posts] = await Promise.all([getTeam(), getReviews(), getPosts({ number: 3 })]);
  return (
    <>
      <AboutUs />
      <AboutVideo />
      <CoreValues />
      <Teach />
      <Study />
      <Team members={team} />
      <Clients reviews={reviews} />
      <Posts items={posts} />
      <Subscribe />
    </>
  );
};

export default AboutPage;

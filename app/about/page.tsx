import { getReviews } from '../actions/getReviews';
import { getTeam } from '../actions/getTeam';
import { AboutUs } from '../ui/about/AboutUs';
import { AboutVideo } from '../ui/about/AboutVideo';
import { Clients } from '../ui/about/Clients';
import { CoreValues } from '../ui/about/CoreValues';
import { Study } from '../ui/about/Study';
import { Teach } from '../ui/about/Teach';
import { Team } from '../ui/about/Team';

const AboutPage = async () => {
  const [team, reviews] = await Promise.all([getTeam(), getReviews()]);
  return (
    <>
      <AboutUs />
      <AboutVideo />
      <CoreValues />
      <Teach />
      <Study />
      <Team members={team} />
      <Clients reviews={reviews} />
    </>
  );
};

export default AboutPage;

import { AboutUs } from '../ui/about/AboutUs';
import { AboutVideo } from '../ui/about/AboutVideo';
import { CoreValues } from '../ui/about/CoreValues';
import { Teach } from '../ui/about/Teach';

const AboutPage = async () => {
  return (
    <>
      <AboutUs />
      <AboutVideo />
      <CoreValues />
      <Teach />
    </>
  );
};

export default AboutPage;

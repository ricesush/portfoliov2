import HeaderSection from './HeaderSection';
import AboutSection from './AboutSection';
import Contact from './Contact';
import TechStack from './TechStack';
import WorkPreference from './WorkPreference';

import { Milestone } from './Milestone';
import { Cetrification } from './Certificates';

export const Home = () => {
  return (
    <div>
      <HeaderSection />
      <section className='d-lg-flex pt-5 justify-content-around'>
        <AboutSection />
        <div className='d-flex border col-lg-6'>
          <Contact />
          <WorkPreference />
        </div>
      </section>
      <section className='d-lg-flex'>
        <TechStack />
        <Cetrification />
      </section>
      <section className='d-lg-flex'>
        <Milestone />
      </section>
    </div>
  );
};

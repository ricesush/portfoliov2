import HeaderSection from './HeaderSection';
import AboutSection from './AboutSection';
import Contact from './Contact';
import TechStack from './TechStack';
import WorkPreference from './WorkPreference';

import { Milestone } from './Milestone';
import { Cetrification } from './Certificates';
import Preloader from './Preloader';

export const Home = () => {
  return (
    <div>
      <section className='border-bottom py-5 shadow headerSection'>
        <HeaderSection />
      </section>
      <section className='d-lg-flex pt-5 justify-content-around container'>
        <AboutSection />
        <div className='d-lg-flex p-5  border col-lg-6'>
          <Contact />
          <WorkPreference />
        </div>
      </section>
      <section className='d-lg-flex container'>
        <TechStack />
        <Cetrification />
      </section>
      <section className='d-lg-flex'>
        <Milestone />
      </section>
    </div>
  );
};

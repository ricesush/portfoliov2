import HeaderSectionTest from './HeaderSectionTest';
import AboutSection from './AboutSection';
import Contact from './Contact';
import TechStack from './TechStack';
import WorkPreference from './WorkPreference';

import { Milestone } from './Milestone';
import { Cetrification } from './Certificates';

export const Home = () => {
  return (
    <div>
      <section className='border-bottom py-5 shadow headerSection'>
        <HeaderSectionTest />
      </section>
      <section className='d-lg-flex pt-5 justify-content-around container'>
        <AboutSection />
        <div className='d-md-flex col-lg-6 shadow'>
          <Contact />
          <WorkPreference />
        </div>
      </section>
      <section className='d-lg-flex container pt-5 pt-lg-0'>
        <TechStack />
        <Cetrification />
      </section>
      <section className='d-lg-flex'>
        <Milestone />
      </section>
    </div>
  );
};

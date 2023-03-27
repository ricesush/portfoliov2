import HeaderSectionTest from '../components/HeaderSectionTest';
import AboutSection from '../components/AboutSection';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';
import WorkPreference from '../components/WorkPreference';

import { Milestone } from '../components/Milestone';
import { Cetrification } from '../components/Certificates';

export const Home = () => {
  return (
    <div className=''>
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

import HeaderSectionTest from '../components/HeaderSectionTest';
import AboutSection from '../components/AboutSection';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';
import WorkPreference from '../components/WorkPreference';
import { useState } from 'react';
import { Milestone } from '../components/Milestone';
import { Cetrification } from '../components/Certificates';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <section
        className={`border-bottom py-5 shadow headerSection${
          isLoading ? 'h85' : ''
        }`}
        onLoad={() => setIsLoading(false)}
      >
        <HeaderSectionTest />
      </section>
      <section
        className='d-lg-flex pt-5 justify-content-around container'
        data-aos='fade-up'
      >
        <AboutSection />
        <div className='d-md-flex col-lg-6 shadow'>
          <Contact />
          <WorkPreference />
        </div>
      </section>
      <section className='d-lg-flex container pt-5 pt-lg-0' data-aos='fade-up'>
        <TechStack />
        <Cetrification />
      </section>
      <section className='d-lg-flex'>
        <Milestone />
      </section>
    </div>
  );
};

import HeaderSection from '../components/HeaderSection';
import AboutSection from '../components/AboutSection';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';
import WorkPreference from '../components/WorkPreference';
import { useState } from 'react';
import { Milestone } from '../components/Milestone';
import { Certification } from '../components/Certificates';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      
      <section
        className='d-lg-flex pt-5 justify-content-around container'
        data-aos='fade-up'
      >
        <AboutSection />
        <div className='d-md-flex col-lg-6'>
          <Contact />
          <WorkPreference />
        </div>
      </section>

      <section
        className={`border-bottom py-4 my-5 shadow headerSection${
          isLoading ? 'h85' : ''
        }`}
        onLoad={() => setIsLoading(false)}
      >
        <HeaderSection />
      </section>

      <section className='container ' data-aos='fade-up'>
        <TechStack />
      </section>
      <section className=''>
        <Certification />
        <Milestone />
      </section>
    </div>
  );
};

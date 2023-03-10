import '../css/home.css';

import AboutSection from '../components/AboutSection';
import HeaderSection from '../components/HeaderSection';
import TechStack from '../components/TechStack';
import WorkPreference from '../components/WorkPreference';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <div>
        <HeaderSection />
        <section className='d-lg-flex pt-5'>
          <AboutSection />
          <Contact />
        </section>
        <section className='d-lg-flex pt-lg-5'>
          <TechStack />
          <WorkPreference />
        </section>
      </div>
    </div>
  );
};

export default Home;

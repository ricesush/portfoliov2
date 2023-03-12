import '../css/home.css';

import AboutSection from '../components/AboutSection';
import HeaderSection from '../components/HeaderSection';
import TechStack from '../components/TechStack';
import WorkPreference from '../components/WorkPreference';

const Home = () => {
  return (
    <div>
      <div>
        <HeaderSection />
        <section className='d-lg-flex pt-5'>
          <AboutSection />
          <TechStack />
        </section>
        <section className='d-lg-flex pt-5'>
          <WorkPreference />
        </section>
      </div>
    </div>
  );
};

export default Home;

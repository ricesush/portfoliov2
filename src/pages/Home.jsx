import '../css/home.css';

import AboutSection from '../components/AboutSection';
import HeaderSection from '../components/HeaderSection';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <div>
      <div>
        <HeaderSection />

        <section className='d-lg-flex pt-5'>
          <AboutSection />
          <TechStack />
        </section>
      </div>
    </div>
  );
};

export default Home;

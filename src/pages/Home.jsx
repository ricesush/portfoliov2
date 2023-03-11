import '../css/home.css';

import AboutSection from '../components/AboutSection';
import HeaderSection from '../components/HeaderSection';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <div className='d-flex'>
      <div className='col-lg-12'>
        <HeaderSection />
        <AboutSection />
        <TechStack />
      </div>
    </div>
  );
};

export default Home;

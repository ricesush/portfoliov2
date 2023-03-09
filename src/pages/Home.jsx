import '../css/home.css';

import AboutSection from '../components/AboutSection';
import HeaderSection from '../components/HeaderSection';

const Home = () => {
  return (
    <div className='d-flex bg-img'>
      <div className='col-lg-12'>
        <HeaderSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default Home;

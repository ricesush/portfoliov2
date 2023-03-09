import ggNext from '../../src/images/ggnext.PNG';
import tgh from '../../src/images/tgh.png';
import df from '../../src/images/DF.PNG';

import Projects from '../components/ProjectContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const ProjectSection = () => {
  return (
    <section className='d-flex pb-3 bg-img'>
      <header className='col-lg-12 fs-5 text-light fw-bold mt-5 d-flex align-items-end justify-content-between'>
        <h2 className='col-lg-3'>
          <span className='yellowText'>Recent</span> Projects
        </h2>
        <div className='col-lg-9 col-md-8'>
          <hr className='text-light mt-0' />
        </div>
      </header>
      <Projects
        projectTitle='Dream-Fields'
        category='Real Estate Web App'
        shortDescription='Full-Stack Web Application'
        href='/'
        imgSrc={df}
      >
        <FontAwesomeIcon
          icon={brands('html5')}
          title='HTML5'
          className='fs-4'
        />
        <FontAwesomeIcon icon={brands('css3')} title='CSS3' className='fs-4' />
        <FontAwesomeIcon
          icon={brands('bootstrap')}
          title='Bootstrap5'
          className='fs-4'
        />
        <FontAwesomeIcon icon={brands('php')} title='PHP' className='fs-4' />
        <FontAwesomeIcon
          icon={brands('laravel')}
          title='Laravel'
          className='fs-4'
        />
      </Projects>
      <hr className='col-lg-11 text-light mx-5 my-4' />
      <Projects
        projectTitle='GG-Next'
        category='Gaming Web App'
        shortDescription='API-driven Mini Web Application'
        href='https://gg-next-neon.vercel.app/'
        imgSrc={ggNext}
      >
        <FontAwesomeIcon
          icon={brands('html5')}
          title='HTML5'
          className='fs-4'
        />
        <FontAwesomeIcon icon={brands('css3')} title='CSS3' className='fs-4' />
        <FontAwesomeIcon
          icon={brands('bootstrap')}
          title='Bootstrap5'
          className='fs-4'
        />
        <FontAwesomeIcon
          icon={brands('js')}
          title='Javascript'
          className='fs-4'
        />
      </Projects>
      <Projects
        projectTitle='The Greenhouse'
        category='Agriculture Content'
        shortDescription='Static, Multi-page Responsive Website'
        href='https://thegreenhouse.vercel.app/'
        imgSrc={tgh}
      >
        <FontAwesomeIcon
          icon={brands('html5')}
          title='HTML5'
          className='fs-4'
        />
        <FontAwesomeIcon icon={brands('css3')} title='CSS3' className='fs-4' />
        <FontAwesomeIcon
          icon={brands('bootstrap')}
          title='Bootstrap5'
          className='fs-4'
        />
        <FontAwesomeIcon
          icon={brands('js')}
          title='Javascript'
          className='fs-4'
        />
      </Projects>
      <hr className='col-lg-11 text-light mx-5 my-4' />
    </section>
  );
};

export default ProjectSection;

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
    <section className='bg-img'>
      <header className='col-lg-12 '>
        <h2 className='text-center fs-1 py-lg-5 my-3'>
          <span className='yellowText'>Recent</span> Projects
        </h2>
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
          className='fs-3'
        />
        <FontAwesomeIcon icon={brands('css3')} title='CSS3' className='fs-3' />
        <FontAwesomeIcon
          icon={brands('bootstrap')}
          title='Bootstrap5'
          className='fs-3'
        />
        <FontAwesomeIcon icon={brands('php')} title='PHP' className='fs-3' />
        <FontAwesomeIcon
          icon={brands('laravel')}
          title='Laravel'
          className='fs-3'
        />
      </Projects>
      <hr className='col-lg-11 mx-5 my-4' />
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
          className='fs-3'
        />
        <FontAwesomeIcon icon={brands('css3')} title='CSS3' className='fs-3' />
        <FontAwesomeIcon
          icon={brands('bootstrap')}
          title='Bootstrap5'
          className='fs-3'
        />
        <FontAwesomeIcon
          icon={brands('js')}
          title='Javascript'
          className='fs-3'
        />
      </Projects>
      <hr className='col-lg-11 mx-5 my-4' />
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
          className='fs-3'
        />
        <FontAwesomeIcon icon={brands('css3')} title='CSS3' className='fs-3' />
        <FontAwesomeIcon
          icon={brands('bootstrap')}
          title='Bootstrap5'
          className='fs-3'
        />
        <FontAwesomeIcon
          icon={brands('js')}
          title='Javascript'
          className='fs-3'
        />
      </Projects>
    </section>
  );
};

export default ProjectSection;

const book = [
  {
    author: 'this is author',
    title: 'this is title',
  },
  { author: 'This is the Author', title: 'This is the title' },
];

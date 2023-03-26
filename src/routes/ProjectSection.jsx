import ggNext from '../assets/ggnext.webp';
import tgh from '../assets/tgh.webp';
import df from '../assets/DF.webp';

import Project from '../components/ProjectContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faLaravel,
  faPhp,
} from '@fortawesome/free-brands-svg-icons';

const ProjectSection = () => {
  return (
    <section className='container shadow pb-5'>
      <header className='col-lg-12 '>
        <h2 className='text-center fs-1 py-lg-5 my-3'>
          <span className='yellowText'>Recent</span> Projects
        </h2>
      </header>
      <Project
        projectTitle='Dream-Fields'
        category='Real Estate Web App'
        shortDescription='Full-Stack Web Application'
        href='#'
        imgSrc={df}
        repository='https://github.com/ricesush/dream-fields'
      >
        <FontAwesomeIcon icon={faHtml5} title='HTML5' className='fs-3' />
        <FontAwesomeIcon icon={faCss3} title='CSS3' className='fs-3' />
        <FontAwesomeIcon
          icon={faBootstrap}
          title='Bootstrap5'
          className='fs-3'
        />
        <FontAwesomeIcon icon={faPhp} title='PHP' className='fs-3' />
        <FontAwesomeIcon icon={faLaravel} title='Laravel' className='fs-3' />
      </Project>
      <hr className='yellowText col-lg-11 mx-5 my-3 mb-5' />
      <Project
        projectTitle='GG-Next '
        category='Gaming Web App'
        shortDescription='API-driven Mini Web Application'
        href='https://gg-next-neon.vercel.app/'
        imgSrc={ggNext}
        repository='https://github.com/DavidQuebengco/project-2'
      >
        <FontAwesomeIcon icon={faHtml5} title='HTML5' className='fs-3' />
        <FontAwesomeIcon icon={faCss3} title='CSS3' className='fs-3' />
        <FontAwesomeIcon
          icon={faBootstrap}
          title='Bootstrap5'
          className='fs-3'
        />
        <FontAwesomeIcon icon={faJs} title='Javascript' className='fs-3' />
      </Project>
      <hr className='yellowText col-lg-11 mx-5 my-3 mb-5' />
      <Project
        projectTitle='The Greenhouse'
        category='Agriculture Content'
        shortDescription='Static, Multi-page Responsive Website'
        href='https://thegreenhouse.vercel.app/'
        imgSrc={tgh}
        repository='https://github.com/ricesush/Hydroponics'
      >
        <FontAwesomeIcon icon={faHtml5} title='HTML5' className='fs-3' />
        <FontAwesomeIcon icon={faCss3} title='CSS3' className='fs-3' />
        <FontAwesomeIcon
          icon={faBootstrap}
          title='Bootstrap5'
          className='fs-3'
        />
        <FontAwesomeIcon icon={faJs} title='Javascript' className='fs-3' />
      </Project>
    </section>
  );
};

export default ProjectSection;

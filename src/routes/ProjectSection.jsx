import ggNext from '../assets/ggnext.webp';
import tgh from '../assets/tgh.webp';
import df from '../assets/DF.webp';

import Project from '../components/ProjectContent';

import html from '../assets/HTML5.svg.png';
import css from '../assets/CSS3.svg.png';
import bs5 from '../assets/Bootstrap.svg.png';
import js from '../assets/JavaScript.png';
import react from '../assets/React.svg.png';
import vite from '../assets/Vitejs.svg.png';
import php from '../assets/PHP.svg.png';
import laravel from '../assets/Laravel.svg.png';

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
  const techStacks = [
    { src: html, title: 'HTML5', id: 1 },
    { src: css, title: 'CSS3', id: 2 },
    { src: bs5, title: 'Bootstrap', id: 3 },
    { src: js, title: 'JavaScript', id: 4 },
    { src: react, title: 'React', id: 5 },
    { src: vite, title: 'Vite', id: 6 },
    { src: php, title: 'PHP', id: 7 },
    { src: laravel, title: 'Laravel', id: 8 },
  ];

  return (
    <section className='container shadow pb-5 bg-glass'>
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
        {techStacks.map((tech) => {
          if (tech.id < 4 || tech.id > 6) {
            return (
              <img
                src={tech.src}
                title={tech.title}
                alt={tech.title}
                width={25}
                className='mx-2'
              />
            );
          }
        })}
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
        {techStacks.map((tech) => {
          if (tech.id < 5) {
            return (
              <img
                src={tech.src}
                title={tech.title}
                alt={tech.title}
                width={25}
                className='mx-2'
              />
            );
          }
        })}
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
        {techStacks.map((tech) => {
          if (tech.id < 5) {
            return (
              <img
                src={tech.src}
                title={tech.title}
                alt={tech.title}
                width={25}
                className='mx-2'
              />
            );
          }
        })}
      </Project>
    </section>
  );
};

export default ProjectSection;

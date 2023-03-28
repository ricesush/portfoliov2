import html from '../assets/HTML5.svg.png';
import css from '../assets/CSS3.svg.png';
import bs5 from '../assets/Bootstrap.svg.png';
import js from '../assets/JavaScript.png';
import react from '../assets/React.svg.png';
import vite from '../assets/Vitejs.svg.png';
import php from '../assets/PHP.svg.png';
import laravel from '../assets/Laravel.svg.png';

import figma from '../assets/Figma.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFigma,
  faLaravel,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const TechStack = () => {
  const techStackList1 = [
    { src: html, title: 'HTML5', id: 1 },
    { src: css, title: 'CSS3', id: 2 },
    { src: bs5, title: 'Bootstrap', id: 3 },
    { src: js, title: 'JavaScript', id: 4 },
  ];

  const techStackList2 = [
    { src: react, title: 'React', id: 1 },
    { src: vite, title: 'Vite', id: 2 },
    { src: php, title: 'PHP', id: 3 },
    { src: laravel, title: 'Laravel', id: 4 },
  ];

  return (
    <section className='col-lg-6 border homeSections shadow'>
      <header className='fs-5 fw-bold position-absolute px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <h2 className='text-center text-light'>
          <span className=''>Tech</span> Stack
        </h2>
      </header>
      <div className=''>
        <div className='d-flex my-auto pt-4 mt-5'>
          {techStackList1.map((tech) => {
            return (
              <div className='d-grid p-2 mx-auto' key={tech.id}>
                <img
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={55}
                  className='mx-auto'
                />
                <small className='text-center mt-auto'>{tech.title}</small>
              </div>
            );
          })}
        </div>
        <div className='d-flex my-auto pt-4'>
          {techStackList2.map((tech) => {
            return (
              <div className='d-grid p-2 mx-auto' key={tech.id}>
                <img
                  src={tech.src}
                  title={tech.title}
                  alt={tech.title}
                  width={55}
                  className='mx-auto'
                />
                <small className='text-center mt-auto'>{tech.title}</small>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

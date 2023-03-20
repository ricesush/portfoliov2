import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faLaravel,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const TechStack = () => {
  return (
    <section className='col-lg-6 py-4 border'>
      <header className='fs-5 fw-bold border-bottom shadow-sm'>
        <h2 className='text-center'>
          <span className='yellowText'>Tech</span> Stack
        </h2>
      </header>
      <div className=''>
        <div className='fs-1 d-flex justify-content-around pt-4 ps-0 pe-0'>
          <divc className='d-grid '>
            <FontAwesomeIcon icon={faHtml5} title='HTML5' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              HTML5
            </label>
          </divc>
          <divc className='d-grid '>
            <FontAwesomeIcon icon={faCss3} title='CSS3' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              CSS3
            </label>
          </divc>
          <divc className='d-grid '>
            <FontAwesomeIcon
              icon={faBootstrap}
              title='Bootstrap'
              className='mx-auto'
            />
            <label htmlFor='' className='fs-6 text-center'>
              Bootstrap
            </label>
          </divc>
          <divc className='d-grid '>
            <FontAwesomeIcon
              icon={faJs}
              title='Javascript'
              className='mx-auto'
            />
            <label htmlFor='' className='fs-6 text-center'>
              Bootstrap
            </label>
          </divc>
        </div>
        <div className='fs-1 d-flex justify-content-around mt-4 ps-0 pe-0'>
          <divc className='d-grid '>
            <FontAwesomeIcon icon={faReact} title='React' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              React
            </label>
          </divc>
          <divc className='d-grid '>
            <FontAwesomeIcon icon={faFigma} title='Figma' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              Figma
            </label>
          </divc>
          <divc className='d-grid '>
            <FontAwesomeIcon icon={faPhp} title='PHP' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              PHP
            </label>
          </divc>
          <divc className='d-grid '>
            <FontAwesomeIcon
              icon={faLaravel}
              title='Laravel'
              className='mx-auto'
            />
            <label htmlFor='' className='fs-6 text-center'>
              Laravel
            </label>
          </divc>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

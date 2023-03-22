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
    <section className='col-lg-6  border'>
      <header className='fs-5 fw-bold position-absolute px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <h2 className='text-center text-light'>
          <span className=''>Tech</span> Stack
        </h2>
      </header>
      <div className='mt-5'>
        <div className='fs-1 d-flex justify-content-around pt-4 ps-0 pe-0'>
          <div className='d-grid '>
            <FontAwesomeIcon icon={faHtml5} title='HTML5' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              HTML5
            </label>
          </div>
          <div className='d-grid '>
            <FontAwesomeIcon icon={faCss3} title='CSS3' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              CSS3
            </label>
          </div>
          <div className='d-grid '>
            <FontAwesomeIcon
              icon={faBootstrap}
              title='Bootstrap'
              className='mx-auto'
            />
            <label htmlFor='' className='fs-6 text-center'>
              Bootstrap
            </label>
          </div>
          <div className='d-grid '>
            <FontAwesomeIcon
              icon={faJs}
              title='Javascript'
              className='mx-auto'
            />
            <label htmlFor='' className='fs-6 text-center'>
              Javascript
            </label>
          </div>
        </div>
        <div className='fs-1 d-flex justify-content-around mt-4 ps-0 pe-0'>
          <div className='d-grid '>
            <FontAwesomeIcon icon={faReact} title='React' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              React
            </label>
          </div>
          <div className='d-grid '>
            <FontAwesomeIcon icon={faFigma} title='Figma' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              Figma
            </label>
          </div>
          <div className='d-grid '>
            <FontAwesomeIcon icon={faPhp} title='PHP' className='mx-auto' />
            <label htmlFor='' className='fs-6 text-center'>
              PHP
            </label>
          </div>
          <div className='d-grid '>
            <FontAwesomeIcon
              icon={faLaravel}
              title='Laravel'
              className='mx-auto'
            />
            <label htmlFor='' className='fs-6 text-center'>
              Laravel
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

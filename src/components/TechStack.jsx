import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const TechStack = () => {
  return (
    <section className='col-lg-6 border p-5'>
      <header className='fs-5 fw-bold'>
        <h2 className='text-center'>
          <span className='yellowText'>Tech</span> Stack
        </h2>
      </header>
      <div className=''>
        <div className='fs-1 d-flex justify-content-around py-3 ps-0 pe-0'>
          <FontAwesomeIcon icon={brands('html5')} title='HTML5' />
          <FontAwesomeIcon icon={brands('css3')} title='CSS3' />
          <FontAwesomeIcon icon={brands('bootstrap')} />
          <FontAwesomeIcon icon={brands('js')} />
        </div>
        <div className='fs-1 d-flex justify-content-around p-3 ps-0 pe-0'>
          <FontAwesomeIcon icon={brands('react')} />
          <FontAwesomeIcon icon={brands('figma')} />
          <FontAwesomeIcon icon={brands('php')} />
          <FontAwesomeIcon icon={brands('laravel')} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;

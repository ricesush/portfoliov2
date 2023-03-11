import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const TechStack = () => {
  return (
    <section className='bg-img'>
      <header className='col-lg-12 fs-5 text-light fw-bold mt-5 d-flex align-items-end justify-content-between'>
        <h2 className='col-lg-2'>
          <span className='yellowText'>Tech</span> Stack
        </h2>
        <div className='col-lg-10 col-md-9'>
          <hr className='text-light mt-0' />
        </div>
      </header>
      <div className='text-light p-5 pb-0 fw-lighter'>
        <div className='fs-1 d-flex justify-content-around'>
          <FontAwesomeIcon icon={brands('html5')} title='HTML5' />
          <FontAwesomeIcon icon={brands('css3')} title='CSS3' />
          <FontAwesomeIcon icon={brands('bootstrap')} />
          <FontAwesomeIcon icon={brands('js')} />
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

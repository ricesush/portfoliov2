import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const TechStack = () => {
  return (
    <section className='text-light pt-0 p-3 pb-0'>
      <div className='text-center'>
        <small className='yellowText opacity-75'>Front-End</small>
      </div>
      <div className='fs-1 d-flex justify-content-around p-4 pt-3'>
        <FontAwesomeIcon icon={brands('html5')} title='HTML5' />
        <FontAwesomeIcon icon={brands('css3')} title='CSS3' />
        <FontAwesomeIcon icon={brands('bootstrap')} />
      </div>
      <div className='fs-1 d-flex justify-content-around p-4 pt-0'>
        <FontAwesomeIcon icon={brands('js')} />
        <FontAwesomeIcon icon={brands('react')} />
        <FontAwesomeIcon icon={brands('figma')} />
      </div>
      <div className='mt-2 text-center'>
        <small className='yellowText opacity-75'>Back-End & Framework</small>
      </div>
      <div className='fs-1 d-flex justify-content-around pb-3 pt-3'>
        <FontAwesomeIcon icon={brands('php')} />
        <FontAwesomeIcon icon={brands('laravel')} />
      </div>
    </section>
  );
};

export default TechStack;

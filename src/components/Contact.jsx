import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const Contact = () => {
  return (
    <section className='col-lg-6 m-1 p-5 rounded-4 shadow'>
      <header className='fs-5 fw-bold'>
        <h2 className='text-center'>
          <span className='yellowText'>Contact</span> Details
        </h2>
      </header>
      <div className='d-sm-flex justify-content-around pt-4 text-sm-start text-center'>
        <div className='justify-content-around'>
          <div>
            <FontAwesomeIcon
              icon={icon({
                name: 'envelope',
                style: 'solid',
              })}
            />
            <span> Pixelartme@gmail.com</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={icon({
                name: 'square-phone',
                style: 'solid',
              })}
            />{' '}
            <span>+63999-551-4413</span>{' '}
          </div>
        </div>
        <div className='fs-4 pt-sm-0 pt-4'>
          <div className='fs-6'>Quick Links:</div>
          <a href='https://www.linkedin.com/in/ejsan/' target='blank'>
            <FontAwesomeIcon icon={brands('linkedin')} className='socmed ' />
          </a>
          <a href='https://github.com/ricesush' target='blank'>
            <FontAwesomeIcon icon={brands('github')} className='socmed mx-3' />
          </a>
          <a href='https://www.facebook.com/RiceSush' target='blank'>
            <FontAwesomeIcon icon={brands('facebook')} className='socmed' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

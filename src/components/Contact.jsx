import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className='col-lg-6 p-5 rounded-1'>
      <header className='fs-5 fw-bold'>
        <h2 className='text-center'>
          <span className='yellowText'>Contact</span> Details
        </h2>
      </header>
      <div className='pt-4 text-sm-start text-center'>
        <div className='justify-content-around'>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> Pixelartme@gmail.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faSquarePhone} />{' '}
            <span>+63999-551-4413</span>{' '}
          </div>
        </div>
        <div className='fs-4 pt-sm-0 mt-5'>
          <div className='fs-6'>Quick Links:</div>
          <a href='https://www.linkedin.com/in/ejsan/' target='blank'>
            <FontAwesomeIcon icon={faLinkedin} className='socmed ' />
          </a>
          <a href='https://github.com/ricesush' target='blank'>
            <FontAwesomeIcon icon={faGithub} className='socmed mx-3' />
          </a>
          <a href='https://www.facebook.com/RiceSush' target='blank'>
            <FontAwesomeIcon icon={faFacebook} className='socmed' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

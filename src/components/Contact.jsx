import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className='col-lg-6 rounded-1 px-3'>
      <header className='fs-5 fw-bold'>
        <h2>
          <span className='yellowText'>Contact</span> Details
        </h2>
      </header>
      <div className='pt-4 text-sm-start text-center '>
        <div className='justify-content-around'>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <small> Pixelartme@gmail.com</small>
          </div>
          <div>
            <FontAwesomeIcon icon={faSquarePhone} />{' '}
            <small>+63999-551-4413</small>{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import coverImg from '../assets/cover.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const HeaderSectionTest = () => {
  return (
    <section className='col-lg-6 homeSections mx-auto'>
      <header className='fs-5 fw-bold position-absolute px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <h2 className='text-center text-light'>
          <span className=''>Erick-John Santosidad</span>
          <br />
          <small className='fs-6 yellowText fw-bold'>
            <FontAwesomeIcon icon={faLaptopCode} />
            <span> Jr. Full-Stack Developer</span>
          </small>
        </h2>
      </header>
      <div className='ms-md-auto p-lg-0 ps-md-5 '>
        <img
          src={coverImg}
          className='img-size2 mx-auto shadow rounded-3'
        ></img>
      </div>
      <div className='me-auto ps-md-5 text-center pt-3'>
        <small className=''>
          An enthusiastic Web Developer with passion for programming and love
          for work.
        </small>
        <div className='d-md-flex justify-content-center align-items-center pt-3'>
          <a
            type='button'
            className='btn custom-btn me-md-5 '
            target='_blank'
            href='https://drive.google.com/file/d/17XOk7XZZzX3RKqRqboJVWuuDHR_jnZ-X/view?usp=share_link'
          >
            <small>
              <span className='btn-text'>Download CV </span>
              <FontAwesomeIcon icon={faDownload} />
            </small>
          </a>
          <div className='fs-2 '>
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
      </div>
    </section>
  );
};

export default HeaderSectionTest;

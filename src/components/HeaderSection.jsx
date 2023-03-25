import myImage from '../assets/profilePic.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const HeaderSection = () => {
  return (
    <div className='d-md-flex my-5 container position-relative '>
      <div className='ms-md-auto p-lg-0 ps-md-5'>
        <img src={myImage} className='img-size mx-auto  '></img>
      </div>
      <div className='align-middle my-auto me-auto ps-md-5 text-center text-md-start'>
        <h5 className='fw-bold fs-1 pt-lg-0 pt-sm-3'>Erick-John Santosidad</h5>
        <p className='yellowText fw-bold'>
          <FontAwesomeIcon icon={faLaptopCode} />
          <span> Jr. Full-Stack Developer</span>
        </p>
        <div>
          An enthusiastic Web Developer with passion for programming and love
          for work.
        </div>
        <a
          type='button'
          className='btn custom-btn mt-3'
          target='_blank'
          href='https://drive.google.com/file/d/17XOk7XZZzX3RKqRqboJVWuuDHR_jnZ-X/view?usp=share_link'
        >
          <small>
            <span className='btn-text'>Download CV </span>
            <FontAwesomeIcon icon={faDownload} />
          </small>
        </a>
        <div className='fs-2 pt-sm-0 mt-5'>
          <small className='fs-6 fw-bold'>Find me at:</small>
          <br />
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
  );
};

export default HeaderSection;

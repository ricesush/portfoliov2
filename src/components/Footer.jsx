import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center pt-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            to='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 fw-bold'
          >
            E-J ESAN.
          </a>
        </div>
        <div className='mb-3 mb-md-0 text-muted'>
          Created by <small className='fw-bold'>PIXELARTME</small>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='fs-3'>
            <a href='https://www.linkedin.com/in/ejsan/' target='blank'>
              <FontAwesomeIcon icon={faLinkedin} className='socmed ' />
            </a>
          </li>
          <li className='mx-1 fs-3'>
            <a href='https://github.com/ricesush' target='blank'>
              <FontAwesomeIcon icon={faGithub} className='socmed mx-3' />
            </a>
          </li>
          <li className='fs-3'>
            <a href='https://www.facebook.com/RiceSush' target='blank'>
              <FontAwesomeIcon icon={faFacebook} className='socmed' />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

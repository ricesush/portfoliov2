import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            to='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 fw-bold'
          >
            E-J ESAN.
          </a>
          <span className='mb-3 mb-md-0 text-muted'>© 2022 Company, Inc</span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a href='https://www.linkedin.com/in/ejsan/' target='blank'>
              <FontAwesomeIcon icon={brands('linkedin')} className='socmed ' />
            </a>
          </li>
          <li className='ms-3'>
            <a href='https://github.com/ricesush' target='blank'>
              <FontAwesomeIcon
                icon={brands('github')}
                className='socmed mx-3'
              />
            </a>
          </li>
          <li className='ms-3'>
            <a href='https://www.facebook.com/RiceSush' target='blank'>
              <FontAwesomeIcon icon={brands('facebook')} className='socmed' />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;

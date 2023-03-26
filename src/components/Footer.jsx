import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const socmeds = [
    { href: 'https://www.linkedin.com/in/ejsan/', icon: faLinkedin, id: 1 },
    { href: 'https://github.com/ricesush', icon: faGithub, id: 2 },
    { href: 'https://www.facebook.com/RiceSush', icon: faFacebook, id: 3 },
  ];
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
        <ul className='nav col-md-4 justify-content-end list-unstyled'>
          {socmeds.map((contact) => {
            return (
              <li className='ps-3 fs-3' key={contact.id}>
                <a href={contact.href} target='blank'>
                  <FontAwesomeIcon icon={contact.icon} className='socmed ' />
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
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
    <div className='bg-glass border-0 border-top rounded-0'>
      <footer className='container d-sm-flex text-center flex-wrap justify-content-between align-items-center py-3 '>
        <div className='col-md-4 d-flex align-items-center'>
          <Link to='/' className='navbar-brand fw-bold'>
            e<span className='yellowText'>-</span>jesan
            <span className='yellowText'>.</span>
          </Link>
        </div>
        <div className='mb-3 mb-md-0 text-muted'>
          <small>Created by </small>
          <small className='fw-bold yellowText'>PIXELARTME</small>
        </div>
        <ul className='nav col-md-4 justify-content-end list-unstyled'>
          {socmeds.map((contact) => {
            return (
              <li className='ps-3 fs-3' key={contact.id}>
                <a href={contact.href} target='blank'>
                  <FontAwesomeIcon
                    icon={contact.icon}
                    className='socmed text-dark'
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

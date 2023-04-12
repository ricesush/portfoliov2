import coverImg from '../assets/cover_edit.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const HeaderSection = () => {
  const socmeds = [
    { href: 'https://www.linkedin.com/in/ejsan/', icon: faLinkedin, id: 1 },
    { href: 'https://github.com/ricesush', icon: faGithub, id: 2 },
    { href: 'https://www.facebook.com/RiceSush', icon: faFacebook, id: 3 },
  ];
  return (
    <div className='d-lg-flex my-5 container bg-glass '>
      <div class='card mb-3 mt-3  d-flex-md' style={{ maxWidth: '45rem' }}>
        <img src={coverImg} class='card-img-top' alt='...' />
        <div class='card-body bg-dark rounded-bottom px-5'>
          <p class='card-text'>
            <div className='d-sm-flex text-center justify-content-between align-items-center'>
              <div className=' d-md-flex align-items-center pt-md-0 pt-3'>
                {socmeds.map((socmed) => {
                  return (
                    <a href={socmed.href} target='blank' key={socmed.id}>
                      <FontAwesomeIcon
                        icon={socmed.icon}
                        className='socmed text-light px-2 fs-3'
                      />
                    </a>
                  );
                })}
              </div>
              <a
                type='button'
                className='btn custom-btn mt-sm-0 mt-3'
                target='_blank'
                href='https://drive.google.com/file/d/17XOk7XZZzX3RKqRqboJVWuuDHR_jnZ-X/view?usp=share_link'
              >
                <small>
                  <span className='btn-text'>Download CV </span>
                  <FontAwesomeIcon icon={faDownload} />
                </small>
              </a>
            </div>
          </p>
        </div>
      </div>
      <header className='mt-auto'>
        <div className='text-light m-3'>
          <div className='fs-2 fw-bold '>
            Hi, <br /> my name is <span className='yellowText'>Erick</span>,
          </div>
          <p>
            I am an enthusiastic Web Developer with passion for programming and
            love for work.
          </p>
        </div>
        <hr className='text-light' />
        <div className='text-light m-3 mb-5'>
          <small className='fw-bold yellowText'>Erick-John Santosidad</small>
          <br />
          <small className='fw-bold'>
            <FontAwesomeIcon icon={faLaptopCode} className='pe-1' /> Jr.
            Full-Stack Developer
          </small>
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;

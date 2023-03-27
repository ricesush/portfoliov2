import coverImg from '../assets/cover.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const HeaderSectionTest = () => {
  const socmeds = [
    { href: 'https://www.linkedin.com/in/ejsan/', icon: faLinkedin, id: 1 },
    { href: 'https://github.com/ricesush', icon: faGithub, id: 2 },
    { href: 'https://www.facebook.com/RiceSush', icon: faFacebook, id: 3 },
  ];
  return (
    <section
      className='col-lg-6 homeSections mx-auto position-relative'
      data-aos='zoom-in-up'
    >
      <header className='col-6 fw-bold position-absolute top-0 mt-md-5 start-0 px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <div className='fs-6 text-light mb-5 mt-3'>
          Hi, my name is Erick,
          <p>
            I am an enthusiastic Web Developer with passion for programming and
            love for work.
          </p>
        </div>
        <h2 className='text-light'>
          <small className='fs-6 yellowText'>Erick-John Santosidad</small>
          <br />
          <small className='fs-6  fw-bold'>
            <FontAwesomeIcon icon={faLaptopCode} className='pe-1' /> Jr.
            Full-Stack Developer
          </small>
        </h2>
      </header>
      <div className='ms-md-auto p-lg-0 ps-md-5 '>
        <img
          src={coverImg}
          className='img-size2 mx-auto rounded-3 pt-4 p-2 pt-md-0 rounded-4'
        ></img>
      </div>
      <div className='me-auto ps-md-5 text-center pt-3'>
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
          <div className='fs-2 d-md-flex align-items-center pt-md-0 pt-3'>
            <div className='fs-6 fw-bold text-light pe-3 ms-sm-auto'>
              Find me at:
            </div>
            {socmeds.map((socmed) => {
              return (
                <a href={socmed.href} target='blank' key={socmed.id}>
                  <FontAwesomeIcon
                    icon={socmed.icon}
                    className='socmed text-light pe-3'
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSectionTest;

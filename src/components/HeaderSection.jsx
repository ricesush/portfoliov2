import coverImg from '../assets/cover_edit.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import DF from '../assets/DF.webp';
import tgh from '../assets/tgh.webp';
import GG from '../assets/ggnext.webp';

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const HeaderSection = () => {
  const socmeds = [
    { href: 'https://www.linkedin.com/in/ejsan/', icon: faLinkedin, id: 1 },
    { href: 'https://github.com/ricesush', icon: faGithub, id: 2 },
    { href: 'https://www.facebook.com/RiceSush', icon: faFacebook, id: 3 },
  ];
  return (
    <div className='d-lg-flex my-5 g-0 container bg-transparent rounded-1 '>
      <div
        className='card d-flex-md bg-transparent border-0'
        style={{ maxWidth: '45rem' }}
      >
        <img src={coverImg} className='card-img-top ' alt='...' />
        <div className='card-img-overlay text-light col-4'>
          <h5 className='card-title bg-accent rounded-0 rounded-end rounded-bottom p-3'>
            Hello, <br /> my name is
            <span className='fs-3 yellowText ps-2'>Erick</span>{' '}
          </h5>
        </div>
      </div>

      <header className='mt-auto bg-accent'>
        <header className='col-lg-12'>
          <h2 className='text-center text-light fs-2 py-lg-2 my-3'>
            <span className='yellowText'>Recent</span> Projects
          </h2>
        </header>

        <div className='text-light m-3'>
          <div
            id='carouselExampleInterval'
            className='carousel slide'
            data-bs-ride='carousel'
            style={{ maxWidth: '45rem' }}
          >
            <div className='carousel-inner'>
              <div className='carousel-item active' data-bs-interval='5000'>
                <Link to='/projects'>
                  <img src={DF} className='d-block w-100' alt='...' />
                </Link>
              </div>
              <div className='carousel-item' data-bs-interval='3000'>
                <Link to='/projects'>
                  <img src={tgh} className='d-block w-100' alt='...' />
                </Link>
              </div>
              <div className='carousel-item' data-bs-interval='3000'>
                <Link to='/projects'>
                  <img src={GG} className='d-block w-100' alt='...' />
                </Link>
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleInterval'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleInterval'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
          <section className='pt-3'>
            <small className='fw-bold yellowText '>Erick-John Santosidad</small>
            <br />
            <small className='fw-bold'>
              <FontAwesomeIcon icon={faLaptopCode} className='pe-1' /> Jr.
              Full-Stack Developer
            </small>
          </section>
          <hr className='text-light' />
          <div className='d-sm-flex text-center justify-content-between align-items-center mt-4 pb-lg-0 pb-3'>
            <a
              type='button'
              className='btn custom-btn'
              target='_blank'
              href='https://drive.google.com/file/d/17XOk7XZZzX3RKqRqboJVWuuDHR_jnZ-X/view?usp=share_link'
            >
              <small>
                <span className='btn-text'>Download CV </span>
                <FontAwesomeIcon icon={faDownload} />
              </small>
            </a>
            <div className='d-md-flex align-items-center'>
              <div className='pe-3'>Find me at: </div>
              {socmeds.map((socmed) => {
                return (
                  <a href={socmed.href} target='blank' key={socmed.id}>
                    <FontAwesomeIcon
                      icon={socmed.icon}
                      className='socmed text-light pe-2 fs-3'
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;

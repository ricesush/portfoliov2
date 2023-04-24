import coverImg from '../assets/Coverv5.png';
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
      <div className='card bg-transparent border-0 col-lg-4 px-lg-0 mx-lg-0 px-1 mx-3'>
        <img src={coverImg} className='card-img-top' alt='...' />
        <div className='card-img-overlay text-accent col-6 h-25 '>
          <h5 className='card-title bg-glass rounded-0 rounded-start-5 rounded-top-5 p-3 shadow'>
            Hello, <br /> my name is
            <span className='fs-3 yellowText ps-2'>Erick</span>{' '}
          </h5>
        </div>
      </div>

      <header className='mt-auto bg-accent col'>
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
          <section className='pt-3 d-sm-flex '>
            <div>
              <small className='fw-bold yellowText '>
                Erick-John Santosidad
              </small>
              <br />
              <small className='fw-bold'>
                <FontAwesomeIcon icon={faLaptopCode} className='pe-1' /> Jr.
                Full-Stack Developer
              </small>
            </div>
            <div className='d-flex align-items-center ms-auto pt-sm-0 pt-4'>
              <div className='d-md-flex d-sm-block d-flex align-items-center'>
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
              <div className=''>
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
              </div>
            </div>
          </section>
          <hr className='text-light' />
          <div className='d-sm-flex text-center justify-content-between align-items-center mt-4 pb-lg-0 pb-3'></div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;

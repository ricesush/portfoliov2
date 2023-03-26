import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { useState } from 'react';

const Project = (props) => {
  const [content, setContent] = useState('Quick Links');

  const onMouseEnter = (text) => {
    setContent(text);
  };

  const onMouseLeave = () => {
    setContent('Quick Links');
  };

  return (
    <section className='row-md d-lg-flex justify-content-center rounded-0 sectionAccent'>
      <a
        href={props.href}
        target='blank'
        className='col-lg-6 col-md-12 d-flex justify-content-center'
      >
        <img
          src={props.imgSrc}
          alt={props.projectTitle}
          className='mt-3 shadow-custom2 img-items'
          data-aos='fade-right'
        />
      </a>
      <div className='col-lg-5 col-md-12 d-grid px-3 pt-3'>
        <section className='my-auto '>
          <header className='d-flex align-items-center justify-content-between '>
            <h3 className='fs-4 fw-bold title px-3 py-2 rounded rounded-top-0 rounded-start-0 bg-accent-projects text-light'>
              <small>{props.projectTitle} </small>
            </h3>
            <p className='text-secondary'>{props.category}</p>
          </header>
          <h6>{props.shortDescription}</h6>
          <hr />
          <div className='d-flex align-items-center'>
            <Link
              to={props.href}
              target='blank'
              id={props.id}
              className='text-dark fs-4'
              onMouseEnter={() => onMouseEnter('Visit Website')}
              onMouseLeave={onMouseLeave}
            >
              <small>
                <FontAwesomeIcon icon={faWindowMaximize} />
              </small>
            </Link>
            <br />
            <Link
              to={props.repository}
              target='blank'
              id={props.id}
              className='text-dark fs-4 ms-2'
              onMouseEnter={() => onMouseEnter('Check Repository')}
              onMouseLeave={onMouseLeave}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <small className='ms-2 content'>| {content}</small>
          </div>
          <section className='col-lg-9 col-md-8 text-center text-md-start pt-5'>
            <small className='text-secondary fw-bold'>Tech Used: </small>
            <div className='col-8 d-flex justify-content-between mt-2 pt-md-0 mx-md-0 mx-auto'>
              {props.children}
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Project;

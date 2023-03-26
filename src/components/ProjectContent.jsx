import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Project = (props) => {
  return (
    <section className='row-md d-lg-flex justify-content-center rounded-0 m-1'>
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
      <div className='col-lg-5 col-md-12 mt-3 p-4 d-grid '>
        <section className='my-auto '>
          <header className='d-md-flex align-items-center justify-content-between'>
            <h3 className='fs-4 fw-bold title'>{props.projectTitle}</h3>
            <p className='text-secondary'>{props.category}</p>
          </header>
          <h6>{props.shortDescription}</h6>
          <Link to={props.href} target='blank' id={props.id}>
            <small>
              <span>Go to website </span>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </small>
          </Link>
          <br />
          <Link to={props.repository} target='blank' id={props.id}>
            <small>
              <span>Check Repository </span>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </small>
          </Link>
        </section>
        <section className='col-lg-9 col-md-8 d-lg-flex d-md-flex text-center text-md-start  mt-md-5 mt-3 mb-0 pb-0'>
          <small className='text-secondary fw-bold'>Tech Used: </small>
          <div className='col-8 d-flex justify-content-between ps-md-3 mx-auto pt-3 pt-md-0'>
            {props.children}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Project;

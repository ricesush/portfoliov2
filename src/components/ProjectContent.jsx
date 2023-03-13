import '../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const Projects = (props) => {
  return (
    <section className='row-md d-lg-flex justify-content-center img-bg rounded-0 m-1'>
      <a
        href={props.href}
        target='blank'
        className='col-lg-5 col-md-12 d-flex justify-content-center'
      >
        <img
          src={props.imgSrc}
          alt={props.projectTitle}
          className='mt-3 shadow-custom2'
        />
      </a>
      <div className='col-lg-6 col-md-11 mt-3 p-4  d-grid'>
        <section className='my-auto'>
          <header className='d-md-flex align-items-center justify-content-between'>
            <h3 className='fs-4 fw-bold title'>{props.projectTitle}</h3>
            <p className='text-secondary'>{props.category}</p>
          </header>
          <h6>{props.shortDescription}</h6>
          <a href='#'>
            <small>
              <span>See more details </span>
              <FontAwesomeIcon
                icon={icon({
                  name: 'arrow-right-from-bracket',
                  style: 'solid',
                })}
              />
            </small>
          </a>
        </section>
        <section className='col-lg-9 col-md-8  d-lg-flex d-md-flex text-center text-md-start justify-content-between mt-auto'>
          <h6 className='text-secondary'>Tech Used: </h6>
          {props.children}
        </section>
      </div>
    </section>
  );
};

export default Projects;

import '../css/home.css';

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
          className='img-size mt-3 shadow-custom2'
        />
      </a>
      <div className='col-lg-6 col-md-11 text-light mt-3 p-4 pe-0'>
        <header className='d-flex align-items-center justify-content-between'>
          <h3 className='fs-4 fw-bold title'>{props.projectTitle}</h3>
          <p className='text-secondary'>{props.category}</p>
        </header>
        <h6>{props.shortDescription}</h6>
        <section className='col-lg-9 col-md-8 fs-6 d-flex pt-5 justify-content-between'>
          <h6 className='text-secondary'>Tech Used: </h6>
          {props.children}
        </section>
      </div>
    </section>
  );
};

export default Projects;

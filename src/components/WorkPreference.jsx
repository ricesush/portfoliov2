import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkPreference = () => {
  return (
    <section className='col-md-6 rounded-1 mt-lg-0 border homeSections'>
      <header className='fs-5 fw-bold position-absolute px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <h2 className='text-center text-light'>
          <span>Work</span> Preference
        </h2>
      </header>
      <div className='fs-1 pt-3 d-md-flex p-5 mt-5'>
        <div className='fs-6'>
          <FontAwesomeIcon icon={faCheck} className='yellowText pe-2' />
          Full-time <br />
          <FontAwesomeIcon icon={faCheck} className='yellowText pe-2' />
          Part-time <br />
          <FontAwesomeIcon icon={faCheck} className='yellowText pe-2' />
          Freelance <br />
          <FontAwesomeIcon icon={faCheck} className='yellowText pe-2' />
          Hybrid <br />
          <FontAwesomeIcon icon={faCheck} className='yellowText pe-2' />
          Work from Home
        </div>
      </div>
    </section>
  );
};

export default WorkPreference;

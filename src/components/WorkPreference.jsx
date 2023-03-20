import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkPreference = () => {
  return (
    <section className='rounded-1'>
      <div className='p-5'>
        <h2 className='text-center'>
          <span className='yellowText'>Work</span> Preference
        </h2>
        <div className='fs-1 pt-3 d-md-flex'>
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
      </div>
    </section>
  );
};

export default WorkPreference;

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkPreference = () => {
  const workPreferences = [
    'Full-time',
    'Part-time',
    'Freelance',
    'Hybrid',
    'Work from Home',
  ];

  return (
    <section className='col-md-6 rounded-1 mt-lg-0 border homeSections'>
      <header className='fs-5 fw-bold position-absolute px-3 py-2 rounded-2 rounded-top-0 rounded-start-0 bg-accent shadow'>
        <h2 className='text-center text-light'>
          <span>Work</span> Preference
        </h2>
      </header>
      <div className='fs-1 pt-3 d-md-flex p-5 mt-5'>
        <div className='fs-6'>
          {workPreferences.map((preferences) => {
            return (
              <>
                <FontAwesomeIcon icon={faCheck} className='yellowText pe-2' />{' '}
                {preferences}
                <br />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkPreference;

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContentHeader } from './ContentHeader';

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
      <ContentHeader title='Work Preference' />
      <div className='fs-6 pt-3 p-5 mt-5'>
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
    </section>
  );
};

export default WorkPreference;

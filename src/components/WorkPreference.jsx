import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContentHeader } from './ContentHeader';

const WorkPreference = () => {
  const workPreferences = [
    { stack: 'Full-time', id: 1 },
    { stack: 'Part-time', id: 2 },
    { stack: 'Freelance', id: 3 },
    { stack: 'Hybrid', id: 4 },
    { stack: 'Work from Home', id: 5 },
  ];

  return (
    <section className='col-md-6 rounded-1 mt-lg-0 border homeSections bg-glass'>
      <ContentHeader title='Work Preference' />
      <div className='fs-6 pt-3 p-5 mt-5'>
        {workPreferences.map((preference) => {
          return (
            <div key={preference.id} className='mt-3'>
              <FontAwesomeIcon icon={faCheck} className='yellowText pe-2' />{' '}
              {preference.stack}
              <br />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkPreference;

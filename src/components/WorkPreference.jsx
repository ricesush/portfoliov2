import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const WorkPreference = () => {
  return (
    <section className='col-lg-6 m-1 border rounded-4'>
      <div className='p-5'>
        <h2 className='text-center'>
          <span className='yellowText'>Work</span> Preference
        </h2>
        <div className='fs-1 p-5 pt-2 d-flex'>
          <div className='fs-6'>
            <FontAwesomeIcon
              icon={icon({ name: 'check', style: 'solid' })}
              className='yellowText pe-2'
            />
            Full-time <br />
            <FontAwesomeIcon
              icon={icon({ name: 'check', style: 'solid' })}
              className='yellowText pe-2'
            />
            Part-time
          </div>
          <div className='fs-6 mx-auto'>
            <FontAwesomeIcon
              icon={icon({ name: 'check', style: 'solid' })}
              className='yellowText pe-2'
            />
            Freelance
          </div>
          <div className='fs-6'>
            <FontAwesomeIcon
              icon={icon({ name: 'check', style: 'solid' })}
              className='yellowText pe-2'
            />
            Hybrid
            <br />
            <FontAwesomeIcon
              icon={icon({ name: 'check', style: 'solid' })}
              className='yellowText pe-2'
            />
            Work from Home
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPreference;

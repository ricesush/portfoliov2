import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const WorkPreference = () => {
  return (
    <section className='pt-2 p-3 pb-0'>
      <div className='text-center'>
        <small className='yellowText  opacity-75'>Work Preference</small>
      </div>
      <div className='fs-1 p-5 pt-2'>
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
          <br />
          <FontAwesomeIcon
            icon={icon({ name: 'check', style: 'solid' })}
            className='yellowText pe-2'
          />
          Freelance
          <br />
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
    </section>
  );
};

export default WorkPreference;

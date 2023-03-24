import { Link } from 'react-router-dom';
import { ExternalLinksTable } from './ExternalLinksTable';
import { MiniAppsTable } from './MiniAppTable';
import { ResourcesTable } from './ResourcesTable';

export const DocsSideBar = () => {
  return (
    <nav className='navbar navbar-expand-lg p-3'>
      <div className=''>
        <button
          className='navbar-toggler bg-light'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#sidebar'
          aria-controls='sidebar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='sidebar'>
          <div className='mb-2 mb-lg-0'>
            <li className=' nav-item'>
              <MiniAppsTable />
            </li>
            <li className='nav-item'>
              <ExternalLinksTable />
            </li>
            <li className='nav-item'>
              <ResourcesTable />
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

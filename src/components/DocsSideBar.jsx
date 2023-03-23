import { Link } from 'react-router-dom';
import { ExternalLinksTable } from './ExternalLinksTable';
import { MiniAppsTable } from './MiniAppTable';
import { ResourcesTable } from './ResourcesTable';

export const DocsSideBar = () => {
  return (
    <nav class='navbar navbar-expand-lg p-3'>
      <div class=''>
        <button
          class='navbar-toggler bg-light'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#sidebar'
          aria-controls='sidebar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='sidebar'>
          <div class='mb-2 mb-lg-0'>
            <li class=' nav-item'>
              <MiniAppsTable />
            </li>
            <li class='nav-item'>
              <ExternalLinksTable />
            </li>
            <li class='nav-item'>
              <ResourcesTable />
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

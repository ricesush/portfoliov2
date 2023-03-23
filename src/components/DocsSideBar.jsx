import { Link } from 'react-router-dom';
import { ExternalLinksTable } from './ExternalLinksTable';
import { MiniAppsTable } from './MiniAppTable';
import { ResourcesTable } from './ResourcesTable';

export const DocsSideBar = (props) => {
  return (
    <div className='p-3'>
      <MiniAppsTable />
      <hr className='text-light' />
      <ExternalLinksTable />
      <hr className='text-light' />
      <ResourcesTable />
    </div>
  );
};

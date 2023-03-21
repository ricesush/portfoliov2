import { Link } from 'react-router-dom';
import { ExternalLinksTable } from './ExternalLinksTable';
import { ResourcesTable } from './ResourcesTable';

export const DocsSideBar = () => {
  return (
    <div className='p-3'>
      <ExternalLinksTable />
      <hr className='text-light' />
      <ResourcesTable />
    </div>
  );
};

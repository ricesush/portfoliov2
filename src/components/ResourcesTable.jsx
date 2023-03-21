import { Link } from 'react-router-dom';
import { TableContent, TableHead } from './TableContent';

export const ResourcesTable = () => {
  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <TableHead title='Resources' />
      <tbody>
        <TableContent
          href='https://javascript.info/import-export'
          title='Javascript.info'
        />
        <TableContent
          href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript'
          title='MDN: Javascript'
        />
      </tbody>
    </table>
  );
};

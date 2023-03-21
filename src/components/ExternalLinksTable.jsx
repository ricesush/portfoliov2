import { Link } from 'react-router-dom';
import { TableContent, TableHead } from './TableContent';

export const ExternalLinksTable = () => {
  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <TableHead title='External Articles' />
      <tbody>
        <TableContent
          href='https://react.dev/'
          title='Modern React: Official website'
        />
        <TableContent
          href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
          title='Javascript / React Test'
        />
      </tbody>
    </table>
  );
};

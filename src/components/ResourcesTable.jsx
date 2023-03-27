import { Link } from 'react-router-dom';
import { TableContent, TableHead } from './TableContent';

export const ResourcesTable = () => {
  const tableOfContent = [
    { title: 'Javascript.info', href: 'https://javascript.info/import-export' },
    {
      title: 'MDN: Javascript',
      href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
    },
  ];
  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <TableHead title='External Resources' />
      <tbody>
        {tableOfContent.map((content) => {
          return <TableContent href={content.href} title={content.title} />;
        })}
      </tbody>
    </table>
  );
};

import { TableContent, TableHead } from './TableContent';

export const ExternalLinksTable = () => {
  const tableOfContent = [
    { href: 'https://react.dev/', title: 'Modern React: Official website' },
    {
      href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
      title: 'Javascript / React Test',
    },
  ];

  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <TableHead title='External Articles' />
      <tbody>
        {tableOfContent.map((content) => {
          return <TableContent href={content.href} title={content.title} />;
        })}
      </tbody>
    </table>
  );
};

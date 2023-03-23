import { TableContent, TableContentBtn, TableHead } from './TableContent';

export const MiniAppsTable = () => {
  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <TableHead title='Mini Apps' />
      <tbody>
        <TableContentBtn title='To-do List' />
        <TableContentBtn title='Pokemon API' />
      </tbody>
    </table>
  );
};

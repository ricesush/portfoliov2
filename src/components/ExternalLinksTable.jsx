import { Link } from 'react-router-dom';

export const ExternalLinksTable = () => {
  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <thead>
        <tr>
          <th scope='col' className='fw-bold text-secondary'>
            External Articles
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>
            <Link
              target={'_blank'}
              to='https://react.dev/'
              className='text-light ms-2 fw-bold'
            >
              <small>Moder React: Official website</small>
            </Link>
          </th>
        </tr>
        <tr>
          <th scope='row'>
            <Link
              target={'_blank'}
              to='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
              className='text-light ms-2 fw-bold'
            >
              <small>Javascript / React Test</small>
            </Link>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

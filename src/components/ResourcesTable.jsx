import { Link } from 'react-router-dom';

export const ResourcesTable = () => {
  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <thead>
        <tr>
          <th scope='col' className='fw-bold text-secondary'>
            Resources
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>
            <Link
              target={'_blank'}
              to='https://javascript.info/import-export'
              className='text-light ms-2 fw-bold'
            >
              <small>Javascript.info</small>
            </Link>
          </th>
        </tr>
        <tr>
          <th scope='row'>
            <Link
              target={'_blank'}
              to='https://developer.mozilla.org/en-US/docs/Learn/JavaScript'
              className='text-light ms-2 fw-bold'
            >
              <small>MDN: Javascript</small>
            </Link>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

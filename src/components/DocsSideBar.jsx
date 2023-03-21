import { Link } from 'react-router-dom';

export const DocsSideBar = () => {
  return (
    <table className='table table-dark'>
      <thead>
        <tr>
          <th scope='col' className='fw-bold'>
            Articles
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>
            <Link>Sample Link</Link>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

import { Link } from 'react-router-dom';

export const TableContent = (props) => {
  return (
    <tr>
      <th scope='row'>
        <Link
          target={'_blank'}
          to={props.href}
          className='text-light ms-2 fw-bold'
        >
          <small>{props.title}</small>
        </Link>
      </th>
    </tr>
  );
};

export const TableHead = (props) => {
  return (
    <thead>
      <tr>
        <th scope='col' className='fw-bold text-secondary'>
          {props.title}
        </th>
      </tr>
    </thead>
  );
};

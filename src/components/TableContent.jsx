import { Link } from 'react-router-dom';
import { SamplePage } from './SamplePage';

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

export const TableContentBtn = (props) => {
  return (
    <tr>
      <th scope='row'>
        <button className='text-light ms-2 fw-bold bg-transparent border-0'>
          <small>{props.title}</small>
        </button>
      </th>
    </tr>
  );
};

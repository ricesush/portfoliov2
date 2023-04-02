import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameApi } from './GameApi';
import { ContentContext } from '../routes/Docs';

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
  const { setContent } = useContext(ContentContext);
  return (
    <tr>
      <th scope='row'>
        <button
          className='text-light ms-2 fw-bold bg-transparent border-0'
          onClick={() => setContent(props.content)}
        >
          <small>{props.title}</small>
        </button>
      </th>
    </tr>
  );
};

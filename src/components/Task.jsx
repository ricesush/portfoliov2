import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

export const Task = (props) => {
  return (
    <div className='d-flex align-items-center'>
      {props.taskName}
      <button
        type='button'
        className='btn bg-transparent border-0 ps-1'
        onClick={() => props.deleteTask(props.id)}
      >
        <FontAwesomeIcon
          icon={icon({
            name: 'trash-can',
            style: 'solid',
          })}
        />
      </button>
    </div>
  );
};

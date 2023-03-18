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
    <div
      className='d-flex align-items-center justify-content-between border-bottom'
      key={props.keys}
    >
      <div
        className='fw-bold'
        style={{ color: props.completed ? 'green' : 'black' }}
      >
        {props.taskName}
      </div>
      <div className='d-flex'>
        <div className='d-flex align-items-center'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id={props.id + props.taskName}
            onChange={() => {
              props.completedTask(props.id);
            }}
          />
          <label
            className='form-check-label ps-1'
            htmlFor={props.id + props.taskName}
          >
            Mark as done
          </label>
        </div>
        <button
          type='button'
          className='btn bg-transparent border-0 ps-3'
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
    </div>
  );
};

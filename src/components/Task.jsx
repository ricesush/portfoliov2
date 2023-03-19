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
    <tr>
      <th className=''>
        <input
          className='form-check-input '
          type='checkbox'
          value=''
          id={props.id + props.taskName}
          onChange={() => {
            props.completedTask(props.id);
          }}
        />
      </th>
      <td>{props.taskName}</td>
      <td>
        <button
          type='button'
          className='btn bg-transparent border-0'
          onClick={() => props.deleteTask(props.id)}
        >
          <FontAwesomeIcon
            icon={icon({
              name: 'trash-can',
              style: 'solid',
            })}
          />
        </button>
      </td>
    </tr>
  );
};

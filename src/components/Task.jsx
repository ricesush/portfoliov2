import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Task = (props) => {
  return (
    <tr>
      <th className='text-center pt-2'>
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
      <td className='text-center'>
        <button
          type='button'
          className='btn bg-transparent border-0 '
          onClick={() => props.deleteTask(props.id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
};

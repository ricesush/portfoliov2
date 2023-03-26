import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Task = (props) => {
  return (
    <tr>
      <th className='text-center'>
        <button
          className='btn'
          type='button'
          value=''
          id={props.id + props.taskName}
          onClick={() => {
            props.completedTask(props.id);
          }}
        >
          Done
        </button>
      </th>
      <td className=''>
        <p>{props.taskName}</p>
      </td>
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

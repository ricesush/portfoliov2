import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (task) => {
    const newTodoList = todoList.filter((taskFilter) => {
      return taskFilter !== task;
    });
    setTodoList(newTodoList);
  };
  return (
    <>
      <div className='addTask col-4 d-flex'>
        <input className='form-control col-auto' onChange={handleChange} />
        <button
          type='submit'
          className='btn btn-primary col-auto'
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <div className='d-flex align-items-center'>
              {task}
              <button
                type='button'
                className='btn bg-transparent border-0 ps-1'
                onClick={() => deleteTask(task)}
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
        })}
      </div>
    </>
  );
};

export default TodoList;

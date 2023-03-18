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
  let key = 0;

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
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
          key++;
          return (
            <div className='d-flex align-items-center' key={key}>
              {task.taskName}
              <button
                type='button'
                className='btn bg-transparent border-0 ps-1'
                onClick={() => deleteTask(task.id)}
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

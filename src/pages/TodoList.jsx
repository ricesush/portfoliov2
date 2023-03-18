import { useState } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <>
      <div className='addTask col-4 d-flex'>
        <input class='form-control col-auto' onChange={handleChange} />
        <button type='button' className='btn btn-primary col-auto'>
          Add Task
        </button>
      </div>
      <div className='list'>{newTask}</div>
    </>
  );
};

export default TodoList;

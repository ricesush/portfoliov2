import { useState } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };
  return (
    <>
      <div className='addTask col-4 d-flex'>
        <input class='form-control col-auto' onChange={handleChange} />
        <button
          type='button'
          className='btn btn-primary col-auto'
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <div>{task}</div>;
        })}
      </div>
    </>
  );
};

export default TodoList;

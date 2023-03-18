import { useState } from 'react';
import { Task } from '../components/Task';

const TodoList = () => {
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
          return (
            <Task
              id={task.id}
              taskName={task.taskName}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;

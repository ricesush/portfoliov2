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

  let key = 0;

  return (
    <section className='col-8 mx-auto rounded shadow-sm'>
      <div className='addTask d-md-flex'>
        <input
          className='form-control rounded-0 rounded-start'
          onChange={handleChange}
        />
        <button
          type='submit'
          className='btn btn-primary col-auto rounded-0 rounded-end'
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className='list p-3'>
        {todoList.map((task) => {
          key++;
          return (
            <Task
              key={key}
              id={task.id}
              taskName={task.taskName}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TodoList;

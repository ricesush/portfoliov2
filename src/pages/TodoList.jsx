import { useState } from 'react';
import { Task } from '../components/Task';

const TodoList = () => {
  let keys = 0;
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask) {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        completed: false,
      };
      setTodoList([...todoList, task]);
    } else {
      return;
    }
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    todoList.map((task) => {
      if (task.id === id && task.completed === false) {
        task.completed = true;
        setTodoList([...todoList]);
      } else {
        task.completed = false;
        setTodoList([...todoList]);
      }
    });
  };

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
          keys++;
          return (
            <Task
              key={keys}
              id={task.id}
              completed={task.completed}
              taskName={task.taskName}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TodoList;

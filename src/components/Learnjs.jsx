import { Link } from 'react-router-dom';
import { DocsSideBar } from './DocsSideBar';
import { GameApi } from './GameApi';
import { MiniAppSection } from './MiniAppSection';
import TodoList from './TodoList';

export const Docs = () => {
  return (
    <div className='container'>
      <header className='col-lg-12 py-lg-5 my-3 '>
        <h2 className='text-center fs-1 '>
          <span className='yellowText'>Javascript</span> Notes
        </h2>
        <p className='text-center'>
          <b>Mini tasks, best practices, some tutorials and more..</b>
        </p>
      </header>
      <section className='d-flex'>
        <div className='col-3 border bg-dark'>
          <DocsSideBar />
        </div>
        <div className='col m-2 my-3'>
          <MiniAppSection
            title='Todo-List'
            description='The legendary todo list where you can add, delete, and mark as done your todos'
            miniApp={<TodoList />}
          />
          <section className='shadow mt-5'>
            <div className='position-absolute bg-accent text-light fw-bold px-3 py-2 rounded rounded-top-0 rounded-start-0 '>
              Pokemon API
            </div>
            <GameApi />
          </section>
        </div>
      </section>
    </div>
  );
};

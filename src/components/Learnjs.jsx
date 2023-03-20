import { GameApi } from './GameApi';
import TodoList from './TodoList';

export const Learnjs = () => {
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
      <section className='shadow'>
        <div className='position-absolute bg-accent text-light fw-bold px-3 py-2 rounded rounded-top-0 rounded-start-0 '>
          Todo-List
        </div>
        <TodoList />
      </section>
      <section className='shadow mt-5'>
        <div className='position-absolute bg-accent text-light fw-bold px-3 py-2 rounded rounded-top-0 rounded-start-0 '>
          Pokemon API
        </div>
        <GameApi />
      </section>
    </div>
  );
};

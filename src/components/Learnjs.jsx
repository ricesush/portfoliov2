import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DocsSideBar } from './DocsSideBar';
import { GameApi } from './GameApi';
import { MiniAppSection } from './MiniAppSection';
import TodoList from './TodoList';
import { SamplePage } from './SamplePage';

export const Docs = () => {
  const [content, setContent] = useState();

  return (
    <div className='container'>
      <header className='col-lg-12 py-lg-5 my-3 '>
        <h2 className='text-center fs-1 '>
          <span className='yellowText'>Javascript</span> Notes
        </h2>
        <p className='text-center'>
          <b>Things that keep the ball rolling..</b>
        </p>
      </header>
      <section className='d-flex'>
        <div className='col-3 border bg-dark'>
          <DocsSideBar stateFn={setContent} />
        </div>
        <div className='col m-2 my-3'>
          <MiniAppSection
            title='Todo-List'
            description='The legendary todo list where you can add, delete, and mark as done your todos'
            miniApp={<TodoList />}
          />
          <div className='pt-5'></div>
          <MiniAppSection
            title='Pokemon API'
            description='Pokemon API based mini app, at the moment, try to type a '
            miniApp={<GameApi />}
          />
        </div>
      </section>
      <div>
        <button className='btn border-0' onClick={() => setContent(SamplePage)}>
          button
        </button>
        content shows here
        {content}
      </div>
    </div>
  );
};

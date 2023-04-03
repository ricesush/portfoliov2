import { useState, createContext } from 'react';
import { DocsSideBar } from '../components/DocsSideBar';

export const ContentContext = createContext(null);

const defaultContent = () => {
  return (
    <div className='text-center py-5 my-5 fw-bold'>
      <small>
        Welcome to my mini playground, this is where I store some of my test
        apps and mini apps.
      </small>
      <br />
      <small>There is not much yet but feel free to look around!</small>
    </div>
  );
};

export const Docs = () => {
  const [content, setContent] = useState(defaultContent);

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
          <ContentContext.Provider value={{ setContent }}>
            <DocsSideBar onClick={setContent} />
          </ContentContext.Provider>
        </div>
        <div className='col m-2 my-3 bg-glass rounded-0'>{content}</div>
      </section>
    </div>
  );
};

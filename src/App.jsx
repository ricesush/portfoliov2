import './App.css';
import React from 'react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Learnjs from './pages/Learnjs';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import Preloader from './components/Preloader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/learnjs' element={<Learnjs />} />
      </Route>
    )
  );

  return (
    <React.Fragment>
      <Preloader />
      <div hidden id='hidden'>
        <div className='custome-container main'>
          {/* <Leftbar/> */}
          <RouterProvider router={router} />
          <Rightbar />
        </div>
      </div>
    </React.Fragment>
  );
}

const Root = () => {
  return (
    <>
      <nav className='navBar sticky-top'>
        <Link to='/'>
          <b>E-J ESAN.</b>
        </Link>
        <section className='navLink'>
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/learnjs'>LearnJS</Link>
        </section>
        <section className='navIcons'>
          <a href='https://www.linkedin.com/in/ejsan/' target='blank'>
            <FontAwesomeIcon icon={brands('linkedin')} />
          </a>
          <a href='https://github.com/ricesush' target='blank'>
            <FontAwesomeIcon icon={brands('github')} />
          </a>
          <a href='https://www.facebook.com/RiceSush' target='blank'>
            <FontAwesomeIcon icon={brands('facebook')} />
          </a>
        </section>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default App;

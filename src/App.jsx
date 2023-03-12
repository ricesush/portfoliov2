import './App.css';
import React from 'react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Learnjs from './pages/Learnjs';
import Leftbar from './components/Leftbar';
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
  NavLink,
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
        <div className='container'>
          {/* <Leftbar /> */}
          <RouterProvider router={router} />
        </div>
      </div>
    </React.Fragment>
  );
}

const Root = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Link to='/' className='navbar-brand fw-bold'>
            E-J ESAN.
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0 fw-bold'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Projects
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link to='/projects' className='dropdown-item'>
                      View All
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link to='/projects' className='dropdown-item'>
                      Dream Fields
                    </Link>
                  </li>
                  <li>
                    <a
                      className='dropdown-item'
                      target='blank'
                      href='https://gg-next-neon.vercel.app/'
                    >
                      GG-Next
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item'
                      href='https://thegreenhouse.vercel.app/'
                      target='blank'
                    >
                      The Greenhouse
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className='nav-link'>
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/learnjs' className='nav-link'>
                  Practice
                </NavLink>
              </li>
            </ul>
            <section className='fs-3'>
              <a href='https://www.linkedin.com/in/ejsan/' target='blank'>
                <FontAwesomeIcon
                  icon={brands('linkedin')}
                  className='socmed '
                />
              </a>
              <a href='https://github.com/ricesush' target='blank'>
                <FontAwesomeIcon
                  icon={brands('github')}
                  className='socmed mx-3'
                />
              </a>
              <a href='https://www.facebook.com/RiceSush' target='blank'>
                <FontAwesomeIcon icon={brands('facebook')} className='socmed' />
              </a>
            </section>
          </div>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default App;

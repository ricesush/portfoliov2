import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
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
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 fw-bold'>
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
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Contact
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Pixelartme@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      +63999-551-4413
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink to='/learnjs' className='nav-link'>
                  Practice
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

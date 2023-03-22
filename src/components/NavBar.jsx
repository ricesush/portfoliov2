import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark '>
        <div className='container'>
          <Link to='/' className='navbar-brand fw-bold text-light'>
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
          <div
            className='collapse navbar-collapse '
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 fw-bold '>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link text-light'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item dropdown '>
                <a
                  className='nav-link dropdown-toggle text-light'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Projects
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <NavLink to='/projects' className='dropdown-item fw-bold'>
                      <small>View All</small>
                    </NavLink>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link to='/projects' className='dropdown-item fw-bold'>
                      <small>Dream Fields</small>
                    </Link>
                  </li>
                  <li>
                    <a
                      className='dropdown-item fw-bold'
                      target='blank'
                      href='https://gg-next-neon.vercel.app/'
                    >
                      <small>GG-Next</small>
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item fw-bold'
                      href='https://thegreenhouse.vercel.app/'
                      target='blank'
                    >
                      <small>The Greenhouse</small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-light'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Contact
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item fw-bold' href='#'>
                      <small>Pixelartme@gmail.com</small>
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item fw-bold' href='#'>
                      <small>+63999-551-4413</small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink to='/docs' className='nav-link text-light'>
                  Docs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

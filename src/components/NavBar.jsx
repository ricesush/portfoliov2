import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-accent border-bottom'>
        <div className='container'>
          <Link to='/' className='navbar-brand fw-bold text-light'>
            e<span className='yellowText'>-</span>jesan
            <span className='yellowText'>.</span>
          </Link>
          <button
            className='navbar-toggler bg-light rounded-1'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#mainNavBar'
            aria-controls='mainNavBar'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse text-center' id='mainNavBar'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 fw-bold'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link text-light'>
                  <small>HOME</small>
                </NavLink>
              </li>
              <li className='nav-item dropdown ms-md-4'>
                <a
                  className='nav-link dropdown-toggle text-light'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <small>PROJECTS</small>
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
              <li className='nav-item dropdown ms-md-4'>
                <a
                  className='nav-link dropdown-toggle text-light'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <small>CONTACT</small>
                </a>
                <ul className='dropdown-menu text-center'>
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
              {/* <li className='nav-item ms-md-4'>
                <NavLink to='/docs' className='nav-link text-light'>
                  <small>LAB</small>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

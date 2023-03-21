import { Outlet } from 'react-router-dom';
import { DocsSideBar } from '../components/DocsSideBar';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

function RootLayout() {
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
        <DocsSideBar />
        <Outlet />
      </section>
    </div>
  );
}

export default RootLayout;

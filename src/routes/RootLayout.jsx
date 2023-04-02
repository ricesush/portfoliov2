import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

import Preloader from '../components/Preloader';
import { useEffect, useState } from 'react';

function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderTimeout = setTimeout(loader, 1000);
  function loader() {
    setIsLoading(false);
  }

  useEffect(() => {
    <Outlet />;
  });

  return (
    <>
      <NavBar />
      {isLoading ? <Preloader /> : <Outlet />}
      <Footer />
    </>
  );
}

export default RootLayout;

import { Home } from './Home';
import Preloader from '../components/Preloader';
import { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  AOS.init();
  const [isLoading, setIsLoading] = useState(true);

  const preloaderTimeout = setTimeout(loader, 1000);

  function loader() {
    setIsLoading(false);
  }

  return <>{isLoading ? <Preloader /> : <Home />}</>;
}

export default App;

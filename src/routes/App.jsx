import { Home } from './Home';
import Preloader from '../components/Preloader';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const preloaderTimeout = setTimeout(loader, 1000);

  function loader() {
    setIsLoading(false);
  }

  return <>{isLoading ? <Preloader /> : <Home />}</>;
}

export default App;

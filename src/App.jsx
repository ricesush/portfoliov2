import { Home } from './components/Home';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <div hidden id='hidden'>
        <Home />
      </div>
    </>
  );
}

export default App;

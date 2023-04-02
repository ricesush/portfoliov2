import { Home } from './Home';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  AOS.init();
  return (
    <>
      <Home />
    </>
  );
}

export default App;

import './App.css';
import React from 'react';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar'
import Preloader from './components/Preloader';
import { Routes, Route } from "react-router-dom";

function App() {
  const myTimeout = setTimeout(loader, 1505);

    function loader() {
        document.getElementById("hidden").removeAttribute("hidden");
    }

  return (
    <React.Fragment>
      <Preloader/>
      <div hidden id='hidden'>
      <div className="container p-0 me-auto d-flex main shadow-custom2 p-0">
        <Leftbar/>
        <section className="col-md-12 overflow my-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
        <Rightbar />
      </div>
      </div>
      Hello
    </React.Fragment>
  );
}

export default App;

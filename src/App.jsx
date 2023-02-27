import './App.css';
import React from 'react';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Test from './components/test';
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Preloader from './components/Preloader';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';



function App() {
  const myTimeout = setTimeout(loader, 1600);

    function loader() {
        document.getElementById("hidden").removeAttribute("hidden");
    }

  return (
    <React.Fragment>
      <Preloader/>
      <div className="container p-0 me-auto d-flex main shadow-custom2 p-0">
        <div hidden id='hidden'>
        {/* <Sidebar /> */}
        <Test/>
        <section className="col-md-12 overflow my-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
        <Rightbar />
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;

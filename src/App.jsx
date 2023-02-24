import './App.css';
import React from 'react';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Sidebar from './components/Sidebar'
import Leftbar from './components/Leftbar'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';



function App() {
  return (
    <React.Fragment>
      <div className="container d-flex main ">
        <Sidebar/>

        <section className="col-md-12 bg-secondary overflow my-3 shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>

        <Leftbar/>
      </div>

    </React.Fragment>
  );
}

export default App;

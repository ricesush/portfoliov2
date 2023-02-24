import './App.css';
import React from 'react';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';



function App() {
  return (
    <React.Fragment>
      <div className="container d-flex main shadow p-0 ">
        <Sidebar/>

        <section className="col-md-12 overflow my-3 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>

        <Rightbar/>
      </div>

    </React.Fragment>
  );
}

export default App;

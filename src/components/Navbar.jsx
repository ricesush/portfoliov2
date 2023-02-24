import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { NavLink, Link } from "react-router-dom";


export default function Navbar() {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-custom rounded-0 ">
            <div className="container">
                <Link className="navbar-brand text-light fs-6 fw-bold" to='/'>E-J E S A N</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light active" aria-current="page" to='/contact' >Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://getbootstrap.com/docs/5.3/components/navbar/"  className="nav-link text-light fs-4"><FontAwesomeIcon icon={brands('facebook')}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        
        
        
        </React.Fragment>
    )
}
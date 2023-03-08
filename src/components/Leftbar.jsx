import React from "react";
import '../css/buttons.css'
import myImage from '../images/profilePic.png'

import TechStack from "./TechStack";
import WorkPreference from "./WorkPreference";
import LeftBarHeader from "./LeftBarHeader";
import LeftBarButtons from "./LeftBarButtons";

export default function Leftbar() {
    return (
        <React.Fragment>
            <nav class="col-lg-2 col-md-1 navbar navbar-expand-lg position-fixed min-vh-100 d-grid align-items-start mt-lg-3 mt-md-1 bg-nav">
                <div class="container p-0 m-0">
                    <button class="navbar-toggler btn-deco " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="position-absolute border-0 mt-4 m-0 p-0"><img src={myImage} className="img-shadow pt-3 ps-2"></img></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <section className="col-lg-10 col-md-10 section-left shadow-custom2">
                            <LeftBarHeader/>
                            <LeftBarButtons/>
                            <hr className="text-light mx-3 mt-0" />
                            <TechStack/>
                            <hr className="text-light mx-3" />
                            <WorkPreference/>
                        </section>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
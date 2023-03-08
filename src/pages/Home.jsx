import React from "react";
import '../css/home.css'

import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import HeaderSection from "../components/HeaderSection";

export default function Home() {
    return (
        <React.Fragment>
            <div className="d-flex py-3 bg-img">
                <div className="col-lg-3 col-sm-1">
                </div>
                <div className="col-lg-9 ms-md-2 ms-lg-0">
                    <HeaderSection/>
                    <AboutSection/>
                    <ProjectSection/>
                </div>
            </div>
        </React.Fragment>
    )
}
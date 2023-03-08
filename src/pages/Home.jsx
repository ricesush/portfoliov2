import React from "react";
import '../css/home.css'

import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import HeaderSection from "../components/HeaderSection";

export default function Home() {
    return (
        <React.Fragment>
            <div className="d-flex bg-img">
                <div className="col-lg-12">
                    <HeaderSection/>
                    <AboutSection/>
                    <ProjectSection/>
                </div>
            </div>
        </React.Fragment>
    )
}
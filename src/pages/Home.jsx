import React from "react";
import '../css/home.css'

import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home() {
    return (
        <React.Fragment>
            <div className="d-flex py-3 bg-img">
                <div className="col-lg-3 col-sm-1">
                </div>
                <div className="col-lg-9 ms-md-2 ms-lg-0">
                    <header className="bg-banner m-2 me-3 p-5 text-light">
                        <div className="fs-3  ">
                            Hi, I'm <span className="fw-bold">Erick</span>
                        </div>
                        <div className="outer-headings" >
                            <h1>
                                <div className="inner-headings">
                                    <span className="">
                                        Full-Stack Developer <br />
                                        Front-End Developer <br />
                                        Back-End Developer <br />
                                        Freelancer <br />
                                    </span>
                                </div>
                            </h1>
                        </div>
                        <div>
                            An enthusiastic Web Developer with passion for programming and love for work.
                        </div>
                    </header>
                    <AboutSection/>
                    <ProjectSection/>
                </div>
            </div>
        </React.Fragment>
    )
}
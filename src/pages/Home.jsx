import React from "react";
import '../css/home.css'
import ggNext from '../../src/images/ggnext.PNG'

export default function Home() {
    return (
        <React.Fragment>
            <div className="d-flex py-3 bg-img">
                <div className="col-3">

                </div>
                <div className="col-9 ">
                    <section className="bg-banner m-2 me-3 p-5 text-light">
                        <div className="fs-3 fw-bold ">
                            Hi, I'm E-J
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
                    </section>
                    <div className="fs-5 text-light fw-bold m-2 mt-5 me-3">
                        Recent Projects
                    </div>
                    <section className="d-flex m-2 me-3 project-height">
                        <div className="col-lg-6 d-grid  justify-content-center img-bg rounded-0 shadow m-1">
                            <img src={ggNext} alt="" className="img-size mt-3 box-shadow" />
                            <div className="text-light pt-4 text-center">
                                <div className="fs-5 title">
                                    Dream-Fields
                                </div>
                                <small className="opacity-50">
                                    Real Estate Web App
                                </small>
                            </div>
                        </div>
                        <div className="col-lg-6 d-grid justify-content-center img-bg rounded-20 shadow m-1">
                            <img src={ggNext} alt="" className="img-size mt-3" />
                            <div className="text-light pt-4 text-center">
                                <div className="fs-5 title">
                                    GG-Next
                                </div>
                                <small className="opacity-50">
                                    Gaming Web App
                                </small>
                            </div>
                        </div>
                    </section>
                    <section className="d-flex m-2 me-3 project-height">
                        <div className="col-lg-6 d-grid  justify-content-center img-bg rounded-0 shadow m-1">
                            <img src={ggNext} alt="" className="img-size mt-3" />
                            <div className="text-light pt-4 text-center">
                                <div className="fs-5 title">
                                    The Greenhouse
                                </div>
                                <small className="opacity-50">
                                    Agriculture Content
                                </small>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </React.Fragment>
    )


}
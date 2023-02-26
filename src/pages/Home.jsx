import React from "react";
import '../css/home.css'
import ggNext from '../../src/images/ggnext.PNG'
import tgh from '../../src/images/tgh.png'
import df from '../../src/images/DF.PNG'

export default function Home() {
    const projectInfo = (n) => {

    }

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
                    <div className="fs-5 text-light fw-bold m-2 mt-5 me-3 d-flex align-items-end">
                        <div className="col-lg-2">
                            <span className="yellowText">About</span> Me
                        </div>
                        <div className="col-lg-10">
                            <hr className="text-light mt-0" />
                        </div>
                    </div>

                    <section className="row d-flex m-2 me-3 project-height">
                        <div className="col-lg-12 fs-5 text-light fw-bold mt-5 d-flex align-items-end">
                            <div className="col-lg-2">
                                <span className="yellowText">Recent</span> Projects
                            </div>
                            <div className="col-lg-10">
                                <hr className="text-light mt-0" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center img-bg rounded-0 shadow m-1">
                            <a href="" target="blank" className="col-5"><img src={df} alt="" className="img-size mt-3 shadow-custom2" /></a>
                            <div className="col-6 text-light mt-3 p-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-4 fw-bold title">Dream-Fields</div>
                                    <div><small className="opacity-50">Real Estate Web App</small></div>
                                </div>
                                <div>
                                    <small> Full-Stack Web Application</small>
                                </div>
                                <div className="fs-6 d-flex pt-5">
                                    <small className="opacity-50">Tech Used: </small>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center img-bg rounded-20 shadow m-1 mt-3">
                            <a href="https://gg-next-neon.vercel.app/index.html" target="blank" className="col-5"><img src={ggNext} alt="" className="img-size mt-3 shadow-custom2" /></a>
                            <div className="col-6 text-light mt-3 p-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-4 fw-bold title">GG-Next</div>
                                    <div><small className="opacity-50">Gaming Web App</small></div>
                                </div>
                                <div>
                                    <small> API-driven Mini Web Application</small>
                                </div>
                                <div className="fs-6 d-flex pt-5">
                                    <small className="opacity-50">Tech Used: </small>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex  justify-content-center img-bg rounded-0 shadow m-1 mt-3">
                            <a href="https://thegreenhouse.vercel.app/index.html#" target="blank" className="col-5"><img src={tgh} alt="" className="img-size mt-3 shadow-custom2" /></a>
                            <div className="col-6 text-light mt-3 p-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-4 fw-bold title">The Greenhouse </div>
                                    <div><small className="opacity-50">Agriculture Content</small></div>
                                </div>
                                <div>
                                    <small> Static, Multi-page Responsive Website</small>
                                </div>
                                <div className="fs-6 d-flex pt-5">
                                    <small className="opacity-50">Tech Used: </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-grid  justify-content-center img-bg rounded-0 shadow m-1">
                            asdasd
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
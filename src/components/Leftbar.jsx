import React from "react";
import '../css/buttons.css'
import myImage from '../images/profilePic.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Leftbar() {
    return (
        <React.Fragment>
            <nav class="col-lg-2 col-md-1 navbar navbar-expand-lg position-fixed min-vh-100 d-grid align-items-start mt-lg-3 mt-md-1 bg-nav">
                <div class="container p-0 m-0">
                    <button class="navbar-toggler btn-deco " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="position-absolute border-0 mt-4 m-0 p-0"><img src={myImage} width={50} className="img-shadow pt-3 ps-2"></img></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <section className="col-lg-10 col-md-10 section-left shadow-custom2">
                            <div className="text-light text-center bg-gray py-4">
                                <img src={myImage} width={100} className="img-shadow pt-3" alt="profile picture"></img>
                                <div className="pt-3 fw-bold">
                                    Erick-John Santosidad
                                </div>
                                <div className="pb-3">
                                    <small className="yellowText opacity-75">Full-Stack Web Developer</small>
                                </div>
                                <div className="text-center">
                                    <div className="d-flex justify-content-around col-4 mx-auto  align-items-center">
                                        <a href="https://www.facebook.com/RiceSush" className="text-light fs-5 " target="blank"><FontAwesomeIcon icon={brands('facebook')} className="socmed" /></a>
                                        <a href="https://github.com/ricesush" className="text-light fs-5" target="blank"><FontAwesomeIcon icon={brands('github')} className="socmed" /></a>
                                        <a href="https://www.linkedin.com/in/ejsan/" className="text-light fs-5" target="blank"><FontAwesomeIcon icon={brands('linkedin')} className="socmed" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="text-light col-lg-6 col-md-6 p-0 m-0">
                                    <div class="buttons">
                                        <button class="btn"><span></span><p data-start="good luck!" data-text="Download CV" data-title="Download CV"></p></button>
                                    </div>
                                </div>
                                <div className="text-light col-lg-6 col-md-6 p-0 m-0 ">
                                    <div class="buttons">
                                        <button class="btn"><span></span><p data-start="good luck!" data-text="Contact Me" data-title="Contact Me"></p></button>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-light mx-3 mt-0" />
                            <div className="text-light pt-0 p-3 pb-0">
                                <div className="text-center">
                                    <small className="yellowText opacity-75">
                                        Front-End
                                    </small>
                                </div>
                                <div className="fs-1 d-flex justify-content-around p-4 pt-3">
                                    <FontAwesomeIcon icon={brands('html5')} title="HTML5" />
                                    <FontAwesomeIcon icon={brands('css3')} title="CSS3" />
                                    <FontAwesomeIcon icon={brands('bootstrap')} />

                                </div>
                                <div className="fs-1 d-flex justify-content-around p-4 pt-0">
                                    <FontAwesomeIcon icon={brands('js')} />
                                    <FontAwesomeIcon icon={brands('react')} />
                                    <FontAwesomeIcon icon={brands('figma')} />
                                </div>
                                <div className="mt-2 text-center">
                                    <small className="yellowText opacity-75">
                                        Back-End & Framework
                                    </small>
                                </div>
                                <div className="fs-1 d-flex justify-content-around pb-3 pt-3">
                                    <FontAwesomeIcon icon={brands('php')} />
                                    <FontAwesomeIcon icon={brands('laravel')} />
                                </div>
                            </div>
                            <hr className="text-light mx-3" />
                            <div className="text-light pt-2 p-3 pb-0">
                                <div className="text-center">
                                    <small className="yellowText  opacity-75">
                                        Work Preference
                                    </small>
                                </div>
                                <div className="fs-1 p-5 pt-2">
                                    <div className="fs-6">
                                        <FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText pe-2" /> Full-time <br />
                                        <FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText pe-2" /> Part-time<br />
                                        <FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText pe-2" /> Freelance<br />
                                        <FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText pe-2" /> Hybrid<br />
                                        <FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText pe-2" /> Work from Home
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
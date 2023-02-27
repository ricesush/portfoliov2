import React from "react";
import '../css/home.css'
import ggNext from '../../src/images/ggnext.PNG'
import tgh from '../../src/images/tgh.png'
import df from '../../src/images/DF.PNG'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home() {
    const projectInfo = (n) => {

    }

    return (
        <React.Fragment>
            <div className="d-flex py-3 bg-img">
                <div className="col-lg-3 col-sm-1">

                </div>
                <div className="col-lg-9 ms-md-2 ms-lg-0">
                    <section className="bg-banner m-2 me-3 p-5 text-light">
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
                    </section>
                    <section className="row d-flex m-2 me-3 project-height">
                        <div className="col-lg-12 fs-5 text-light fw-bold mt-5 d-flex align-items-end justify-content-between">
                            <div className="col-lg-2">
                                <span className="yellowText">About</span> Me
                            </div>
                            <div className="col-lg-10 col-md-9">
                                <hr className="text-light mt-0" />
                            </div>
                        </div>
                        <div className="text-light p-5 pb-0 fw-lighter font-monospace">
                            <div>
                                <div> <span className="text-secondary">Country:</span>  Philippines</div>
                                <div><span className="text-secondary">Language:</span> English, Filipino</div>
                            </div>
                            <div className="pt-3 pt-md-5">
                                Hello, I'm <span className="yellowText">Erick-john Santosidad</span>, an enthusiastic Web Developer with passion for programming and love for work. Proficient in an assortment of technologies, including <span className="yellowText">HTML5</span>, <span className="yellowText">CSS3</span>, <span className="yellowText">Javascript</span>, <span className="yellowText">React.Js</span>, <span className="yellowText">PHP</span>, <span className="yellowText">Laravel</span>, and <span className="yellowText">MySQL</span>. Able to efficiently self-manage during independent projects, as well as collaborate in a team setting.
                            </div>
                        </div>
                    </section>
                    <section className="row d-flex m-2 me-3 project-height">
                        <div className="col-lg-12 fs-5 text-light fw-bold mt-5 d-flex align-items-end justify-content-between">
                            <div className="col-lg-3">
                                <span className="yellowText">Contact </span>Details
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <hr className="text-light mt-0" />
                            </div>
                        </div>
                        <div className="text-light p-5 pb-0 fw-lighter font-monospace">
                            <div className="d-flex justify-content-between">
                                <div className="col-lg-6">
                                    <div className="yellowText"><FontAwesomeIcon icon={icon({ name: 'location-dot', style: 'solid' })} /><small className="text-light"><span className="text-secondary"> ....</span>  Quezon City, Philippines</small></div>
                                    <div className="yellowText"><FontAwesomeIcon icon={icon({ name: 'envelope', style: 'solid' })} /><small className="text-light"><span className="text-secondary"> ....</span> Pixelartme@gmail.com</small></div>
                                    <div className="yellowText"><FontAwesomeIcon icon={icon({ name: 'phone', style: 'solid' })} /><small className="text-light"><span className="text-secondary"> ....</span> +63999 551 4413</small></div>
                                </div>
                                <div className="col-lg-6 col-md-5">
                                    <div className="text-secondary">
                                        Quick Links:
                                    </div>
                                    <div className="d-flex justify-content-around col-lg-6 mx-auto  align-items-center">
                                        <a href="https://github.com/ricesush" className="text-light fs-2" target="blank"><FontAwesomeIcon icon={brands('github')} className="socmed" /></a>
                                        <a href="https://www.linkedin.com/in/ejsan/" className="text-light fs-2" target="blank"><FontAwesomeIcon icon={brands('linkedin')} className="socmed" /></a>
                                        <a href="https://www.facebook.com/RiceSush" className="text-light fs-2" target="blank"><FontAwesomeIcon icon={brands('facebook')} className="socmed" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-5 pb-3 text-secondary">
                                Work preferences:
                            </div>
                            <div className="row pt-3 d-lg-flex justify-content-between">
                                <div className="col-md-4 col-lg-2"><FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText" /> Full-time </div>
                                <div className="col-md-4 col-lg-2"><FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText" /> Part-time</div>
                                <div className="col-md-4 col-lg-2"><FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText" /> Freelance</div>
                                <div className="col-md-4 col-lg-2"><FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText" /> Hybrid</div>
                                <div className="col-md-4 col-lg-3"><FontAwesomeIcon icon={icon({ name: 'check', style: 'solid' })} className="yellowText" /> Work from Home</div>
                            </div>
                        </div>
                    </section>
                    <section className="row d-flex m-2 me-3 pb-3 project-height">
                        <div className="col-lg-12 fs-5 text-light fw-bold mt-5 d-flex align-items-end justify-content-between">
                            <div className="col-lg-3">
                                <span className="yellowText">Recent</span> Projects
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <hr className="text-light mt-0" />
                            </div>
                        </div>
                        <div className="row-md d-lg-flex justify-content-center img-bg rounded-0 shadow m-1">
                            <a href="" target="blank" className="col-lg-5 col-md-12 d-flex justify-content-center"><img src={df} alt="" className="img-size mt-3 shadow-custom2" /></a>
                            <div className="col-lg-6 col-md-11 text-light mt-3 p-4 pe-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-4 fw-bold title">Dream-Fields</div>
                                    <div><small className="text-secondary">Real Estate Web App</small></div>
                                </div>
                                <div>
                                    <small> Full-Stack Web Application</small>
                                </div>
                                <div className="col-lg-9 col-md-8 fs-6 d-flex pt-5 justify-content-between">
                                    <small className="text-secondary">Tech Used: </small>
                                    <FontAwesomeIcon icon={brands('html5')} title="HTML5" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('css3')} title="CSS3" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('bootstrap')} title="Bootstrap5" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('php')} title="PHP" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('laravel')} title="Laravel" className="fs-4" />
                                </div>
                            </div>

                        </div>
                        <hr className="col-lg-11 text-light mx-5 my-4" />
                        <div className="row-md d-lg-flex justify-content-center img-bg rounded-0 shadow m-1">
                            <a href="https://gg-next-neon.vercel.app/index.html" target="blank" className="col-lg-5 col-md-12 d-flex justify-content-center"><img src={ggNext} alt="" className="img-size  shadow-custom2" /></a>
                            <div className="col-lg-6 col-md-11 text-light mt-3 p-4 pe-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-4 fw-bold title">GG-Next</div>
                                    <div><small className="text-secondary">Gaming Web App</small></div>
                                </div>
                                <div>
                                    <small> API-driven Mini Web Application</small>
                                </div>
                                <div className="col-lg-9 col-md-8 fs-6 d-flex pt-5 justify-content-between">
                                    <small className="text-secondary">Tech Used: </small>
                                    <FontAwesomeIcon icon={brands('html5')} title="HTML5" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('css3')} title="CSS3" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('bootstrap')} title="Bootstrap5" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('js')} title="Javascript" className="fs-4" />
                                </div>
                            </div>
                        </div>
                        <hr className="col-lg-11 text-light mx-5 my-4" />
                        <div className="row-md d-lg-flex justify-content-center img-bg rounded-0 shadow m-1">
                            <a href="https://thegreenhouse.vercel.app/index.html#" target="blank" className="col-lg-5 col-md-12 d-flex justify-content-center"><img src={tgh} alt="" className="img-size shadow-custom2" /></a>
                            <div className="col-lg-6 col-md-11 text-light mt-3 p-4 pe-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-4 fw-bold title">The Greenhouse </div>
                                    <div><small className="text-secondary">Agriculture Content</small></div>
                                </div>
                                <div>
                                    <small> Static, Multi-page Responsive Website</small>
                                </div>
                                <div className="col-lg-9 col-md-8 fs-6 d-flex pt-5 justify-content-between">
                                    <small className="text-secondary">Tech Used: </small>
                                    <FontAwesomeIcon icon={brands('html5')} title="HTML5" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('css3')} title="CSS3" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('bootstrap')} title="Bootstrap5" className="fs-4" />
                                    <FontAwesomeIcon icon={brands('js')} title="Javascript" className="fs-4" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
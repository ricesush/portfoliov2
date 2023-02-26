import React from "react";
import myImage from '../images/profilePic.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Sidebar() {
    return (
        <React.Fragment>
            <section className="col-lg-2 section-left my-auto shadow-custom2">
                <div className="text-light text-center bg-gray py-4">
                    <img src={myImage} width={100} className="img-shadow"></img>
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
                <div className="text-light px-4 pt-3">
                    <table className="table table-borderless text-light">
                        <tbody className=" ">
                            <tr>
                                <td className="yellowText"><FontAwesomeIcon icon={icon({ name: 'location-dot', style: 'solid' })} /></td>
                                <td><small>Quezon City, Philippines</small> </td>
                            </tr>
                            <tr>
                                <td className="yellowText"><FontAwesomeIcon icon={icon({ name: 'envelope', style: 'solid' })} /></td>
                                <td> <small>Pixelartme@gmail.com</small> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr className="text-light mx-3 " />
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


        </React.Fragment>
    )
}
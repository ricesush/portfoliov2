import React from "react";
import myImage from '../images/profilePic.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Sidebar() {
    return (
        <React.Fragment>
            <section className="col-lg-2 section-left my-auto ">
                <div className="text-light text-center bg-gray py-4 shadow-lg">
                    <img src={myImage} width={100}></img>
                    <div className="pt-3 fw-bold ">
                        E-J Santosidad
                    </div>
                    <div className="pb-3">
                        <small className="text-secondary">Full-Stack Web Developer</small>
                    </div>
                    <div className="d-flex justify-content-around col-4 mx-auto align-items-center pt-2">
                        <a href="https://www.facebook.com/RiceSush" className="text-light fs-5"><FontAwesomeIcon icon={brands('facebook')} /></a>
                        <a href="https://github.com/ricesush" className="text-light fs-5"><FontAwesomeIcon icon={brands('github')} /></a>
                        <a href="https://www.linkedin.com/in/ejsan/" className="text-light fs-5"><FontAwesomeIcon icon={brands('linkedin')} /></a>
                    </div>
                </div>
                <div className="text-light px-5 pt-3">
                    <table class="table table-borderless text-light">
                        <tbody className="">
                            <tr>
                                <td className="yellowText"><FontAwesomeIcon icon={icon({name: 'location-dot', style: 'solid'})} /></td>
                                <td>Quezon City, Philippines</td>
                            </tr>
                            <tr>
                                <td className="yellowText"><FontAwesomeIcon icon={icon({name: 'envelope', style: 'solid'})} /></td>
                                <td>Pixelartme@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr className="text-light mx-3" />
                <div className="text-light pt-3 p-3 pb-0">
                    <small className="yellowText fw-bold">
                        Tech Stack: 
                    </small>
                    <div className="fs-1 d-flex justify-content-around p-4 pt-4">
                        <FontAwesomeIcon icon={brands('html5')} title="HTML5" />
                        <FontAwesomeIcon icon={brands('css3')} title="CSS3" />
                        <FontAwesomeIcon icon={brands('js')} />
                    </div>
                    <div className="fs-1 d-flex justify-content-around p-4 pt-0">
                        <FontAwesomeIcon icon={brands('php')} />
                        <FontAwesomeIcon icon={brands('react')} />
                        <FontAwesomeIcon icon={brands('laravel')} />
                    </div>
                </div>
                <hr className="text-light mx-3" />
            </section>


        </React.Fragment>
    )
}
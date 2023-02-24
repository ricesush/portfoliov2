import React from "react";
import myImage from '../images/profilePic.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Sidebar() {
    return (
        <React.Fragment>
            <section className="col-lg-2 section-left my-auto ">
                <div className="text-light text-center bg-gray py-4 shadow">
                <img src={myImage} width={100}></img>
                    <div className="py-3 fw-bold ">
                        E-J Santosidad
                    </div>
                    <small className="py-3 text-secondary">
                        Full-Stack Web Developer
                    </small>
                    <hr className="col-10 mx-auto"></hr>
                    <div className="d-flex justify-content-around col-8 mx-auto align-items-center">
                        <small className="fw-bold">Social Media:</small> 
                        <a href="https://getbootstrap.com/docs/5.3/components/navbar/"  className="text-light fs-5"><FontAwesomeIcon icon={brands('facebook')}/></a>
                        <a href="https://getbootstrap.com/docs/5.3/components/navbar/"  className="text-light fs-5"><FontAwesomeIcon icon={brands('github')}/></a>
                        <a href="https://getbootstrap.com/docs/5.3/components/navbar/"  className="text-light fs-5"><FontAwesomeIcon icon={brands('linkedin')}/></a>
                    </div>
                </div>
                <div className="text-light pt-5 p-3">
                    <div className="text-center ">
                        Tech Stack:
                    </div>
                    <div className="fs-1 text-center d-flex justify-content-around p-4">
                        <FontAwesomeIcon icon={brands('html5')} title="HTML5"/>
                        <FontAwesomeIcon icon={brands('css3')} title="CSS3"/>
                        <FontAwesomeIcon icon={brands('php')}/>
                    </div>
                    <div className="fs-1 text-center d-flex justify-content-around p-4 pt-0">
                        <FontAwesomeIcon icon={brands('js')}/>
                        <FontAwesomeIcon icon={brands('react')}/>
                        <FontAwesomeIcon icon={brands('laravel')}/>
                    </div>
                </div>
            </section>

            
        </React.Fragment>
    )
}
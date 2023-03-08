import React from "react";
import myImage from '../images/profilePic.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function LeftBarHeader() {
    return (
        <header className="text-light text-center bg-gray py-4">
            <img src={myImage} width={100} className="img-shadow pt-3" alt="profile picture"></img>
            <h5 className="pt-3 fw-bold">
                Erick-John Santosidad
            </h5>
            <p className="pb-3">
                <small className="yellowText opacity-75">Full-Stack Web Developer</small>
            </p>
            <div className="text-center">
                <div className="d-flex justify-content-around col-4 mx-auto  align-items-center">
                    <a href="https://www.facebook.com/RiceSush" className="text-light fs-5 " target="blank"><FontAwesomeIcon icon={brands('facebook')} className="socmed" /></a>
                    <a href="https://github.com/ricesush" className="text-light fs-5" target="blank"><FontAwesomeIcon icon={brands('github')} className="socmed" /></a>
                    <a href="https://www.linkedin.com/in/ejsan/" className="text-light fs-5" target="blank"><FontAwesomeIcon icon={brands('linkedin')} className="socmed" /></a>
                </div>
            </div>
        </header>
    )
}
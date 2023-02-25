import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Leftbar() {
    return (
        <React.Fragment>
            <div className='rightbar p-2 shadow-custom2 text-center pt-3'>
                <a href="https://github.com/ricesush" className="text-light fs-5 "><FontAwesomeIcon icon={brands('github')} /></a>
                <a href="https://www.linkedin.com/in/ejsan/" className="text-light fs-5"><FontAwesomeIcon icon={brands('linkedin')} /></a>
                <a href="https://www.facebook.com/RiceSush" className="text-light fs-5 "><FontAwesomeIcon icon={brands('facebook')} /></a>
                <div className='sticky-top text-hello text-light fs-6 opacity-50 pt-5'>
                    <small>pixelartme@gmail.com</small>
                </div>
            </div>
        </React.Fragment>
    )
}


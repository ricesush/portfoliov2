import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Leftbar() {
    return (
        <React.Fragment>
            <div className='rightbar p-2 shadow-custom2 text-center pt-3'>
                <a href="https://github.com/ricesush" className="text-light fs-5" target="blank"><FontAwesomeIcon icon={brands('github')} className="socmed"/></a>
                <a href="https://www.linkedin.com/in/ejsan/" className="text-light fs-5" target="blank"><FontAwesomeIcon icon={brands('linkedin')} className="socmed"/></a>
                <a href="https://www.facebook.com/RiceSush" className="text-light fs-5" target="blank"><FontAwesomeIcon icon={brands('facebook')} className="socmed"/></a>
                <hr className="text-light mt-3"/>
                <div className='sticky-top text-hello text-light fs-6 opacity-50 '>
                    <small>p i x e l a r t m e @ g m a i l . c o m</small>
                </div>
            </div>
        </React.Fragment>
    )
}


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Leftbar() {
    return (
        <React.Fragment>
            <div className="rightBarContainer">
                <section className='rightbar'>
                    <a href="https://www.linkedin.com/in/ejsan/" target="blank"><FontAwesomeIcon icon={brands('linkedin')} className="socmed " /></a>
                    <a href="https://github.com/ricesush" target="blank"><FontAwesomeIcon icon={brands('github')} className="socmed" /></a>
                    <a href="https://www.facebook.com/RiceSush" target="blank"><FontAwesomeIcon icon={brands('facebook')} className="socmed" /></a>
                </section>
            </div>
        </React.Fragment>
    )
}


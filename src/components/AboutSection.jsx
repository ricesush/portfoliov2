import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function AboutSection() {
    return (
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
    )
}
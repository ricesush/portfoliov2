import React, { Children } from "react";
import '../css/home.css';

export default function Projects({projectTitle, category, shortDescription, children, href, imgSrc}) {
    return (
        <section className="row-md d-lg-flex justify-content-center img-bg rounded-0 m-1">
            <a href={href} target="blank" className="col-lg-5 col-md-12 d-flex justify-content-center"><img src={imgSrc} alt={projectTitle} className="img-size mt-3 shadow-custom2" /></a>
            <div className="col-lg-6 col-md-11 text-light mt-3 p-4 pe-0">
                <header className="d-flex align-items-center justify-content-between">
                    <h3 className="fs-4 fw-bold title">{projectTitle}</h3>
                    <p className="text-secondary">{category}</p>
                </header>
                    <h6>{shortDescription}</h6>
                <section className="col-lg-9 col-md-8 fs-6 d-flex pt-5 justify-content-between">
                    <h6 className="text-secondary">Tech Used: </h6>
                    {children}
                </section>
            </div>
        </section>
    )
}
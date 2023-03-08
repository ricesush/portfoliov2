import React from "react";

export default function LeftBarButtons(){
    return (
        <section className="d-flex">
            <div className="text-light col-lg-6 col-md-6 p-0 m-0">
                <div className="buttons">
                    <button className="btn"><span></span><p data-start="good luck!" data-text="Download CV" data-title="Download CV"></p></button>
                </div>
            </div>
            <div className="text-light col-lg-6 col-md-6 p-0 m-0 ">
                <div className="buttons">
                    <button className="btn"><span></span><p data-start="good luck!" data-text="Contact Me" data-title="Contact Me"></p></button>
                </div>
            </div>
        </section>
    )
}
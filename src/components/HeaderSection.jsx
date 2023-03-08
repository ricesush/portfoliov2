import React from "react";

export default function HeaderSection() {
    return (
        <header className="bg-accent p-5 text-light">
            <h3>
                Hi, I'm <span className="fw-bold">Erick</span>
            </h3>
            <div className="outer-headings" >
                <h1>
                    <div className="inner-headings">
                        <span className="">
                            Full-Stack Developer <br />
                            Front-End Developer <br />
                            Back-End Developer <br />
                            Freelancer <br />
                        </span>
                    </div>
                </h1>
            </div>
            <div>
                An enthusiastic Web Developer with passion for programming and love for work.
            </div>
        </header>
    )
}
import React from "react";

export default function Home() {
    const text = document.getElementById('sec-text');
    const textLoad = () => {
        setTimeout(() => {
            text.innerText = "Web Developer2"
        }, 0);

        setTimeout(() => {
            text.innerText = "Freelancer"
        }, 4000);

        setTimeout(() => {
            text.innerText = "Passionate"
        }, 8000);
    }
    textLoad();
    setInterval(textLoad, 12000);

    return (
        <React.Fragment>
            <div className="d-flex pt-3 bg-img">
                <div className="col-3">

                </div>
                <div className="col-9">
                    <section className="bg-banner m-2 me-3 text-light p-5">
                        <h1>
                            Hi, I'm E-J
                        </h1>
                        <div className="container container-animation">
                            <span className="text first-text">I'm a </span>
                            <span className="text sec-text" id="sec-text">Web Developer</span>
                        </div>
                        <div>
                            An enthusiastic Web Developer with passion for programming and love for work.   
                        </div>
                    </section>
                    {/* <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div>
                    <div>This is home</div> */}
                </div>
            </div>
        </React.Fragment>
    )
}
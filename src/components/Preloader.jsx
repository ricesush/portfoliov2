import React from "react";
import '../css/loader.css'

export default function Preloader() {


    const myTimeout = setTimeout(loader, 1500);

    function loader() {
        document.getElementById("loader").setAttribute("class", "loader loader-hidden");
    }

    return (
        <React.Fragment>
            <section className="loader" id="loader">
                <div className="scanner text-center">
                    <div className="fw-bold">Erick-John Santosidad</div>
                    <span>SANTOSIDAD.</span>
                </div>
            </section>
        </React.Fragment>
    )
}
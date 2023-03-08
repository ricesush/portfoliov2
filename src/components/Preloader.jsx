import React from "react";
import '../css/loader.css'

export default function Preloader() {


    const myTimeout = setTimeout(loader, 1500);

    function loader() {
        document.getElementById("loader").setAttribute("class", "loader-hidden");
    }

    return (
        <React.Fragment>
            <section className="loader" id="loader">
                <div className="bg-glass p-5 rounded-1">
                <div className="scanner text-center">
                    
                    <span>SANTOSIDAD.</span>
                </div>

                </div>
                
            </section>
        </React.Fragment>
    )
}
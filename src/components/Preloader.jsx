import React from "react";
import '../css/loader.css'

export default function Preloader() {
    const contentTimeout = setTimeout(contentLoader, 1505);
    const preloaderTimeout = setTimeout(loader, 1500);

    function contentLoader() {
        document.getElementById("hidden").removeAttribute("hidden");
    }

    function loader() {
        document.getElementById("loader").setAttribute("class", "loader-hidden");
    }

    return (
        <React.Fragment>
            <section className="loader" id="loader">
                <div className="bg-glass p-5 rounded-1">
                <div className="scanner text-center">
                    <p><b>Erick-John Santosidad</b></p>
                    <span>SANTOSIDAD.</span>    
                </div>

                </div>
                
            </section>
        </React.Fragment>
    )
}
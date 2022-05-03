import React from "react";
import SponsorLogoSlider from "./SponserLogoSlider";

function LogoSlider() {
    return (
            <section className="logo-slider-section">
                <div className="logo-slider-container">
                    <h3 className="sponsor-title">
                        <span>Sponsored by</span>{" "}
                    </h3>
                    <SponsorLogoSlider/>
                </div>
            </section>
    );
}


export default LogoSlider;
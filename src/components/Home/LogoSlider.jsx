import React from "react";
import SponsorLogo from "./SponsorLogoSlider";

function LogoSlider() {
    return (
        <section className="logo-slider-section">
          <div className="logo-slider-container">
            <h3 className="sponsor-title">
              <span>Sponsored by</span>{" "}
            </h3>
            <SponsorLogo />
          </div>
        </section>
      );
}
  

export default LogoSlider;
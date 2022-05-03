import React from "react";
import SponserLogo from "./SponserLogoSlider";

function LogoSlider() {
    return (
        <section className="logo-slider-section">
          <div className="logo-slider-container">
            <h3 className="sponser-title">
              <span>Sponserd by</span>{" "}
            </h3>
            <SponserLogo />
          </div>
        </section>
      );
}
  

export default LogoSlider;
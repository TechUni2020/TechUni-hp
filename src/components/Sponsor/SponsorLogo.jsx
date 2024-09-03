import React from "react";

function SponsorLogo(props) {
  return (
        <img
                src={props.logo}
                alt="Sponsor pic"
                className="img-fluid"
                />
  );
}

export default SponsorLogo;

import React from "react";

function SponsorLogo(props) {
  return (
        <img
                src={props.logo}
                alt="Sponsor pic"
                className="img-fluid"
                style={{ maxHeight: props.maxHeight,marginBottom: 50, }}
                />
  );
}

export default SponsorLogo;

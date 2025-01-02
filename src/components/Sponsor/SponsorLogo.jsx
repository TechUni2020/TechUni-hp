import React from "react";

function SponsorLogo(props) {
  return (
        <picture>
            <source srcSet={props.logo} type="image/webp"/>
            <img
                src={props.logoAlt}
                alt="Sponsor pic"
                className="img-fluid"
                style={{maxHeight: props.maxHeight, marginBottom: props.marginBottom}}
            />
        </picture>
  );
}

export default SponsorLogo;

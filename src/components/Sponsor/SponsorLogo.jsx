import React from "react";

function SponsorLogo(props) {
  return (
        <picture>
            <source srcSet={props.logo} type="image/webp"/>
            <img
                src={props.logoAlt}
                alt={"Sponsor's logo(" + props.name + ")"}
                className="img-fluid"
                style={{maxHeight: props.maxHeight, marginBottom: props.marginBottom}}
            />
        </picture>
  );
}

export default SponsorLogo;

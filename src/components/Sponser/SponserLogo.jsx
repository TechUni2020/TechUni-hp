import React from "react";
import { Col } from "react-bootstrap";

function SponserLogo(props) {
  return (
        <img
                src={props.logo}
                alt="Sponser pic"
                className="img-fluid"
                style={{ maxHeight: props.maxHeight,marginBottom: 50 }}
                />
  );
}

export default SponserLogo;

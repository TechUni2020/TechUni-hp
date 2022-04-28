import React from "react";
import { Col } from "react-bootstrap";

function SponserLogo(props) {
  
  return (
        <Col md={2}>
        <img
                src={props.logo}
                alt="Sponser pic"
                className="img-fluid"
                style={{ maxHeight: props.maxHeight,marginBottom: 50 }}
                />
        </Col>
  );
}

export default SponserLogo;

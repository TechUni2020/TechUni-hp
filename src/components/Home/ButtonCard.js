import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {BiDesktop, BiLinkExternal} from "react-icons/bi";

function ButtonCard(props) {
  return (
    <Card className="button-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="about" href={props.aboutLink} target="_blank">
          <BiDesktop /> &nbsp;
          Tech.Uni
        </Button>
        <Button variant="enroll" href={props.enrollLink} target="_blank">
          <BiLinkExternal /> &nbsp;
           入会する
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ButtonCard;

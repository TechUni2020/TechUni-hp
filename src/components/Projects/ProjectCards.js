import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {BiLinkExternal} from "react-icons/bi";
import Badge from "../Badge";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text >
        <Badge variant="primary" rounded-pill>
          {props.category}
        </Badge>
        <Badge variant="primary" rounded-pill>
          {props.frontend}
        </Badge>
        <Badge variant="primary" rounded-pill>
          {props.backend}
        </Badge>
        <Badge variant="primary" rounded-pill>
          {props.infra}
        </Badge>
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank" >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">開発者：{props.author}</Card.Footer>
    </Card>
  );
}
export default ProjectCards;

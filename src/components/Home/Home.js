import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ButtonCard from "./ButtonCard";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col  className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                プログラミング研究会
                <strong className="main-name"> Tech.Uni</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
        <ButtonCard 
              title="Welcome to us"
              aboutLink="/about"
              enrollLink="https://forms.gle/D7rD5myoo6wDbfAD7">  
        </ButtonCard>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

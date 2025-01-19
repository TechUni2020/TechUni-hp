import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import Particle from "../Particle";
import ButtonCard from "./ButtonCard";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
          <section style={{width: "100vw"}}>
            <Container fluid className="home-section" id="home">
              <Particle/>
              <Container className="home-content">
                <Row>
                  <Col className="home-header">
                    <h1 style={{paddingBottom: 15}} className="heading">
                      Hi There!{" "}
                      <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                    </h1>
                    <h1 className="heading-name">
                      IT系学生団体
                      <br></br>
                      <strong className="main-name"> Tech.Uni</strong>
                    </h1>
                    <div style={{padding: 50, height: "180px", textAlign: "center"}}>
                      <Type/>
                    </div>
                  </Col>
                </Row>
              </Container>
              <ButtonCard
                      title="Welcome to us"
                      aboutLink="/about"
                      enrollLink="https://link.techuni.org/form/admission">
              </ButtonCard>
            </Container>
            <Home2/>
          </section>
  );
}

export default Home;

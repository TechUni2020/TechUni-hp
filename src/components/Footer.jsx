import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AiFillGithub, AiFillInstagram, AiOutlineTwitter,} from "react-icons/ai";
import {MdMailOutline} from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
          <Container as="footer" fluid className="footer">
            <Row>
              <Col md="4" className="footer-copywright">
                <h3>IT系学生団体 Tech.Uni</h3>
              </Col>
              <Col md="4" className="footer-copywright">
                <h3>Copyright © 2020-{year} Tech.Uni</h3>
              </Col>
              <Col md="4" className="footer-body">
                <ul className="footer-icons">
                  <li className="social-icons">
                    <a
                            href="https://github.com/TechUni2020"
                            style={{color: "white"}}
                            target="_blank"
                            rel="noopener noreferrer"
                    >
                      <AiFillGithub/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                            href="https://twitter.com/TechUni1026"
                            style={{color: "white"}}
                            target="_blank"
                            rel="noopener noreferrer"
                    >
                      <AiOutlineTwitter/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                            href="https://www.instagram.com/tech_uni1026"
                            style={{color: "white"}}
                            target="_blank"
                            rel="noopener noreferrer"
                    >
                      <AiFillInstagram/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                            href="mailto:contact@techuni.org"
                            style={{color: "white"}}
                            rel="noopener noreferrer"
                    >
                      <MdMailOutline/>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  );
}

export default Footer;

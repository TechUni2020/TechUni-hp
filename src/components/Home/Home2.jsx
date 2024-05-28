import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import homeLogo from "../../assets/TechUni.svg";
import LogoSlider from "./LogoSlider";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.5em" }}>
              Tech.Uniとは？？
            </h1>
            <h2><span className="purple"> INTRODUCE </span> OURSELF</h2>
            <p className="home-about-body">
              関西学院大学発祥のIT系学生団体。
              <br />
              <br />組織理念として
              <i>
                <b className="purple"> 「世の中に価値あるプロダクトを」 「人から学び」「自ら学び」「共に学ぶ」 </b>
              </i>を掲げて活動しています。
              <br />
              <br />
              現在
              &nbsp;
              <i>
                <b className="purple">メンバー総数153名 企業提携社数11社 全国大会出場経験有り</b>
              </i>
              &nbsp; と実績を積み重ねて
              <br />
              <i>
                <b className="purple">「今後100年続くIT系学生団体」</b>
              </i>
              として活動中
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
        <LogoSlider></LogoSlider>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="text-dark">FIND US ON</h1>
            <p className="text-dark">
              Feel free to <a href="mailto:contact@techuni.org"><span className="purple">connect</span></a> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TechUni2020"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/TechUni1026"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tech_uni1026/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ABABA from "../../assets/Sponsor/Ababa.png";
import Cookpad from "../../assets/Sponsor/Cookpad.png";
import GeekSalon from "../../assets/Sponsor/GeekSalon.png";
import Givery from "../../assets/Sponsor/Givery.png";
import Kobe from "../../assets/Sponsor/Kobe.png";
import Mynavi from "../../assets/Sponsor/Mynavi.png";
import NextKeyman from "../../assets/Sponsor/NextKeyman.png";
import Novavarsity from "../../assets/Sponsor/Novavarsity.png";
import Axross from "../../assets/Sponsor/Axross.png";
import TechBowl from "../../assets/Sponsor/TechBowl.png";
import LA10Ys from "../../assets/Sponsor/LA10Ys.png";
import SponsorLogo from "./SponsorLogo";

function Sponsor() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
            <div>
                <Container fluid className="resume-section">
                    {/* <Particle /> */}
                    <h1 className="project-heading">
                        Our <strong className="purple">Sponsor</strong>
                    </h1>
                    <p style={{color: "black"}}>
                        Here are about our Sponsor.
                    </p>
                    <Container style={{marginTop: 100, marginBottom: 200}}>
                        <Row style={{justifyContent: "center"}}>
                            <Col md={2}>
                                <SponsorLogo logo={ABABA} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Cookpad} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={GeekSalon} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Givery} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Kobe} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Mynavi} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={NextKeyman} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Novavarsity} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Axross} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={TechBowl} maxHeight="150px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={LA10Ys} maxHeight="150px"/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
    );
}

export default Sponsor;
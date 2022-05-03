import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ABABA from "../../Assets/Sponsor/Ababa.png";
import Cookpad from "../../Assets/Sponsor/Cookpad.png";
import GeekSalon from "../../Assets/Sponsor/GeekSalon.png";
import Givery from "../../Assets/Sponsor/Givery.png";
import Kobe from "../../Assets/Sponsor/Kobe.png";
import Mynavi from "../../Assets/Sponsor/Mynavi.png";
import NextKeyman from "../../Assets/Sponsor/NextKeyman.png";
import Novavarsity from "../../Assets/Sponsor/Novavarsity.png";
import Axross from "../../Assets/Sponsor/Axross.png";
import TechBowl from "../../Assets/Sponsor/TechBowl.png";
import LA10Ys from "../../Assets/Sponsor/LA10Ys.png";
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
                        Our <strong className="purple">Sponsor </strong>
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
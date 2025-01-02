import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TechTrain from "../../assets/Sponsor/TechBowl.webp";
import TripleFour from "../../assets/Sponsor/TripleFour.webp";
import TrackJob from "../../assets/Sponsor/TrackJob.webp";
import HackBar from "../../assets/Sponsor/hackbar.webp";
import Karabiner from "../../assets/Sponsor/karabiner.webp";
import Kobe from "../../assets/Sponsor/kobe.webp";
import Paiza from "../../assets/Sponsor/paiza.webp";
import Web3Career from "../../assets/Sponsor/web3-career.webp";
import Mynavi from "../../assets/Sponsor/mynavi.webp";
import Stores from "../../assets/Sponsor/STORES.webp";
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
                                <SponsorLogo logo={Karabiner} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Kobe} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Paiza} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={TechTrain} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={TrackJob} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                        </Row>
                        <Row style={{justifyContent: "center"}}>
                            <Col md={2}>
                                <SponsorLogo logo={Web3Career} maxHeight="150px" marginBottom="0px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={HackBar} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={TripleFour} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Mynavi} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Stores} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
    );
}

export default Sponsor;
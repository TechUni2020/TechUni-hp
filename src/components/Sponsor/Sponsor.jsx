import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SponsorLogo from "./SponsorLogo";

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

import TechTrainAlt from "../../assets/Sponsor/TechBowl.png";
import TripleFourAlt from "../../assets/Sponsor/TripleFour.png";
import TrackJobAlt from "../../assets/Sponsor/TrackJob.png";
import HackBarAlt from "../../assets/Sponsor/hackbar.png";
import KarabinerAlt from "../../assets/Sponsor/karabiner.png";
import KobeAlt from "../../assets/Sponsor/kobe.png";
import PaizaAlt from "../../assets/Sponsor/paiza.png";
import Web3CareerAlt from "../../assets/Sponsor/web3-career.png";
import MynaviAlt from "../../assets/Sponsor/mynavi.png";
import StoresAlt from "../../assets/Sponsor/STORES.png";


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
                                <SponsorLogo logo={Karabiner} logoAlt={KarabinerAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Kobe} logoAlt={KobeAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Paiza} logoAlt={PaizaAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={TechTrain} logoAlt={TechTrainAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={TrackJob} logoAlt={TrackJobAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                        </Row>
                        <Row style={{justifyContent: "center"}}>
                            <Col md={2}>
                                <SponsorLogo logo={Web3Career} logoAlt={Web3CareerAlt} maxHeight="150px" marginBottom="0px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={HackBar} logoAlt={HackBarAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={TripleFour} logoAlt={TripleFourAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Mynavi} logoAlt={MynaviAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                            <Col md={2}>
                                <SponsorLogo logo={Stores} logoAlt={StoresAlt} maxHeight="150px" marginBottom="50px"/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
    );
}

export default Sponsor;
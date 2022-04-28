import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ABABA from "../../Assets/Sponser/Ababa.png";
import Cookpad from "../../Assets/Sponser/Cookpad.png";
import GeekSalon from "../../Assets/Sponser/GeekSalon.png";
import Givery from "../../Assets/Sponser/Givery.png";
import Kobe from "../../Assets/Sponser/Kobe.png";
import Mynavi from "../../Assets/Sponser/Mynavi.png";
import NextKeyman from "../../Assets/Sponser/NextKeyman.png";
import Novavarsity from "../../Assets/Sponser/Novavarsity.png";
import Axross from "../../Assets/Sponser/Axross.png";
import TechBowl from "../../Assets/Sponser/TechBowl.png";
import LA10Ys from "../../Assets/Sponser/LA10Ys.png";
import SponserLogo from "./SponserLogo";

function Sponser() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                {/* <Particle /> */}
                <h1 className="project-heading">
                    Our <strong className="purple">Sponser </strong>
                </h1>
                <p style={{color: "black"}}>
                    Here are about our sponser.
                </p>
                <Container style={{marginTop: 100, marginBottom: 100}}>
                    <Row style={{justifyContent: "center"}}>
                        <SponserLogo logo={ABABA} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={Cookpad} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={GeekSalon} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={Givery} maxHeight="250px"></SponserLogo>
                        <SponserLogo logo={Kobe} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={Mynavi} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={NextKeyman} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={Novavarsity} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={Axross} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={TechBowl} maxHeight="150px"></SponserLogo>
                        <SponserLogo logo={LA10Ys} maxHeight="150px"></SponserLogo>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Sponser;

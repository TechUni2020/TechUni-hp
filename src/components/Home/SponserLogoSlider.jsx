import React from "react";
import TechFul from "../../assets/Sponsor/TechFUL.png";
import TechTrain from "../../assets/Sponsor/TechBowl.png";
import TrackJob from "../../assets/Sponsor/TrackJob.png";
import HackBar from "../../assets/Sponsor/hackbar.png";
import Karabiner from "../../assets/Sponsor/karabiner.png";
import Kobe from "../../assets/Sponsor/kobe.png";
import Paiza from "../../assets/Sponsor/paiza.png";
import Web3Career from "../../assets/Sponsor/web3-career.png";
import SponsorLogo from "../Sponsor/SponsorLogo";
import SlideContainer, { SliderItem } from "./slider";

function SponsorLogoSlider() {
    return(
        <>
    <SlideContainer contentWidth={1600} initialOffsetX={0}>
      <SliderItem width={150}>
        <SponsorLogo logo={TechFul} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={TechTrain} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={TrackJob} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={HackBar} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Karabiner} maxHeight="400px"/>
      </SliderItem>
    </SlideContainer>
    <SlideContainer contentWidth={1600} initialOffsetX={280}>
      <SliderItem width={150}>
        <SponsorLogo logo={Kobe} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Paiza} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Web3Career} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Kobe} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Paiza} maxHeight="400px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Web3Career} maxHeight="400px"/>
      </SliderItem>
    </SlideContainer>
  </>
);
}

export default SponsorLogoSlider;
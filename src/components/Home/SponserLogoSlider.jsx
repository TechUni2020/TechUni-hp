import React from "react";
import SlideContainer, { SliderItem } from "./slider";
import SponsorLogo from "../Sponsor/SponsorLogo";
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

function SponsorLogoSlider() {
    return(
        <>
    <SlideContainer contentWidth={1600} initialOffsetX={0}>
      <SliderItem width={150}>
        <SponsorLogo logo={ABABA} maxHeight="100px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Cookpad} maxHeight="100px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={GeekSalon} maxHeight="100px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Givery} maxHeight="150px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Kobe} maxHeight="100px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Mynavi} maxHeight="100px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={NextKeyman} maxHeight="150px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Novavarsity} maxHeight="100px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Axross} maxHeight="150px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={TechBowl} maxHeight="150px"/>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={LA10Ys} maxHeight="150px"/>
      </SliderItem>        
    </SlideContainer>
  </>
);
}

export default SponsorLogoSlider;
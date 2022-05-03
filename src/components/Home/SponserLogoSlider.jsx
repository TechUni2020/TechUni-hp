import React from "react";
import SlideContainer, { SliderItem } from "./slider";
import SponsorLogo from "../Sponsor/SponsorLogo";
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

function SponsorLogoSlider() {
    return(
        <>
    <SlideContainer contentWidth={1600} initialOffsetX={0}>
      <SliderItem width={150}>
        <SponsorLogo logo={ABABA} maxHeight="100px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Cookpad} maxHeight="100px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={GeekSalon} maxHeight="100px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Givery} maxHeight="150px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Kobe} maxHeight="100px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Mynavi} maxHeight="100px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={NextKeyman} maxHeight="150px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Novavarsity} maxHeight="100px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={Axross} maxHeight="150px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={TechBowl} maxHeight="150px"></SponsorLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponsorLogo logo={LA10Ys} maxHeight="150px"></SponsorLogo>
      </SliderItem>        
    </SlideContainer>
  </>
);
}

export default SponsorLogoSlider;
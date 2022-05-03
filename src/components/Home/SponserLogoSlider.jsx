import React from "react";
import SlideContainer, { SliderItem } from "./slider";
import SponserLogo from "../Sponser/SponserLogo";
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

function SponserLogoSlider() {
    return(
        <>
    <SlideContainer contentWidth={1600} initialOffsetX={0}>
      <SliderItem width={150}>
        <SponserLogo logo={ABABA} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={Cookpad} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={GeekSalon} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={Givery} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={Kobe} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={Mynavi} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={NextKeyman} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={Novavarsity} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={Axross} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={TechBowl} maxHeight="150px"></SponserLogo>
      </SliderItem>
      <SliderItem width={150}>
        <SponserLogo logo={LA10Ys} maxHeight="150px"></SponserLogo>
      </SliderItem>        
    </SlideContainer>
  </>
);
}

export default SponserLogoSlider;
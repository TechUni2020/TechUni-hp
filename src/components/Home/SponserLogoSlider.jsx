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
import SlideContainer from "./slider";

function SponsorLogoSlider() {
  const topLogos = [TechFul, TechTrain, TrackJob, HackBar];
  const bottomLogos = [Karabiner, Kobe, Paiza, Web3Career];
  return (
    <>
      <SlideContainer
        top={[...topLogos, ...topLogos].map((logo, index) => (
          <SponsorLogo key={index} logo={logo} />
        ))}
        bottom={[...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, index) => (
          <SponsorLogo key={index} logo={logo} />
        ))}
      />
    </>
  );
}

export default SponsorLogoSlider;

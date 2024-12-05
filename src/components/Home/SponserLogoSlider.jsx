import React from "react";
import TechTrain from "../../assets/Sponsor/TechBowl.png";
import TripleFour from "../../assets/Sponsor/TripleFour.png";
import TrackJob from "../../assets/Sponsor/TrackJob.png";
import HackBar from "../../assets/Sponsor/hackbar.png";
import Karabiner from "../../assets/Sponsor/karabiner.png";
import Kobe from "../../assets/Sponsor/kobe.png";
import Mynavi from "../../assets/Sponsor/mynavi.png";
import Paiza from "../../assets/Sponsor/paiza.png";
import Web3Career from "../../assets/Sponsor/web3-career.png";
import Stores from "../../assets/Sponsor/stores.png";
import SponsorLogo from "../Sponsor/SponsorLogo";
import SlideContainer from "./slider";

function SponsorLogoSlider() {
  const logos = [TripleFour, TechTrain, TrackJob, HackBar, Karabiner, Kobe, Mynavi, Paiza, Web3Career, Stores];
  return (
    <>
      <SlideContainer
        top={[...logos, ...logos].map((logo, index) => (
          <SponsorLogo key={index} logo={logo} />
        ))}
        bottom={[...logos, ...logos].reverse().map((logo, index) => (
          <SponsorLogo key={index} logo={logo} />
        ))}
      />
    </>
  );
}

export default SponsorLogoSlider;

import React from "react";
import TechTrain from "../../assets/Sponsor/TechBowl.webp";
import TripleFour from "../../assets/Sponsor/TripleFour.webp";
import TrackJob from "../../assets/Sponsor/TrackJob.webp";
import HackBar from "../../assets/Sponsor/hackbar.webp";
import Karabiner from "../../assets/Sponsor/karabiner.webp";
import Kobe from "../../assets/Sponsor/kobe.webp";
import Mynavi from "../../assets/Sponsor/mynavi.webp";
import Paiza from "../../assets/Sponsor/paiza.webp";
import Web3Career from "../../assets/Sponsor/web3-career.webp";
import Stores from "../../assets/Sponsor/STORES.webp";
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

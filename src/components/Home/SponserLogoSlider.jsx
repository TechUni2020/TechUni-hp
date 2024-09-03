import React from "react";
import TechTrain from "../../assets/Sponsor/TechBowl.png";
import TripleFour from "../../assets/Sponsor/TripleFour.png";
import TrackJob from "../../assets/Sponsor/TrackJob.png";
import HackBar from "../../assets/Sponsor/hackbar.png";
import Karabiner from "../../assets/Sponsor/karabiner.png";
import Kobe from "../../assets/Sponsor/kobe.png";
import Paiza from "../../assets/Sponsor/paiza.png";
import Web3Career from "../../assets/Sponsor/web3-career.png";
import SponsorLogo from "../Sponsor/SponsorLogo";
import SlideContainer from "./slider";

function SponsorLogoSlider() {
  // 一度に表示されるロゴの配置群を定義
  const logoPatterns = [
    [TripleFour, TechTrain, TrackJob, HackBar, TripleFour, TechTrain, TrackJob],
    [Karabiner, Kobe, Paiza, Web3Career, Karabiner, Kobe, Paiza],
  ];
  return (
    <>
      <SlideContainer
        top={[...logoPatterns[0], ...logoPatterns[1], ...logoPatterns[0]].map((logo, index) => (
          <SponsorLogo key={index} logo={logo} />
        ))}
        bottom={[...logoPatterns[1], ...logoPatterns[0], ...logoPatterns[1]].reverse().map((logo, index) => (
          <SponsorLogo key={index} logo={logo} />
        ))}
      />
    </>
  );
}

export default SponsorLogoSlider;

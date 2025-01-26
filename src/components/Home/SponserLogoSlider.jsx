import React from "react";
import SponsorLogo from "../Sponsor/SponsorLogo";
import Marquee from "react-fast-marquee";

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

function SponsorLogoSlider() {
  const logos = [
          [TripleFour, TripleFourAlt, "444 Inc."],
          [TechTrain, TechTrainAlt, "TechTrain"],
          [TrackJob, TrackJobAlt, "TrackJob"],
          [HackBar, HackBarAlt, "HACK.BAR"],
          [Karabiner, KarabinerAlt, "Karabiner Technology Inc."],
          [Kobe, KobeAlt, "Kobe Enginner's Lab"],
          [Mynavi, MynaviAlt, "Mynavi Corporation"],
          [Paiza, PaizaAlt, "Paiza, Inc."],
          [Web3Career, Web3CareerAlt, "Web3 Career"],
          [Stores, StoresAlt, "STORES, Inc."],
  ]

  return (
    <>
      <div className="slider-container">
        <Marquee speed={30}>
          {logos.map((logo, index) => (
            <SponsorLogo key={index} logo={logo[0]} logoAlt={logo[1]} name={logo[2]} />
          ))}
        </Marquee>
        <Marquee speed={30} direction="right">
          {logos.reverse().map((logo, index) => (
            <SponsorLogo key={index} logo={logo[0]} logoAlt={logo[1]} name={logo[2]} />
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default SponsorLogoSlider;

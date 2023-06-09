import "./Home.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import sixersLogo from "../../assets/Logos/TeamLogosSVG/SVG-76ers.svg";
import bucksLogo from "../../assets/Logos/TeamLogosSVG/SVG-bucks.svg";
import bullsLogo from "../../assets/Logos/TeamLogosSVG/SVG-bulls.svg";
import caveliersLogo from "../../assets/Logos/TeamLogosSVG/SVG-cavaliers.svg";
import celticsLogo from "../../assets/Logos/TeamLogosSVG/SVG-celtics.svg";
import clippersLogo from "../../assets/Logos/TeamLogosSVG/SVG-clippers.svg";
import gswLogo from "../../assets/Logos/TeamLogosSVG/SVG-golden-state-warriors.svg";
import grizzliesLogo from "../../assets/Logos/TeamLogosSVG/SVG-grizzlies.svg";
import hawksLogo from "../../assets/Logos/TeamLogosSVG/SVG-hawks.svg";
import heatLogo from "../../assets/Logos/TeamLogosSVG/SVG-heat.svg";
import hornetsLogo from "../../assets/Logos/TeamLogosSVG/SVG-hornets.svg";
import jazzLogo from "../../assets/Logos/TeamLogosSVG/SVG-jazz.svg";
import kingsLogo from "../../assets/Logos/TeamLogosSVG/SVG-kings.svg";
import knicksLogo from "../../assets/Logos/TeamLogosSVG/SVG-knicks.svg";
import lakersLogo from "../../assets/Logos/TeamLogosSVG/SVG-lakers.svg";
import magicLogo from "../../assets/Logos/TeamLogosSVG/SVG-magic.svg";
import mavericksLogo from "../../assets/Logos/TeamLogosSVG/SVG-mavericks.svg";
import netsLogo from "../../assets/Logos/TeamLogosSVG/SVG-nets.svg";
import nuggetsLogo from "../../assets/Logos/TeamLogosSVG/SVG-nuggets.svg";
import pacersLogo from "../../assets/Logos/TeamLogosSVG/SVG-pacers.svg";
import pelicansLogo from "../../assets/Logos/TeamLogosSVG/SVG-pelicans.svg";
import pistonsLogo from "../../assets/Logos/TeamLogosSVG/SVG-pistons.svg";
import raptorsLogo from "../../assets/Logos/TeamLogosSVG/SVG-raptors.svg";
import rocketsLogo from "../../assets/Logos/TeamLogosSVG/SVG-rockets.svg";
import spursLogo from "../../assets/Logos/TeamLogosSVG/SVG-spurs.svg";
import sunsLogo from "../../assets/Logos/TeamLogosSVG/SVG-suns.svg";
import thunderLogo from "../../assets/Logos/TeamLogosSVG/SVG-thunder.svg";
import timberwolvesLogo from "../../assets/Logos/TeamLogosSVG/SVG-timberwolves.svg";
import trailblazersLogo from "../../assets/Logos/TeamLogosSVG/SVG-trail-blazers.svg";
import wizardsLogo from "../../assets/Logos/TeamLogosSVG/SVG-wizards.svg";
import loadingGif from "../../assets/Gifs/derozan.gif";

function Home() {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    setIsNavigating(true);
    setTimeout(() => {
      setIsNavigating(false);
      window.location.href = "/comparepage";
    }, 3800);
  };

  return (
    <section className="logos-section">
      <div className="compare-button__section">
        <NavLink to="/comparepage" onClick={handleButtonClick}>
          <button className="compare-button">Compare Stats</button>
        </NavLink>
        {isNavigating && (
          <div className="loading-screen">
            <img
              className="loading-screen__gif"
              src={loadingGif}
              alt="basketball player gif"
            />
          </div>
        )}
      </div>
      <div className="logos-section__rows">
        <img
          className="logos-section__logo logos-section__logo-sixers"
          src={sixersLogo}
          alt="Philadelphia 76ers Logo"
        />
        <img
          className="logos-section__logo "
          src={bucksLogo}
          alt="Milwaukee Bucks Logo"
        />
        <img
          className="logos-section__logo"
          src={bullsLogo}
          alt="Chicago Bulls Logo"
        />
        <img
          className="logos-section__logo"
          src={caveliersLogo}
          alt="Cleveland Caveliers"
        />
        <NavLink to="/celtics">
          <img
            className="logos-section__logo"
            src={celticsLogo}
            alt="Boston Celtics Logo"
          />
        </NavLink>
        <img
          className="logos-section__logo"
          src={clippersLogo}
          alt="Los Angeles Clippers Logo"
        />
        <img
          className="logos-section__logo"
          src={gswLogo}
          alt="Golden State Warriors Logo"
        />
        <img
          className="logos-section__logo"
          src={grizzliesLogo}
          alt="Memphis Grizzlies Logo"
        />
        <img
          className="logos-section__logo"
          src={hawksLogo}
          alt="Atlanta Hawks Logo"
        />
        <img
          className="logos-section__logo"
          src={heatLogo}
          alt="Miami Heat Logo"
        />
        <img
          className="logos-section__logo"
          src={hornetsLogo}
          alt="Charlotte Hornets Logo"
        />
        <img
          className="logos-section__logo"
          src={jazzLogo}
          alt="Utah Jazz Logo"
        />
        <img
          className="logos-section__logo"
          src={kingsLogo}
          alt="Sacremento Kings Logo"
        />
        <img
          className="logos-section__logo"
          src={knicksLogo}
          alt="New York Knicks Logo"
        />
        <img
          className="logos-section__logo"
          src={lakersLogo}
          alt="Los Angeles Lakers Logo"
        />
        <img
          className="logos-section__logo"
          src={magicLogo}
          alt="Orlando Magic Logo"
        />
        <img
          className="logos-section__logo"
          src={mavericksLogo}
          alt="Dallas Mavericks Logo"
        />
        <img
          className="logos-section__logo"
          src={netsLogo}
          alt="Brooklyn Nets Logo"
        />
        <img
          className="logos-section__logo"
          src={nuggetsLogo}
          alt="Denver Nuggets Logo"
        />
        <img
          className="logos-section__logo"
          src={pacersLogo}
          alt="Indiana Pacers Logo"
        />
        <img
          className="logos-section__logo"
          src={pelicansLogo}
          alt="New Orleans Pelicans Logo"
        />
        <img
          className="logos-section__logo"
          src={pistonsLogo}
          alt="Detroit Pistons Logo"
        />
        <NavLink to="/raptors">
          <img
            className="logos-section__logo"
            src={raptorsLogo}
            alt="Toronto Raptors Logo"
          />
        </NavLink>
        <img
          className="logos-section__logo"
          src={rocketsLogo}
          alt="Houston Rockets Logo"
        />
        <img
          className="logos-section__logo"
          src={spursLogo}
          alt="San Antonio Spurs Logo"
        />
        <img
          className="logos-section__logo"
          src={sunsLogo}
          alt="Phoenix Suns Logo"
        />
        <img
          className="logos-section__logo"
          src={thunderLogo}
          alt="Oklahoma Logo"
        />
        <img
          className="logos-section__logo"
          src={timberwolvesLogo}
          alt="Minnesota Logo"
        />
        <img
          className="logos-section__logo"
          src={trailblazersLogo}
          alt="Portland Trailblazers Logo"
        />
        <img
          className="logos-section__logo"
          src={wizardsLogo}
          alt="Washington Wizards Logo"
        />
      </div>
      <div className="compare-button__section-desktop-view">
        <NavLink to="/comparepage" onClick={handleButtonClick}>
          <button className="compare-button__desktop-view">
            Compare Stats
          </button>
        </NavLink>
        {isNavigating && (
          <div className="loading-screen">
            <img
              className="loading-screen__gif"
              src={loadingGif}
              alt="basketball player gif"
            />
          </div>
        )}
      </div>
    </section>
  );
}
export default Home;

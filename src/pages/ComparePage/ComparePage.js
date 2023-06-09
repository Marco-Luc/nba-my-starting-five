import "./ComparePage.scss";
import { useState } from "react";
import axios from "axios";
import RaptorsCard from "../../components/RaptorsCard/RaptorsCard";
import CelticsCard from "../../components/CelticsCard/CelticsCard";

function ComparePage({ raptorsPlayers, celticsPlayers }) {
  const [raptorsCard, setRaptorsCard] = useState(false);
  const [celticsCard, setCelticsCard] = useState(false);
  const [compareStats, setCompareStats] = useState([
    {
      raptorsPlayerPoints: 0,
      celticsPlayerPoints: 0,
    },
    {
      raptorsPlayerAssists: 0,
      celticsPlayerAssists: 0,
    },
    {
      raptorsPlayerRebounds: 0,
      celticsPlayerRebounds: 0,
    },
    {
      raptorsPlayerSteals: 0,
      celticsPlayerSteals: 0,
    },
    {
      raptorsPlayerBlocks: 0,
      celticsPlayerBlocks: 0,
    },
  ]);

  const handleRaptorsCard = (event) => {
    axios
      .get(`http://localhost:2323/players/${event.target.value}`)
      .then((response) => {
        setRaptorsCard(response.data);
        const newCompareStats = [...compareStats];
        newCompareStats[0].raptorsPlayerPoints = response.data.points;
        newCompareStats[1].raptorsPlayerAssists = response.data.assists;
        newCompareStats[2].raptorsPlayerRebounds = response.data.rebounds;
        newCompareStats[3].raptorsPlayerSteals = response.data.steals;
        newCompareStats[4].raptorsPlayerBlocks = response.data.blocks;
        setCompareStats(newCompareStats);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCelticsCard = (event) => {
    axios
      .get(`http://localhost:2323/players/${event.target.value}`)
      .then((response) => {
        setCelticsCard(response.data);
        const newCompareStats = [...compareStats];
        newCompareStats[0].celticsPlayerPoints = response.data.points;
        newCompareStats[1].celticsPlayerAssists = response.data.assists;
        newCompareStats[2].celticsPlayerRebounds = response.data.rebounds;
        newCompareStats[3].celticsPlayerSteals = response.data.steals;
        newCompareStats[4].celticsPlayerBlocks = response.data.blocks;
        setCompareStats(newCompareStats);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="compare-page">
      <div className="compare-section">
        <div className="home-card-container">
          <p className="home-card-container__subtitle">TORONTO</p>
          <RaptorsCard raptorsCard={raptorsCard} />
          <select
            className="compare-page__dropdown-menus__raptors"
            type="text"
            name="players"
            // value={selectedCard}
            placeholder="Please select"
            onChange={handleRaptorsCard}
          >
            <option>Select a card</option>
            {raptorsPlayers.map((raptorsPlayer) => (
              <option key={raptorsPlayer.id} value={raptorsPlayer.id}>
                {raptorsPlayer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="compare-section__score-card">
          <div className="compare-section__score-card-stats-list">
            <div className="compare-section__score-card-stats">
              <p className="compare-section__score-card-teams">RAPTORS</p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[0].raptorsPlayerPoints === 0
                    ? "default-color"
                    : compareStats[0].raptorsPlayerPoints >
                        compareStats[0].celticsPlayerPoints && raptorsCard
                    ? "green"
                    : compareStats[0].raptorsPlayerPoints ===
                      compareStats[0].celticsPlayerPoints
                    ? "yellow"
                    : "red"
                }`}
              >
                Points:&nbsp;{raptorsCard.points}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[1].raptorsPlayerAssists === 0
                    ? "default-color"
                    : compareStats[1].raptorsPlayerAssists >
                        compareStats[1].celticsPlayerAssists && raptorsCard
                    ? "green"
                    : compareStats[1].raptorsPlayerAssists ===
                      compareStats[1].celticsPlayerAssists
                    ? "yellow"
                    : "red"
                }`}
              >
                Assists:&nbsp;{raptorsCard.assists}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[2].raptorsPlayerRebounds === 0
                    ? "default-color"
                    : compareStats[2].raptorsPlayerRebounds >
                        compareStats[2].celticsPlayerRebounds && raptorsCard
                    ? "green"
                    : compareStats[2].raptorsPlayerRebounds ===
                      compareStats[2].celticsPlayerRebounds
                    ? "yellow"
                    : "red"
                }`}
              >
                Rebounds:&nbsp;{raptorsCard.rebounds}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[3].raptorsPlayerSteals === 0
                    ? "default-color"
                    : compareStats[3].raptorsPlayerSteals >
                        compareStats[3].celticsPlayerSteals && raptorsCard
                    ? "green"
                    : compareStats[3].raptorsPlayerSteals ===
                      compareStats[3].celticsPlayerSteals
                    ? "yellow"
                    : "red"
                }`}
              >
                Steals:&nbsp;{raptorsCard.steals}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[4].raptorsPlayerBlocks === 0
                    ? "default-color"
                    : compareStats[4].raptorsPlayerBlocks >
                        compareStats[4].celticsPlayerBlocks && raptorsCard
                    ? "green"
                    : compareStats[4].raptorsPlayerBlocks ===
                      compareStats[4].celticsPlayerBlocks
                    ? "yellow"
                    : "red"
                }`}
              >
                Blocks:&nbsp;{raptorsCard.blocks}
              </p>
            </div>
            <div className="compare-section__score-card-stats">
              <p className="compare-section__score-card-teams">CELTICS</p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[0].celticsPlayerPoints === 0
                    ? "default-color"
                    : compareStats[0].celticsPlayerPoints >
                        compareStats[0].raptorsPlayerPoints && raptorsCard
                    ? "green"
                    : compareStats[0].celticsPlayerPoints ===
                      compareStats[0].raptorsPlayerPoints
                    ? "yellow"
                    : "red"
                }`}
              >
                Points:&nbsp;{celticsCard.points}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[1].celticsPlayerAssists === 0
                    ? "default-color"
                    : compareStats[1].celticsPlayerAssists >
                        compareStats[1].raptorsPlayerAssists && raptorsCard
                    ? "green"
                    : compareStats[1].celticsPlayerAssists ===
                      compareStats[1].raptorsPlayerAssists
                    ? "yellow"
                    : "red"
                }`}
              >
                Assists:&nbsp;{celticsCard.assists}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[2].celticsPlayerRebounds === 0
                    ? "default-color"
                    : compareStats[2].celticsPlayerRebounds >
                        compareStats[2].raptorsPlayerRebounds && raptorsCard
                    ? "green"
                    : compareStats[2].celticsPlayerRebounds ===
                      compareStats[2].raptorsPlayerRebounds
                    ? "yellow"
                    : "red"
                }`}
              >
                Rebounds:&nbsp;
                {celticsCard.rebounds}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[3].celticsPlayerSteals === 0
                    ? "default-color"
                    : compareStats[3].celticsPlayerSteals >
                        compareStats[3].raptorsPlayerSteals && raptorsCard
                    ? "green"
                    : compareStats[3].celticsPlayerSteals ===
                      compareStats[3].raptorsPlayerSteals
                    ? "yellow"
                    : "red"
                }`}
              >
                Steals:&nbsp;
                {celticsCard.steals}
              </p>
              <p
                className={`"compare-section__score-card-stat" ${
                  compareStats[4].celticsPlayerBlocks === 0
                    ? "default-color"
                    : compareStats[4].celticsPlayerBlocks >
                        compareStats[4].raptorsPlayerBlocks && raptorsCard
                    ? "green"
                    : compareStats[4].celticsPlayerBlocks ===
                      compareStats[4].raptorsPlayerBlocks
                    ? "yellow"
                    : "red"
                }`}
              >
                Blocks:&nbsp;
                {celticsCard.blocks}
              </p>
            </div>
          </div>
        </div>
        <div className="away-card-container">
          <p className="away-card-container__subtitle">BOSTON</p>
          <CelticsCard celticsCard={celticsCard} />
          <select
            className="compare-page__dropdown-menus__celtics"
            type="text"
            // value={selectedCard2}
            placeholder="Please select"
            onChange={handleCelticsCard}
          >
            <option>Select a card</option>
            {celticsPlayers.map((celticsPlayer) => (
              <option key={celticsPlayer.id} value={celticsPlayer.id}>
                {celticsPlayer.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default ComparePage;

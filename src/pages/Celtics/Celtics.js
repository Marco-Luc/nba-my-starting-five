import "./Celtics.scss";

function Celtics({ celticsPlayers }) {
  if (!celticsPlayers) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="main-celtics">
      <div className="main-celtics__header-container">
        <h2 className="main-celtics__header">BOSTON CELTICS</h2>
      </div>
      <div className="main-celtics-section">
        {celticsPlayers?.map((celticsPlayer) => {
          return (
            <div key={celticsPlayer.id} className="celtics-card-section">
              <div className="celtics-card-container">
                <div className="celtics-card">
                  <div className="celtics-card__front">
                    <h2 className="celtics-card__front__title">
                      {celticsPlayer.name}
                    </h2>
                    <img
                      className="celtics-card__image"
                      src={celticsPlayer.image}
                      alt={celticsPlayer.name}
                    />
                    <p className="celtics-card__front__description">
                      {celticsPlayer.description}
                    </p>
                    <p className="celtics-card__front__quote">
                      "{celticsPlayer.quote}"
                    </p>
                  </div>
                  <div className="celtics-card__back">
                    <h2 className="celtics-card__stats-title">Stats</h2>
                    <div className="celtics-card__stats-container">
                      <ul className="celtics-card__stats">
                        <li className="celtics-card__stats-stat">
                          PPG: {celticsPlayer.points}
                        </li>
                        <li className="celtics-card__stats-stat">
                          APG: {celticsPlayer.assists}
                        </li>
                        <li className="celtics-card__stats-stat">
                          RPG: {celticsPlayer.rebounds}
                        </li>
                        <li className="celtics-card__stats-stat">
                          SPG: {celticsPlayer.steals}
                        </li>
                        <li className="celtics-card__stats-stat">
                          BPG: {celticsPlayer.blocks}
                        </li>
                      </ul>
                      <video
                        className="celtics-card__back__video"
                        type="video/mp4"
                        src={celticsPlayer.video}
                        controls
                        loop
                      ></video>
                      <p className="celtics-card__back__bio">
                        {celticsPlayer.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Celtics;

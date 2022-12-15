import { Link } from "react-router-dom";
import "../../assets/bestGame.css";
import "../../assets/media/home/bestgamesmedia.css";
import "../../assets/media/home/mainmedia.css";

function BestGames({ ItemsBest, BestGameId }) {
  const maxSee = 10;

  const slice = ItemsBest.slice(0, maxSee);
  return (
    <>
      <section className="best-games-container">
        <div className="best-g-title">Best Games</div>
        <div className="b-g-c">
          {slice.map((BGames) => (
            <>
              <Link
                to={BGames.url}
                onClick={(e) => BestGameId(BGames.id)}
                id={BGames.id}
                className="best-games-chose"
              >
                <div className="game-containers">
                  <img
                    src={BGames.img}
                    className="img-test"
                    alt={BGames.gamename}
                  />
                  <span>
                    <span className="scale-top">
                      <div className="f-u-title">{BGames.gamename}</div>
                      <div className="f-u-country">{BGames.country}</div>
                    </span>
                    <span className="scale-pos">
                      <span className="f-u-from">From</span>
                      <div className="f-u-price">{BGames.price} €</div>
                    </span>
                  </span>
                </div>
              </Link>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default BestGames;

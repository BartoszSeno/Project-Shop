import { Link } from "react-router-dom";
import "../../assets/pageTwoImportant.css";

function GameShopListTwo({ ItemsBest, BestGameId }) {
  const maxSee = 40;

  const slice = ItemsBest.slice(20, maxSee);

  return (
    <>
      <main className="g-l-c">
        {slice.map((BGames) => (
          <>
            <Link
              to={`../${BGames.url}`}
              onClick={(e) => BestGameId(BGames.id)}
              id={BGames.id}
              className="best-games-chose"
            >
              <div className="game-container">
                <img
                  src={BGames.img}
                  className="img-test"
                  alt={BGames.gamename}
                />
                <div className="f-u-title">{BGames.gamename}</div>
                <div className="f-u-country">{BGames.country}</div>
                <span className="f-u-from">From</span>
                <div className="f-u-price">{BGames.price} €</div>
              </div>
            </Link>
          </>
        ))}
      </main>
    </>
  );
}

export default GameShopListTwo;

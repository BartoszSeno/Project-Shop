import { Link } from "react-router-dom";

function Pcgl({ ItemsBest, BestGameId }) {
  function HidePSN() {
    var elemsS = document.getElementsByClassName("PlayStation");
    for (let i = 0; i < elemsS.length; i += 1) {
      elemsS[i].style.display = "none";
    }
  }
  return (
    <>
      <main className="g-l-c" onLoad={HidePSN()}>
        {ItemsBest.map((BGames) => (
          <>
            <Link
              to={`../${BGames.url}`}
              onClick={(e) => BestGameId(BGames.id)}
              id={BGames.id}
              className={`best-games-chose ${BGames.platform}`}
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

export default Pcgl;

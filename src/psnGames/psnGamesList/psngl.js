import { Link } from "react-router-dom";

function Psngl({ ItemsBest, BestGameId }) {
  function HidePC() {
    var elemsS = document.getElementsByClassName("Steam");
    for (let i = 0; i < elemsS.length; i += 1) {
      elemsS[i].style.display = "none";
    }
    var elemsW = document.getElementsByClassName("Website");
    for (let i = 0; i < elemsW.length; i += 1) {
      elemsW[i].style.display = "none";
    }
    var elemsG = document.getElementsByClassName("Gog_com");
    for (let i = 0; i < elemsG.length; i += 1) {
      elemsG[i].style.display = "none";
    }
  }

  return (
    <>
      <main className="g-l-c" onLoad={HidePC()}>
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

export default Psngl;

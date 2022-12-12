import { Link } from "react-router-dom";
import { useState } from "react";
import ShopHeader from "../../shop/homeHeader/header";

function Psngl({ ItemsBest, BestGameId, filterPosts }) {
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

  const { search } = window.location;
  const query = new URLSearchParams(search).get("");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(ItemsBest, searchQuery);

  return (
    <>
      <ShopHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="g-l-c" onLoad={HidePC()}>
        {filteredPosts.map((BGames) => (
          <>
            <Link
              to={`../${BGames.url}`}
              onClick={(e) => BestGameId(BGames.id)}
              id={BGames.id}
              className={`best-games-chose ${BGames.platform}`}
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
      </main>
    </>
  );
}

export default Psngl;

import { Link } from "react-router-dom";
import ShopHeader from "../../shop/homeHeader/header";
import { useState } from "react";

function Pcgl({ ItemsBest, BestGameId, filterPosts }) {
  function HidePSN() {
    var elemsS = document.getElementsByClassName("PlayStation");
    for (let i = 0; i < elemsS.length; i += 1) {
      elemsS[i].style.display = "none";
    }
  }

  const { search } = window.location;
  const query = new URLSearchParams(search).get("");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(ItemsBest, searchQuery);

  return (
    <>
      <ShopHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="g-l-c" onLoad={HidePSN()}>
        {filteredPosts.map((BGames) => (
          <>
            <Link
              to={`../Project-Shop/${BGames.url}`}
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
                </span>{" "}
              </div>
            </Link>
          </>
        ))}
      </main>
    </>
  );
}

export default Pcgl;

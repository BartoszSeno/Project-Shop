import { Link } from "react-router-dom";
import { useState } from "react";
import ShopHeader from "../homeHeader/header";

function GameShopList({
  ItemsBest,
  BestGameId,
  maxSee,
  filterPosts,
  filterPrice,
}) {
  //search bar
  //max count of display (ItemBest - data .json)
  const slice = ItemsBest.slice(0, maxSee);

  //script for search
  const { search } = window.location;
  const query = new URLSearchParams(search).get("");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(slice, searchQuery);
  //script for search Price

  return (
    <>
      <ShopHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="g-l-c">
        {filteredPosts.map((bgames) => (
          <>
            <Link
              to={`../${bgames.url}`}
              onClick={(e) => BestGameId(bgames.id)}
              id={bgames.id}
              className="best-games-chose"
            >
              <div className="game-containers">
                <img
                  src={bgames.img}
                  className="img-test"
                  alt={bgames.gamename}
                />
                <span>
                  <span className="scale-top">
                    <div className="f-u-title">{bgames.gamename}</div>
                    <div className="f-u-country">{bgames.country}</div>
                  </span>
                  <span className="scale-pos">
                    <span className="f-u-from">From</span>
                    <div className="f-u-price" id={bgames.price}>
                      {bgames.price} €
                    </div>
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

export default GameShopList;

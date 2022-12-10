import ShopHeader from "./homeHeader/header";
import GameShopList from "./gamesList/gameList";
import Footer from "../footer";
import "../assets/shopmain.css";
import { useState } from "react";

function ShopMain({ ItemsBest, BestGameId }) {
  const [maxSee, setmaxSee] = useState(20);

  const loadMore = () => {
    const ConHeight = document.querySelector(".shop-header-container");
    const delbut = document.querySelector(".button");

    ConHeight.style.height = "3550px ";
    setmaxSee(maxSee + 20);

    delbut.style.display = "none";
  };
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <ShopHeader />
          <GameShopList
            ItemsBest={ItemsBest}
            BestGameId={BestGameId}
            maxSee={maxSee}
          />
        </div>
        <section className="button">
          <button onClick={loadMore} className="load-more-game-list">
            Load More!
          </button>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default ShopMain;

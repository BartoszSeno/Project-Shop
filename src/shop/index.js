import GameShopList from "./gamesList/gameList";
import Footer from "../footer";
import "../assets/shopmain.css";
import { useState } from "react";
import "../assets/media/shop/shopmedia.css";

function ShopMain({ ItemsBest, BestGameId, filterPosts, filterPrice }) {
  const [maxSee, setmaxSee] = useState(20);

  const loadMore = () => {
    const delbut = document.querySelector(".button");

    setmaxSee(maxSee + 20);

    delbut.style.display = "none";
  };

  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <GameShopList
            ItemsBest={ItemsBest}
            BestGameId={BestGameId}
            maxSee={maxSee}
            filterPosts={filterPosts}
            filterPrice={filterPrice}
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

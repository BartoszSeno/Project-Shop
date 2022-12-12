import GameShopList from "./gamesList/gameList";
import Footer from "../footer";
import "../assets/shopmain.css";
import { useState } from "react";

function ShopMain({ ItemsBest, BestGameId, filterPosts }) {
  const [maxSee, setmaxSee] = useState(40);

  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <GameShopList
            ItemsBest={ItemsBest}
            BestGameId={BestGameId}
            maxSee={maxSee}
            filterPosts={filterPosts}
          />
        </div>
        <section className="footer-span"></section>
        <Footer />
      </section>
    </>
  );
}

export default ShopMain;

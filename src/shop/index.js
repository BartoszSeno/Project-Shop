import ShopHeader from "./homeHeader/header";
import GameShopList from "./gamesList/gameList";
import Footer from "../footer";
import "../assets/shopmain.css";

function ShopMain({ ItemsBest, BestGameId }) {
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <ShopHeader />
          <GameShopList ItemsBest={ItemsBest} BestGameId={BestGameId} />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default ShopMain;

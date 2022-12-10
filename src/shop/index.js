import ShopHeader from "./homeHeader/header";
import GameShopList from "./gamesList/gameList";
import Footer from "../footer";
import "../assets/shopmain.css";
import { Link } from "react-router-dom";

function ShopMain({ ItemsBest, BestGameId }) {
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <ShopHeader />
          <GameShopList ItemsBest={ItemsBest} BestGameId={BestGameId} />
        </div>
        <Footer />
        <Link to="/Page-2"> strona 2</Link>
      </section>
    </>
  );
}

export default ShopMain;

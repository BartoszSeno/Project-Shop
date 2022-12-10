import ShopHeader from "../shop/homeHeader/header";
import GameShopListTwo from "./ShopPageTwoList/SPTL";
import Footer from "../footer";
import "../assets/shopmain.css";
import { Link } from "react-router-dom";

function PageTwo({ ItemsBest, BestGameId }) {
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <ShopHeader />
          <GameShopListTwo ItemsBest={ItemsBest} BestGameId={BestGameId} />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default PageTwo;

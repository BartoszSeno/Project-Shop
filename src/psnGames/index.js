import ShopHeader from "../shop/homeHeader/header";
import Psngl from "./psnGamesList/psngl";
import Footer from "../footer";
import "../assets/shopmain.css";

function PSNGames({ ItemsBest, BestGameId }) {
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <ShopHeader />
          <Psngl ItemsBest={ItemsBest} BestGameId={BestGameId} />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default PSNGames;

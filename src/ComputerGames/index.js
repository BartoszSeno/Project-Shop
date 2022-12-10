import ShopHeader from "../shop/homeHeader/header";
import Pcgl from "./PCGamesList/pcgl";
import Footer from "../footer";
import "../assets/shopmain.css";

function ComputerGames({ ItemsBest, BestGameId }) {
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <ShopHeader />
          <Pcgl ItemsBest={ItemsBest} BestGameId={BestGameId} />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default ComputerGames;

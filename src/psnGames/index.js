import Psngl from "./psnGamesList/psngl";
import Footer from "../footer";
import "../assets/shopmain.css";

function PSNGames({ ItemsBest, BestGameId, filterPosts }) {
  return (
    <>
      <section className="shop-container psn-c">
        <div className="shop-header-container psn-s-c">
          <Psngl
            ItemsBest={ItemsBest}
            BestGameId={BestGameId}
            filterPosts={filterPosts}
          />
        </div>
        <section className="footer-span"></section>
        <Footer />
      </section>
    </>
  );
}

export default PSNGames;

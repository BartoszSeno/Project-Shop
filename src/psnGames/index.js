import Psngl from "./psnGamesList/psngl";
import Footer from "../footer";
import "../assets/shopmain.css";

function PSNGames({ ItemsBest, BestGameId, filterPosts }) {
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <Psngl
            ItemsBest={ItemsBest}
            BestGameId={BestGameId}
            filterPosts={filterPosts}
          />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default PSNGames;

import Pcgl from "./PCGamesList/pcgl";
import Footer from "../footer";
import "../assets/shopmain.css";

function ComputerGames({ ItemsBest, BestGameId, filterPosts }) {
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container">
          <Pcgl
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

export default ComputerGames;

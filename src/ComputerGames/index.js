import Pcgl from "./PCGamesList/pcgl";
import Footer from "../footer";
import "../assets/shopmain.css";

function ComputerGames({ ItemsBest, BestGameId, filterPosts }) {
  return (
    <>
      <section className="shop-container">
        <div className="shop-header-container pc-s-c">
          <Pcgl
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

export default ComputerGames;

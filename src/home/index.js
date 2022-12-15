import "../assets/home.css";
import Baner from "./baner/baner";
import ForYou from "./forYou/foryou";
import BestGames from "./bestGames/bestGames";
import Footer from "../footer";
import "../assets/media/home/mainmedia.css";

function Home({ ItemsBest, BestGameId }) {
  return (
    <>
      <main className="home-container">
        <Baner />
        <ForYou ItemsBest={ItemsBest} BestGameId={BestGameId} />
        <BestGames ItemsBest={ItemsBest} BestGameId={BestGameId} />
        <Footer />
      </main>
    </>
  );
}

export default Home;

import "../assets/home.css";
import Baner from "./baner/baner";
import ForYou from "./forYou/foryou";
import BestGames from "./bestGames/bestGames";
import Footer from "../footer";
import "../assets/media/home/main110.css";

function Home({ Items, handleDelete, ItemsBest, BestGameId }) {
  return (
    <>
      <main className="home-container">
        <Baner />
        <ForYou Items={Items} handleDelete={handleDelete} />
        <BestGames ItemsBest={ItemsBest} BestGameId={BestGameId} />
        <Footer />
      </main>
    </>
  );
}

export default Home;

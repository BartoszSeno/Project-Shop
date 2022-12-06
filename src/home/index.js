import "../assets/home.css";
import Baner from "./baner/baner";
import ForYou from "./forYou/foryou";
import BestGames from "./bestGames/bestGames";

function Home({ Items, handleDelete, ItemsBest, BestGameId }) {
  return (
    <>
      <main className="home-container">
        <Baner />
        <div className="home-main">
          <ForYou Items={Items} handleDelete={handleDelete} />
          <BestGames ItemsBest={ItemsBest} BestGameId={BestGameId} />
        </div>
      </main>
    </>
  );
}

export default Home;

import "../assets/home.css";
import Baner from "./baner/baner";
import ForYou from "./forYou/foryou";

function Home({ saveItem }) {
  return (
    <>
      <div className="home-container">
        <Baner />
        <div className="home-main">
          <ForYou saveItem={saveItem} />
        </div>
      </div>
    </>
  );
}

export default Home;

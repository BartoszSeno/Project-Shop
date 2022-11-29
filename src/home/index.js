import "../assets/home.css";
import Baner from "./baner/baner";
import ForYou from "./forYou/foryou";

function Home({ Items, handleDelete }) {
  return (
    <>
      <div className="home-container">
        <Baner />
        <div className="home-main">
          <ForYou Items={Items} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default Home;

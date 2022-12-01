import "../assets/home.css";
import Baner from "./baner/baner";
import ForYou from "./forYou/foryou";

function Home({ Items, handleDelete, addClass, setaddClass }) {
  return (
    <>
      <main className="home-container">
        <Baner />
        <div className="home-main">
          <ForYou
            Items={Items}
            handleDelete={handleDelete}
            addClass={addClass}
            setaddClass={setaddClass}
          />
        </div>
      </main>
    </>
  );
}

export default Home;

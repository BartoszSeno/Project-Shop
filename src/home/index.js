import "../assets/home.css";
import Baner from "./baner/baner";
import HomeHeader from "./homeHeader/header";

function Home() {
  return (
    <>
      <div className="home-container">
        <Baner />
        <div className="home-main">
          <HomeHeader />
        </div>
      </div>
    </>
  );
}

export default Home;

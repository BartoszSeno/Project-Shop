import "../assets/GameLoopPage.css";
import Country from "./country/country";
import Platform from "./platform/platform";
import BuyGL from "./buy/buy";
import Description from "./description/description";
import Title from "./title/title";

function GameLoopPage({ Items }) {
  return (
    <>
      {Items.map((item) => (
        <main className="game-loop-page-container">
          <div className="main-g-l">
            <Description item={item} />
            <div className="g-s-c">
              <Title item={item} />
              <Country item={item} />
              <Platform item={item} />
              <BuyGL item={item} />
            </div>
          </div>
        </main>
      ))}
    </>
  );
}

export default GameLoopPage;

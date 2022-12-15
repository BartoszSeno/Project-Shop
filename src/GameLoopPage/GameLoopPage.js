import "../assets/GameLoopPage.css";
import Country from "./country/country";
import Platform from "./platform/platform";
import BuyGL from "./buy/buy";
import Description from "./description/description";
import Title from "./title/title";
import "../assets/media/home/bestgamesmedia.css";

function GameLoopPage({ Items }) {
  return (
    <>
      {Items.map((item) => (
        <main className="game-loop-page-container">
          <div className="main-g-l">
            <div className="g-s-c">
              <Description item={item} />
              <Title item={item} />
              <div className="info-g-l">
                <Country item={item} />
                <Platform item={item} />
              </div>

              <BuyGL item={item} />
            </div>
          </div>
        </main>
      ))}
    </>
  );
}

export default GameLoopPage;

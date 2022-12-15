import ShowGame from "./showGames/showgame";

function ForYou({ ItemsBest, BestGameId }) {
  return (
    <>
      <section className="f-y-container">
        <p className="f-y-title">
          Video games for Computer and PlayStation - best prices on ZERO!
        </p>
        <div className="game-show-list">
          <ShowGame ItemsBest={ItemsBest} BestGameId={BestGameId} />
        </div>
      </section>
    </>
  );
}

export default ForYou;

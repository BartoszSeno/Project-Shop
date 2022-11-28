import ShowGame from "./showGames/showgame";

function ForYou({ saveItem }) {
  return (
    <>
      <div className="f-y-container">
        <span className="f-y-title">
          Video games for Computer & PlayStation - best prices on ZERO!
        </span>
        <div className="game-show-list">
          <ShowGame saveItem={saveItem} />
        </div>
      </div>
    </>
  );
}

export default ForYou;

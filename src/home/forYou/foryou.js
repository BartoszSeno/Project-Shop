import ShowGame from "./showGames/showgame";

function ForYou({ Items, handleDelete }) {
  return (
    <>
      <div className="f-y-container">
        <span className="f-y-title">
          Video games for Computer & PlayStation - best prices on ZERO!
        </span>
        <div className="game-show-list">
          <ShowGame Items={Items} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default ForYou;

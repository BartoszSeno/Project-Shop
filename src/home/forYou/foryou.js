import ShowGame from "./showGames/showgame";

function ForYou({ Items, handleDelete }) {
  return (
    <>
      <div className="f-y-container">
        <p className="f-y-title">
          Video games for Computer and PlayStation - best prices on ZERO!
        </p>
        <div className="game-show-list">
          <ShowGame Items={Items} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default ForYou;

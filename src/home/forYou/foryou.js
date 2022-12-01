import ShowGame from "./showGames/showgame";

function ForYou({ Items, handleDelete, addClass, setaddClass }) {
  return (
    <>
      <div className="f-y-container">
        <p className="f-y-title">
          Video games for Computer & PlayStation - best prices on ZERO!
        </p>
        <div className="game-show-list">
          <ShowGame
            Items={Items}
            handleDelete={handleDelete}
            addClass={addClass}
            setaddClass={setaddClass}
          />
        </div>
      </div>
    </>
  );
}

export default ForYou;

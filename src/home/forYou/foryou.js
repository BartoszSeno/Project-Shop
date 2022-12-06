import ShowGame from "./showGames/showgame";

function ForYou({ Items, handleDelete }) {
  return (
    <>
      <section className="f-y-container">
        <p className="f-y-title">
          Video games for Computer and PlayStation - best prices on ZERO!
        </p>
        <div className="game-show-list">
          <ShowGame Items={Items} handleDelete={handleDelete} />
        </div>
      </section>
    </>
  );
}

export default ForYou;

import { Link } from "react-router-dom";

function ShowGame({ saveItem }) {
  function breakForLoop(arrayToBreak) {
    for (var i = 0; i < saveItem.length; i++) {
      console.log(saveItem[i]); //result: "My","name"
      if (saveItem[i].id === saveItem.id) {
      } else if (saveItem[i].id === saveItem.id) {
      }
    }
  }

  function fddas() {
    breakForLoop(saveItem);
  }
  return (
    <>
      {saveItem.map((item) => (
        <Link to={item.url} id={item.id} className="lol" onMouseOver={fddas}>
          <div className="game-container">
            <img src={item.image} alt="" className="img-test" />
            <div className="f-u-title">{item.gamename}</div>
            <div className="f-u-country">{item.country}</div>
            <span className="f-u-from">From</span>
            <div className="f-u-price">{item.price} €</div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ShowGame;

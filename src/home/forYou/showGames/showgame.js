import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowGame({ Items, handleDelete, addClass, setaddClass }) {
  /*
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomArrayNumber = getRandomInt(Items.length);

  function RandomScriptBorder() {}

  useState(() => {
    handleDelete(2);
  });
  */

  return (
    <>
      {Items.map((item) => (
        <>
          <Link
            to={item.url}
            onClick={(e) => handleDelete(item.id)}
            key={item.id}
            className="lol"
          >
            <div className="game-container random-shade">
              <img src={item.img} className="img-test" alt="" />
              <div className="f-u-title">{item.gamename}</div>
              <div className="f-u-country">{item.country}</div>
              <span className="f-u-from">From</span>
              <div className="f-u-price">{item.price} €</div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}

export default ShowGame;

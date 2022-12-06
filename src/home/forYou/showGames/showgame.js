import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowGame({ Items, handleDelete }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  const randomArrayNumber = getRandomInt(Items.length);

  const [isActive, setisActive] = useState(false);

  useState(() => {});

  function faf() {
    const randomIdGet = document.getElementById(randomArrayNumber);

    function StartLoop() {
      function randomMain(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      setTimeout(() => {
        setisActive(true);
        randomIdGet.style.border = "1.5px solid";
        randomIdGet.style.borderImage =
          "linear-gradient(var(--angle),#ff5e60,#dd0004,#dd0004,#dd0004, #dd0004, #dd0004, #ff5e60, black, black,black,black,black,black,black)1";
        randomIdGet.style.animation = "4s rotate linear infinite";
        EndoLoop();
      }, randomMain(3000, 10000));
    }

    function EndoLoop() {
      function randomSecound(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      setTimeout(() => {
        setisActive(false);
        randomIdGet.style.border = "1.5px solid black";
        randomIdGet.style.borderImage = "none";
        randomIdGet.style.animation = "none";
      }, randomSecound(1000, 5000));
    }

    setTimeout(() => {
      if (isActive === false) {
        StartLoop();
      } else {
      }
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      faf();
    }, 5000);
  });

  return (
    <>
      {Items.map((item) => (
        <>
          <Link
            to={item.url}
            onClick={(e) => handleDelete(item.id)}
            className="lol"
          >
            <div className="game-container top-g" id={item.id}>
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

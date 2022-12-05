import { useState } from "react";
import { useEffect } from "react";
import apiRequest from "../../assets/apiRequest";
import { Link } from "react-router-dom";
import "../../assets/bestGame.css";

function BestGames() {
  // white - green - blue - purple - gold - orange - red
  const API_URL_B = "http://localhost:3600/best-games";

  const [BestGames, setBestGames] = useState([]);

  const BestGame = async (name) => {
    const id = BestGames.length ? BestGames[BestGames.length - 1].id + 1 : 1;
    const myNewBestGames = { id, name };
    const listBestGames = [...BestGames, myNewBestGames];
    setBestGames(listBestGames);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewBestGames),
    };
    const result = await apiRequest(API_URL_B, postOptions);
  };

  const BestGameId = async (id) => {
    const listBestGames = BestGames.filter((name) => name.id === id);
    setBestGames(listBestGames);
  };

  useEffect(() => {
    const fetchBestGames = async () => {
      try {
        const response = await fetch(API_URL_B);
        if (!response.ok);
        const listBestGames = await response.json();
        setBestGames(listBestGames);
      } catch (err) {}
    };

    setTimeout(() => fetchBestGames(), 0);
  }, []);

  const maxSee = 10;

  const slice = BestGames.slice(0, maxSee);

  return (
    <>
      <div className="best-games-container">
        <div className="best-g-title">Best Games</div>
        <div className="b-g-c">
          {slice.map((BGames) => (
            <>
              <Link
                to={BGames.url}
                onClick={(e) => BestGameId(BGames.id)}
                id={BGames.id}
                className="best-games-chose"
              >
                <div className="game-container">
                  <img src={BGames.img} className="img-test" alt="" />
                  <div className="f-u-title">{BGames.gamename}</div>
                  <div className="f-u-country">{BGames.country}</div>
                  <span className="f-u-from">From</span>
                  <div className="f-u-price">{BGames.price} €</div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default BestGames;

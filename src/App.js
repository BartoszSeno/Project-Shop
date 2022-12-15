import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./header/cart/cart";
import Home from "./home";
import ShopMain from "./shop";
import { useState } from "react";
import { useEffect } from "react";
import apiRequest from "./assets/apiRequest";
import GameLoopPage from "./GameLoopPage/GameLoopPage";
import BestGameLoopPage from "./BestGameLoopPage/GameLoopPage";
import ComputerGames from "./ComputerGames";
import PSNGames from "./psnGames";

function App() {
  // script for data file from .json
  // brst games
  // colect id .json file

  const [ItemsBest, setItemsBest] = useState([]);

  const API_URL_B =
    "https://my-json-server.typicode.com/BartoszSeno/jsonapi/best-games";
  // colect id .json file

  const BestGame = async (name) => {
    const id = ItemsBest.length ? ItemsBest[ItemsBest.length - 1].id + 1 : 1;
    const myNewItemsBest = { id, name };
    const listItemsBest = [...ItemsBest, myNewItemsBest];
    setItemsBest(listItemsBest);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItemsBest),
    };
    const result = await apiRequest(API_URL_B, postOptions);
  };
  // individual id

  const BestGameId = async (id) => {
    const listItemsBest = ItemsBest.filter((name) => name.id === id);
    setItemsBest(listItemsBest);
  };

  useEffect(() => {
    const fetchItemsBest = async () => {
      try {
        const responsee = await fetch(API_URL_B);
        if (!responsee.ok);
        const listItemsBest = await responsee.json();
        setItemsBest(listItemsBest);
      } catch (err) {}
    };

    setTimeout(() => fetchItemsBest(), 0);
  }, []);

  // filter Search data from .json for search bar
  const filterPosts = (slice, query) => {
    if (!query) {
      return slice;
    }

    return slice.filter((bgames) => {
      const postName = bgames.gamename.toLowerCase();
      return postName.includes(query);
    });
  };

  // filter Price data from .json for search bar
  const filterPrice = (slice, query) => {
    if (!query) {
      return slice;
    }

    return slice.filter((bgames) => {
      const postPrice = bgames.price.toLowerCase();
      return postPrice.includes(query);
    });
  };

  return (
    <>
      <BrowserRouter basename="/Project-Shop">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home ItemsBest={ItemsBest} BestGameId={BestGameId} />}
          ></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route
            path="/Shop"
            element={
              <ShopMain
                ItemsBest={ItemsBest}
                BestGameId={BestGameId}
                filterPosts={filterPosts}
                filterPrice={filterPrice}
              />
            }
          ></Route>
          <Route
            path="/Pc"
            element={
              <ComputerGames
                ItemsBest={ItemsBest}
                BestGameId={BestGameId}
                filterPosts={filterPosts}
              />
            }
          ></Route>
          <Route
            path="/Ps"
            element={
              <PSNGames
                ItemsBest={ItemsBest}
                BestGameId={BestGameId}
                filterPosts={filterPosts}
              />
            }
          ></Route>
          {ItemsBest.map((BGames) => (
            <Route
              path={BGames.url}
              element={<BestGameLoopPage ItemsBest={ItemsBest} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

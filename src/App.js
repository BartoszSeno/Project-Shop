import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ps from "./header/ps/ps";
import Pc from "./header/pc/pc";
import Cart from "./header/cart/cart";
import Home from "./home";
import ShopMain from "./shop";
import { useState } from "react";
import { useEffect } from "react";
import apiRequest from "./assets/apiRequest";
import GameLoopPage from "./GameLoopPage/GameLoopPage";

function App() {
  const API_URL = "http://localhost:3600/gamesList";

  const [Items, setItems] = useState([]);

  const [addClass, setaddClass] = useState(false);

  const addItem = async (name) => {
    const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
    const myNewItems = { id, name };
    const listItems = [...Items, myNewItems];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItems),
    };
    const result = await apiRequest(API_URL, postOptions);
  };

  const handleDelete = async (id) => {
    const listItems = Items.filter((name) => name.id === id);
    setItems(listItems);
    /*
    function StartLoop() {
      function randomMain(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      setTimeout(() => {
        console.log("main loop");
        setaddClass(true);
      }, randomMain(10000, 100000));
    }

    function EndoLoop() {
      function randomSecound(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      setTimeout(() => {
        console.log("main loop");
        setaddClass(false);
      }, randomSecound(1000, 5000));
    }

    if (addClass === false) {
      StartLoop();
    } else {
    }

    if (addClass === true) {
      EndoLoop();
    } else {
    }
    console.log("test");
    */
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok);
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {}
    };

    setTimeout(() => fetchItems(), 0);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                Items={Items}
                handleDelete={handleDelete}
                addClass={addClass}
                setaddClass={setaddClass}
              />
            }
          ></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Shop" element={<ShopMain />}></Route>
          <Route path="/Pc" element={<Pc />}></Route>
          <Route path="/Ps" element={<Ps />}></Route>
          {Items.map((item) => (
            <Route
              path={item.url}
              element={<GameLoopPage Items={Items} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

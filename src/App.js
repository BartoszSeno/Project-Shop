import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ps from "./header/ps/ps";
import Pc from "./header/pc/pc";
import Cart from "./header/cart/cart";
import Home from "./home";
import ShopMain from "./shop";
import Test from "./test/test";
import { useState } from "react";
import { useEffect } from "react";
import apiRequest from "./assets/apiRequest";

function App() {
  const API_URL = "http://localhost:3600/gamesList";

  const [saveItem, setsaveItem] = useState([]);

  const addItem = async (name) => {
    const id = saveItem.length ? saveItem[saveItem.length - 1].id + 1 : 1;
    const myNewItem = { id, name };
    const ItemList = [...saveItem, myNewItem];
    setsaveItem(ItemList);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
  };

  useEffect(() => {
    const fetchsaveItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok);
        const ItemList = await response.json();
        setsaveItem(ItemList);
      } catch (err) {}
    };

    setTimeout(() => fetchsaveItem(), 0);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home saveItem={saveItem} />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Shop" element={<ShopMain />}></Route>
          <Route path="/Pc" element={<Pc />}></Route>
          <Route path="/Ps" element={<Ps />}></Route>
          {saveItem.map((item) => (
            <Route
              path={item.url}
              element={<Test saveItem={saveItem} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

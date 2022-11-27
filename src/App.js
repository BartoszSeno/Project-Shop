import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ps from "./header/ps/ps";
import Pc from "./header/pc/pc";
import Cart from "./header/cart/cart";
import Home from "./home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Shop" element={<></>}></Route>
          <Route path="/Pc" element={<Pc />}></Route>
          <Route path="/Ps" element={<Ps />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

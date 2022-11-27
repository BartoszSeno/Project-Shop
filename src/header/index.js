import "../assets/header.css";
import Logo from "./logo/logo";
import Search from "./search/search";
import Currency from "./currency/currency";
import Cart from "./cart/cart";
import Shop from "./shop/shop";
import Pc from "./pc/pc";
import Ps from "./ps/ps";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <div className="upper-header">
        <Link to="/">
          <Logo />
        </Link>
        <Search />
        <Currency />
      </div>
      <div className="lower-header">
        <Link to="/Shop">
          <Shop />
        </Link>
        <Link to="/Pc">
          <Pc />
        </Link>
        <Link to="/PS">
          <Ps />
        </Link>
        <Link to="/Cart" className="cart-container">
          <Cart />
        </Link>
      </div>
    </header>
  );
}

export default Header;

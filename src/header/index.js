import "../assets/header.css";
import Logo from "./logo/logo";
import Search from "./search/search";
import Currency from "./currency/currency";
import Cart from "./cart/cart";
import Shop from "./shop/shop";
import Pc from "./pc/pc";
import Ps from "./ps/ps";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const refresh = async () => {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  useEffect(() => {}, []);

  return (
    <nav className="main-header">
      <section className="upper-header">
        <div className="u-h-c">
          <Link to="/" onClick={refresh}>
            <Logo />
          </Link>
          <Search />
          <Currency />
        </div>
      </section>
      <section className="lower-header">
        <div className="l-h-c">
          <Link to="/Shop" onClick={refresh}>
            <Shop />
          </Link>
          <Link to="/Pc" onClick={refresh}>
            <Pc />
          </Link>
          <Link to="/PS" onClick={refresh}>
            <Ps />
          </Link>
          <Link to="/Cart" className="cart-container">
            <Cart />
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default Header;

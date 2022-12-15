import "../assets/header.css";
import Logo from "./logo/logo";
import Currency from "./currency/currency";
import Cart from "./cart/cart";
import Shop from "./shop/shop";
import Pc from "./pc/pc";
import Ps from "./ps/ps";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../assets/media/nav/nav.css";
import BurgerNav from "../burger/burger";

function Header() {
  const refresh = async () => {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  useEffect(() => {}, []);

  return (
    <>
      <nav className="main-header">
        <section className="upper-header">
          <div className="u-h-c">
            <Link to="/Project-Shop/" onClick={refresh}>
              <Logo />
            </Link>
            <Currency />
          </div>
        </section>
        <section className="lower-header">
          <div className="l-h-c">
            <Link to="/Project-Shop/Shop" onClick={refresh}>
              <Shop />
            </Link>
            <Link to="/Project-Shop/Pc" onClick={refresh}>
              <Pc />
            </Link>
            <Link to="/Project-Shop/PS" onClick={refresh}>
              <Ps />
            </Link>
            <Link to="/Project-Shop/Cart" className="cart-container">
              <Cart />
            </Link>
          </div>
        </section>
      </nav>
      <nav className="nav-burger-container">
        <div className="sub-menu">
          <BurgerNav />
          <Link to="/" onClick={refresh} className="burger-logo">
            <Logo />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;

import "../assets/header.css";
import Logo from "./logo/logo";
import Search from "./search/search";
import Currency from "./currency/currency";
import Cart from "./cart/cart";
import Shop from "./shop/shop";
import Pc from "./pc/pc";
import Ps from "./ps/ps";

function Header() {
  return (
    <header className="main-header">
      <div className="upper-header">
        <Logo />
        <Search />
        <Currency />
        <Cart />
      </div>
      <div className="lower-header">
        <Shop />
        <Pc />
        <Ps />
      </div>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import Logo from "../header/logo/logo";

function BurgerNavi({ burgers }) {
  return (
    <>
      <nav className="burger-nav" style={{ display: burgers ? "flex" : "" }}>
        <Link to="/Project-Shop/" className="logo-b">
          <Logo />
        </Link>
        <div className="nav-container">
          <Link to="/Project-Shop/Shop" className="b-a">
            <div className="b-shop">Shop</div>
          </Link>
          <Link to="/Project-Shop/Pc" className="b-a">
            <div className="b-pc">Computer Games</div>
          </Link>
          <Link to="/Project-Shop/Ps" className="b-a">
            <div className="b-psn">PlayStation</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default BurgerNavi;

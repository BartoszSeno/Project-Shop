import { Link } from "react-router-dom";
import Logo from "../header/logo/logo";

function BurgerNavi({ burgers }) {
  const refresh = async () => {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };
  return (
    <>
      <nav className="burger-nav" style={{ display: burgers ? "flex" : "" }}>
        <Link to="/" className="logo-b" onClick={refresh}>
          <Logo />
        </Link>
        <div className="nav-container">
          <Link to="/Shop" className="b-a" onClick={burgers}>
            <div className="b-shop">Shop</div>
          </Link>
          <Link to="/Pc" className="b-a" onClick={burgers}>
            <div className="b-pc">Computer Games</div>
          </Link>
          <Link to="/Ps" className="b-a" onClick={burgers}>
            <div className="b-psn">PlayStation</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default BurgerNavi;

import { Link } from "react-router-dom";

function BurgerNavi({ burgers }) {
  return (
    <>
      <nav className="burger-nav" style={{ display: burgers ? "flex" : "" }}>
        <div className="nav-container">
          <Link to="/">
            <div className="b-home">HOME</div>
          </Link>
          <Link to="/One">
            <div className="b-slide">SLIDE</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default BurgerNavi;

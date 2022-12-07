import Option from "./option/option";

function ShopHeader() {
  return (
    <>
      <header className="shop-header-container">
        <form className="form-h-h">
          <section>
            <label htmlFor="price" className="form-h-l-s">
              Search
            </label>
            <input type="text" className="search-shop" />
          </section>
          <label htmlFor="price" className="form-h-l-p">
            Price
          </label>
          <section className="section-price">
            <input type="number" className="price" />
            <span className="betwen-price">-</span>
            <input type="number" className="price" />
          </section>
          <Option />
        </form>
      </header>
    </>
  );
}

export default ShopHeader;

import Option from "./option/option";
import ShopNavSearch from "../search/search";

function ShopHeader({ searchQuery, setSearchQuery }) {
  return (
    <>
      <aside className="shop-header-container-t">
        <form className="form-h-h">
          <ShopNavSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
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
      </aside>
    </>
  );
}

export default ShopHeader;

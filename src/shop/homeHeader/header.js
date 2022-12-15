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
        </form>
      </aside>
    </>
  );
}

export default ShopHeader;

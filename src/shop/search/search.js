function ShopNavSearch({ searchQuery, setSearchQuery }) {
  return (
    <>
      <section>
        <label htmlFor="price" className="form-h-l-s">
          Search
        </label>
        <input
          type="text"
          className="search-shop"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
      </section>
    </>
  );
}

export default ShopNavSearch;

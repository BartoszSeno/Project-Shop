function HomeHeader() {
  return (
    <>
      <div className="home-header-container">
        <form className="form-h-h">
          <input type="text" className="search-home" />
          <label htmlFor="price" className="form-h-l">
            Price
          </label>
          <div className="price-c">
            <input type="number" className="price" />
            <span className="betwen-price">-</span>
            <input type="number" className="price" />
          </div>
          <label htmlFor="country" className="form-h-l">
            Country
          </label>
          <select
            id="country"
            name="countrylist"
            form="countryform"
            className="country-s"
          >
            <option value="all Country">All Country</option>
            <option value="Poland">Poland</option>
            <option value="Global">Global</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </select>
        </form>
      </div>
    </>
  );
}

export default HomeHeader;

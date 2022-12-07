function Option() {
  return (
    <>
      <section className="section-country">
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
      </section>
    </>
  );
}

export default Option;

function Country({ item }) {
  return (
    <>
      <div className="country-c">
        <p className="c-d">Country:</p>
        <p className="c-t">{item.country}</p>
      </div>
    </>
  );
}

export default Country;

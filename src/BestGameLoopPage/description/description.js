function Description({ item }) {
  return (
    <>
      <div className="img-g-l-container">
        <div className="img-g-l-main">
          <img src={item.img} alt={item.gamename} />
        </div>
        <div className="text-g-l">
          <p className="description">Description</p>
          <p className="textarea">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas
            perferendis ullam similique at. Quos repudiandae sapiente quia, quas
            nobis nam repellat asperiores quae expedita molestias dolorem quam
            aperiam provident.
          </p>
        </div>
      </div>
    </>
  );
}

export default Description;

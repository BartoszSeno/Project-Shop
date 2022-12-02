function BuyGL({ item }) {
  return (
    <>
      <div className="buy-s">
        <div className="price-c">
          <p className="price-s">{item.price}€</p>
        </div>
        <div className="button-buy">
          <button className="b-b">Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default BuyGL;

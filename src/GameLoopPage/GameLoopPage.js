import "../assets/GameLoopPage.css";

function GameLoopPage({ Items }) {
  return (
    <>
      {Items.map((item) => (
        <main className="game-loop-page-container">
          <div className="main-g-l">
            <div className="img-g-l-container">
              <div className="img-g-l-main">
                <img src={item.img} alt={item.gamename} />
              </div>
              <div className="text-g-l">
                <p className="description">Description</p>
                <p className="textarea">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  voluptas perferendis ullam similique at. Quos repudiandae
                  sapiente quia, quas nobis nam repellat asperiores quae
                  expedita molestias dolorem quam aperiam provident.
                </p>
              </div>
            </div>
            <div className="g-s-c">
              <div className="game-title">
                {item.gamename}
                <div className="country-c">
                  <p className="c-d">Country:</p>
                  <p className="c-t">{item.country}</p>
                </div>
                <div className="platform-c">
                  <p className="p-d">Platform:</p>
                  <p className="p-t">{item.platform}</p>
                </div>
              </div>
              <div className="buy-s">
                <div className="price-c">
                  <p className="price-t">Price</p>
                  <p className="price-s">{item.price}</p>
                </div>
                <div className="button-buy">
                  <button className="b-b">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      ))}
    </>
  );
}

export default GameLoopPage;

import ProductsList from "../products/ProductsList";

export default function Main() {
  return (
    <main>
      <div className="main-top">image</div>
      <div className="main-content">
        <ProductsList />
      </div>
      <div className="main-bottom"></div>

      <section className="main-bottom ">
        <div className="container">
          <ul>
            <li>
              <img src="./img/buy-comics-digital-comics.png"></img>
              <div>DIGITAL COMICS</div>
            </li>
            <li>
              <img src="./img/buy-comics-merchandise.png"></img>
              <div>DC MERCHANDISE</div>
            </li>
            <li>
              img/
              <img src="./img/buy-comics-subscriptions.png"></img>
              <div>SUBSCRIPTION</div>
            </li>
            <li>
              <img src="./img/buy-comics-shop-locator.png"></img>
              <div>COMICS SHOP LOCATOR</div>
            </li>
            <li>
              <img src="./img/buy-dc-power-visa.svg"></img>
              <div>DC POWER VISA</div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

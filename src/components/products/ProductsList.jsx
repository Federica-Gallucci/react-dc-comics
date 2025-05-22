import ProductCard from "../products/ProductsCard";
import comics from "../../data/comics";

export default function ProductsList() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {comics.map((comicsEl) => (
            <ProductCard
              name={comicsEl.series}
              image={comicsEl.thumb}
              key={comicsEl.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

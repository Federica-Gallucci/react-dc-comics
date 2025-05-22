export default function ProductCard({ name, image }) {
  return (
    <div className="col-1-6">
      <div className="card">
        <div className="card-media">
          <img src={image} alt={name} />
        </div>
        <div className="card-content">{name}</div>
      </div>
    </div>
  );
}

export default function Card({image, title, type, year}) {
  return (
    <div className="col-md-4 mb-3 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="not available" />
        <div className="card-body">
          <p className="card-text">
            TITLE: {title}
          </p>
          <p className="card-text">
            TYPE: {type}
          </p>
          <p className="card-text">
            YEAR: {year}
          </p>
        </div>
      </div>
    </div>
  );
}

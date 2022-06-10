export default function Card(props) {
  return (
    <div className="col-md-4 mb-3 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="not available" />
        <div className="card-body">
          <p className="card-text">
            TITLE: {props.title}
          </p>
          <p className="card-text">
            TYPE: {props.type}
          </p>
          <p className="card-text">
            YEAR: {props.year}
          </p>
        </div>
      </div>
    </div>
  );
}

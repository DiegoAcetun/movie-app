export default function Card(props) {
  return (
    <div className="col-md-4 mb-3 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}

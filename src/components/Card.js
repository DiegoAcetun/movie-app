import { useContext, useEffect } from "react";
import Context from "../context/Context";
export default function Card(props) {

  const {
    updateCurrentMovie,
    updateDisplay,
    loading,
    currentMovie
  } = useContext(Context);

  function onClick(e) {
    updateCurrentMovie(e.target.id);
  }


  return (
    <div className="col-md-4 mb-3 d-flex justify-content-center">
      <div
        className="card"
        style={{ width: "18rem", position: "relative", zIndex: "10" }}
      >
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">TITLE: {props.title}</p>
          <p className="card-text">TYPE: {props.type}</p>
          <p className="card-text">YEAR: {props.year}</p>
          <button
            type="button"
            onClick={onClick}
            className="btn btn-info"
            id={props.id}
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
}

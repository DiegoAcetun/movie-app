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
    // console.log(e.target.id);
    updateCurrentMovie(e.target.id);
    // updateDisplay("d-inline-block");
  }

  function spin() {
    console.log(currentMovie, props.id);
    if (loading === true && currentMovie === props.id) {
      return (
        <div className="spinner-border text-info" role="status">
          {/* <span className="visually-hidden">Loading...</span> */}
        </div>
      );
    }
  }

  useEffect(() => {
    console.log("Card");
    if (loading === false){
      updateDisplay("d-inline-block");
    }
    else if (loading === true) {
      updateDisplay("d-none");
    }
  }, [loading]);
  return (
    <div className="col-md-4 mb-3 d-flex justify-content-center">
      <div
        className="card"
        style={{ width: "18rem", position: "relative", zIndex: "10" }}
      >
        <img src={props.image} className="card-img-top" alt="..." />
        {spin()}
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

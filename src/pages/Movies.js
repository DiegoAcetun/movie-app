import { useState, useEffect, useRef, useContext } from "react";
import "./CSS/Movies.css";
import Context from "../context/Context";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export function Movies() {
  const apiKey = process.env.REACT_APP_KEY_OMDB;
  const [movies, setMovies] = useState([]);
  const search = useRef();
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [prueba, setPrueba] = useState("false");
  const refPrueba = useRef();
  const [stateMovies, setStateMovies] = useState({
    searchValue: "",
    bienvenida: true,
    type: "",
    page: 29,
  });
  useEffect(() => {
    if (stateMovies.bienvenida) {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${stateMovies.searchValue}&type=${stateMovies.type}&page=${stateMovies.page}`;
        const response = await fetch(URL);
        const data = await response.json();
        setResponse(data.Response);
        // console.log(data.Search);
        setMovies(data.Search);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [stateMovies, apiKey]);

  function next() {
    if (response === "True") {
      setStateMovies({ ...stateMovies, page: stateMovies.page + 1 });
    }
  }
  function before() {
    if (stateMovies.page > 1) {
      setStateMovies({ ...stateMovies, page: stateMovies.page - 1 });
    }
  }
  function validation() {
    if (stateMovies.bienvenida) {
      return (
        <div className="bienvenida">
          <h1 className="text-light text-uppercase text-center neon">
            you can do a search in the box above
          </h1>
        </div>
      );
    }
    if (response === "False") {
      return (
        <h1 className="text-uppercase text-center text-light">
          sorry No results found
        </h1>
      );
    }
    if (response === "True") {
      console.log("pintando");
      const keys = [];
      return (
        <>
          <div className="row justify-content-center align-items-center">
            {movies.map((movie) => {
              console.log("ciclo");
              //verificando si todavia no esta esta pelicula en el array
              if (!keys.includes(movie.imdbID)) {
                keys.push(movie.imdbID);
                // console.log(listMovies);
                return (
                  <Card
                    image={movie.Poster}
                    title={movie.Title}
                    type={movie.Type}
                    year={movie.Year}
                    key={movie.imdbID}
                    id={movie.imdbID}
                  />
                );
              }
              return null;
            })}
          </div>
        </>
      );
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    // const type = document.querySelector('input[name="type"]:checked').value;
    // setStateMovies({
    //   ...stateMovies,
    //   searchValue: search.current.value,
    //   bienvenida: false,
    //   type: type,
    //   page: 1,
    // });
    // console.log(refPrueba.current.textContent);
    // refPrueba.current.textContent = search.current.value;
    // console.log(typeof refPrueba.current.className);
    // console.log(refPrueba.current.classList.contains("mt-30"));
    // TODO: estaba comparando remover clases vs renderizado condicional
    if(refPrueba.current.classList.contains("d-block")){
      refPrueba.current.classList.remove("d-block");
      refPrueba.current.classList.add("d-none");
    }else if(refPrueba.current.classList.contains("d-none")){
      refPrueba.current.classList.remove("d-none");
      refPrueba.current.classList.add("d-block");
    }

    // refPrueba.current.className = "text-light";
  }

  function hide() {} // console.log("nnnn");
  const keys = [];
  // if(!loading){
  //   return (
  //     <h1 className="text-light">cargando</h1>
  //   )
  // }
  return (
    <>
      {console.log("stateMovies")}
      <div className="container bienvenida">
        <h1 className="text-light text-center mt-3 neon d-none" ref={refPrueba}>jjjj</h1>
        <form onSubmit={onSubmit}>
          <div className="row justify-content-center">
            <div className="col-md-8 d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  value="movie"
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="exampleRadios1"
                >
                  Find just movies
                </label>
              </div>
              <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  value="series"
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="exampleRadios2"
                >
                  Find just series
                </label>
              </div>
              <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  value="game"
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="exampleRadios2"
                >
                  Find just games
                </label>
              </div>
              <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  value=""
                  defaultChecked
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="exampleRadios2"
                >
                  All options
                </label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-2">
            <div className="col-lg-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="search by title"
                  ref={search}
                  // defaultValue={search}
                />
                <button className="btn btn-info" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="alert alert-info fs-5" role="alert">
          You can to visit my website where you can find other projects that I
          have developed.{" "}
          <a
            href="https://diego-008.github.io/my-web-site/"
            target="_blank"
            rel="noreferrer"
            className="alert-link"
          >
            View website
          </a>
        </div>
        {/* {validation()} */}
        {stateMovies.bienvenida ? (
          (console.log("bienvenida"),
          (
            <div className="bienvenida">
              <h1 className="text-light text-uppercase text-center neon">
                you can do a search in the box above
              </h1>
            </div>
          ))
        ) : loading ? (
          (console.log("cargando"),
          (
            <div className="text-center">
              <h1 className="text-light">cargando...</h1>
              <div className="spinner-border text-info fs-1" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ))
        ) : response === "False" ? (
          <h1 className="text-uppercase text-center text-light">
            sorry No results found
          </h1>
        ) : response === "True" ? (
          // console.log("pintando"),

          <>
            <div className="row justify-content-center align-items-center">
              {movies.map((movie) => {
                console.log("ciclo");
                //verificando si todavia no esta esta pelicula en el array
                if (!keys.includes(movie.imdbID)) {
                  keys.push(movie.imdbID);
                  // console.log(listMovies);
                  return (
                    <Card
                      image={movie.Poster}
                      title={movie.Title}
                      type={movie.Type}
                      year={movie.Year}
                      key={movie.imdbID}
                      id={movie.imdbID}
                    />
                  );
                }
                return null;
              })}
            </div>
          </>
        ) : null}
        <div className="fix">
          <div className="row justify-content-around fixed-bottom">
            <div className="col-4 d-flex justify-content-center">
              <button
                className="btn btn-info btn-lg rounded-pill"
                onClick={before}
              >
                Before Page
              </button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button
                className="btn btn-info btn-lg rounded-pill"
                onClick={next}
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

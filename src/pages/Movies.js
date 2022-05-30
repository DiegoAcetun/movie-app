import { useState, useEffect, useRef } from "react";
import "./CSS/Movies.css";
import Card from "../components/Card";
export function Movies() {
  const apiKey = process.env.REACT_APP_KEY_OMDB;
  const [movies, setMovies] = useState([]);
  const search = useRef();
  // TODO: usar state para la respuesta
  const [response, setResponse] = useState("");
  const [stateMovies, setStateMovies] = useState({
    searchValue: "pan",
    bienvenida: true,
    type: "",
    page: 1,
  });
  useEffect(() => {
    if (stateMovies.bienvenida) {
      return;
    }
    // console.log("executed");
    async function fetchData() {
      try {
        // console.log(page);
        const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${stateMovies.searchValue}&type=${stateMovies.type}&page=${stateMovies.page}`;
        console.log(URL);
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.Response);
        setResponse(data.Response);
        console.log(stateMovies.page);
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [stateMovies, apiKey]);

  function onSubmit(e) {
    e.preventDefault();
    // console.log(searchValue.current.value);
    // console.log(search.current.value, 'aaa');
    const type = document.querySelector('input[name="type"]:checked').value;
    setStateMovies({
      ...stateMovies,
      searchValue: search.current.value,
      bienvenida: false,
      type: type,
      page: 1,
    });
    search.current.value = "";
    // console.log(type);
    // console.log(document.querySelector('input[name=type]:checked').value);
    // const yy = document.querySelector("input[name=type]:checked").value;
    // console.log(yy);
    // console.log(e.target.value);
  }

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
  function res() {
    if (stateMovies.bienvenida) {
      return (
        <div className="bienvenida">
          <h1 className="text-light text-uppercase text-center">
            you can do a search in the box above
          </h1>
        </div>
      );
    }
    // const response = await respuesta.current;
    if (response === "False") {
      return (
        <h1 className="text-uppercase text-center text-light">
          sorry No results found
        </h1>
      );
    } else if (response === "True") {
      console.log("malll");
      const keys = [];
      return (
        <>
          <div className="row justify-content-center align-items-center">
            {movies.map((movie) => {
              //verificando si todavia no esta esta pelicula en el array
              if (!keys.includes(movie.imdbID)) {
                keys.push(movie.imdbID);
                return (
                  <Card
                    image={movie.Poster}
                    title={movie.Title}
                    type={movie.Type}
                    year={movie.Year}
                    key={movie.imdbID}
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

  return (
    <div className="container bienvenida">
      <h1 className="text-light text-center mt-3">MOVIES APP</h1>
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
            <div className="form-check ms-5">
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
            <div className="form-check ms-5">
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
                Both options
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
      {res()}
      <div className="row justify-content-around fixed-bottom">
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-info btn-lg" onClick={before}>
                Before Page
              </button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-info btn-lg" onClick={next}>
                Next Page
              </button>
            </div>
          </div>
    </div>
  );
}

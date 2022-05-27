import { useState, useEffect, useRef } from "react";
import "./CSS/Movies.css";
import Card from "../components/Card";
export function Movies() {
  const apiKey = process.env.REACT_APP_KEY_OMDB;
  const [searchValue, setSearchValue] = useState("pan");
  const [movies, setMovies] = useState([]);
  const search = useRef();
  const respuesta = useRef();
  useEffect(() => {
    async function fetchData() {
      const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}`;
      const response = await fetch(URL);
      // console.log(response);
      const data = await response.json();
      // respuesta = data.Response;
      respuesta.current = data.Response;
      setMovies(data.Search);
      // console.log(data);
    }
    fetchData();
  }, [searchValue, apiKey]);

  function onSubmit(e) {
    e.preventDefault();
    // console.log(searchValue.current.value);
    // console.log(search.current.value, 'aaa');
    setSearchValue(search.current.value);
    search.current.value = "";
    // console.log(document.querySelector('input[name=prueba]:checked').value);
    const yy = document.querySelector("[name=prueba]:checked").value;
    console.log(yy);
  }
  function res() {
    // console.log(respuesta);
    if (respuesta.current === "False") {
      // console.log('false');
      return (
        <h1 className="text-uppercase text-center text-light">
          No matches found
        </h1>
      );
    }
    return (
      <div className="row justify-content-center align-items-center">
        {movies.map((movie) => {
          return (
            <Card title={movie.Title} image={movie.Poster} key={movie.imdbID} />
          );
        })}
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="text-light text-center mt-3">MOVIES APP</h1>
      <form onSubmit={onSubmit}>
        <div className="col-md-4 offset-md-4 off d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="prueba"
              id="r1"
              value="option1"
              defaultChecked
            />
            <label
              className="form-check-label text-light"
              htmlFor="exampleRadios1"
            >
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="prueba"
              id="r2"
              value="option2"
            />
            <label
              className="form-check-label text-light"
              htmlFor="exampleRadios2"
            >
              Second default radio
            </label>
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search by title"
              ref={search}
              // defaultValue={search}
            />
            <button className="btn btn-info" type="submit" id="button-addon2">
              Search
            </button>
          </div>
        </div>
      </form>
      {res()}
    </div>
  );
}

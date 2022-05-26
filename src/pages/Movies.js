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
      console.log(data);
      // respuesta = data.Response;
      respuesta.current = data.Response;
      console.log(respuesta, "aa");
      setMovies(data.Search);
      // console.log(data);
    }
    fetchData();
    console.log("Movies.js");
  }, [searchValue, apiKey]);

  function onSubmit(e) {
    e.preventDefault();
    // console.log(searchValue.current.value);
    // console.log(search.current.value, 'aaa');
    setSearchValue(search.current.value);
    search.current.value = "";
  }
  function res() {
    // console.log(respuesta);
    if (respuesta.current === "False") {
      // console.log('false');
      return <h1 className="text-uppercase text-center text-light">No matches found</h1>;
    }
    console.log("true");
    return (
      <div className="row border justify-content-center align-items-center">
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
        <div className="col-md-4 offset-md-4 off">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search"
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

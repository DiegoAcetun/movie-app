import { useState, useEffect, useRef } from "react";
import "./CSS/Movies.css";
import Card from "../components/Card";
export function Movies() {
  const apiKey = process.env.REACT_APP_KEY_OMDB;
  const [searchValue, setSearchValue] = useState("pan");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("");
  const [bienvenida, setBienvenida] = useState(true);
  const search = useRef();
  const respuesta = useRef();
  // console.log('executed ss');
  useEffect(() => {
    if (bienvenida){
      return;
    }
    // console.log("executed"); 
    async function fetchData() {
      try {
        const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&type=${type}`;
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.Search);
        respuesta.current = data.Response;
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchValue, apiKey, bienvenida, type]);

  function onSubmit(e) {
    e.preventDefault();
    // console.log(searchValue.current.value);
    // console.log(search.current.value, 'aaa');
    setSearchValue(search.current.value);
    search.current.value = "";
    const type = document.querySelector('input[name="type"]:checked').value;
    setType(type);
    setBienvenida(false);
    // console.log(type);
    // console.log(document.querySelector('input[name=type]:checked').value);
    // const yy = document.querySelector("input[name=type]:checked").value;
    // console.log(yy);
    // console.log(e.target.value);
  }
  function res() {
    if(bienvenida){
      return (
        <h1 className="text-light text-center">HOLA! PUEDES REALIZAR UNA BÚSQUEDA EN EL RECUEADRO</h1>
      )
    }

    if (respuesta.current === "False") {
      return (
        <h1 className="text-uppercase text-center text-light">
          No matches found
        </h1>
      );
    }
    const keys = []
    return (
      <div className="row justify-content-center align-items-center">
        {movies.map((movie) => {
          //verificando si todavia no esta esta pelicula en el array
          if(!keys.includes(movie.imdbID)){
            keys.push(movie.imdbID);
            return (
              <Card image={movie.Poster} title={movie.Title} type={movie.Type} year={movie.Year} key={movie.imdbID} />
            );
          }
          return null;

          
        })}
      </div>
    );
  }

  return (
    <div className="container">
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
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import "./CSS/Movies.css";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Form from "../components/Form";
import Cards from "../components/Cards";
export function Movies() {
  console.log("Movies.js");
  const [movies, setMovies] = useState([]);
  const search = useRef("");
  const [response, setResponse] = useState("");
  const [searchValue, setSearchValue] = useState();
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [bienvenida, setBienvenida] = useState(true);

  // useEffect(() => {
  //   if (bienvenida) {
  //     return;
  //   }
  //   async function fetchData() {
  //     try {
  //       const apiKey = process.env.REACT_APP_KEY_OMDB;
  //       const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&type=${type}&page=${page}`;
  //       const response = await fetch(URL);
  //       const data = await response.json();
  //       setResponse(data.Response);
  //       setMovies(data.Search);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, [searchValue, type, page, bienvenida]);

  function onSubmit(e) {
    e.preventDefault();
    // const type = document.querySelector('input[name="type"]:checked').value;
    // console.log(type);
    console.log(document.form.type.value);
    // setBienvenida(false);
    // setPage(1);
    // setType(type);
    // setSearchValue(search.current.value);
    // search.current.value = "";
    console.log("submit");
  }

  function next() {
    if (response === "True") {
      setPage(page + 1);
    }
  }
  function before() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  const keys = [];
  return (
    <div className="container bienvenida">
      <h1 className="text-light text-center mt-3">MOVIES APP</h1>

      {/* <form onSubmit={onSubmit}>
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
                // defaultValue={search.current.value}
              />
              <button className="btn btn-info" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </form> */}
      <Form onSubmit={onSubmit} />
      <Alert
        message="You can to visit my website where you can find other projects that I have developed."
        messageLink="View website"
      />
      {/* {bienvenida ? (
        <div className="bienvenida">
          <h1 className="text-light text-uppercase text-center">
            you can do a search in the box above
          </h1>
        </div>
      ) : response === "False" ? (
        <h1 className="text-uppercase text-center text-light">
          sorry No results found
        </h1>
      ) : response === "True" ? (
        <>
          <div className="row justify-content-center align-items-center">
            {movies.map((movie) => {
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
      ) : (
        <></>
      )} */}
      <Cards />
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
            <button className="btn btn-info btn-lg rounded-pill" onClick={next}>
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

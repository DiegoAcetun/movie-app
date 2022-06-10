import { useState, useEffect } from "react";
import Form from "./Form";
import Card from "./Card";
import Button from "./Button";
function Cards() {
  const [movies, setMovies] = useState([]);
  const [response, setResponse] = useState("");
  const [searchValue, setSearchValue] = useState();
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bienvenida, setBienvenida] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        if (bienvenida) {
          return;
        }
        setLoading(true);
        const apiKey = process.env.REACT_APP_KEY_OMDB;
        const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&type=${type}&page=${page}`;
        const response = await fetch(URL);
        const data = await response.json();
        setResponse(data.Response);
        setMovies(data.Search);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchValue, type, page, bienvenida]);

  // * Manejadores de eventos
  function handleSubmit(e) {
    e.preventDefault();
    setBienvenida(false);
    setPage(1);
    setType(document.form.type.value);
    setSearchValue(document.form.search.value);
    document.form.search.blur();
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
    <>
      <Form handleSubmit={handleSubmit} />
      {bienvenida ? (
        <>
          {" "}
          <h1 className="text-light text-uppercase text-center">
            you can do a search in the box above
          </h1>{" "}
        </>
      ) : loading ? (
        <h1 className="text-uppercase text-light text-center">finding...</h1>
      ) : response === "True" ? (
        <>
          <div className="row justify-content-center align-items-center">
            {movies.map((movie) => {
              //*verificando si todavia no esta esta pelicula en el array
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
      ) : response === "False" ? (
        <h1 className="text-uppercase text-center text-light">
          sorry No results found
        </h1>
      ) : (
        <></>
      )}
      <div className="fix">
        <div className="row justify-content-around fixed-bottom">
          <div className="col-4 d-flex justify-content-center">
            <Button handleClick={before} text="Before Page" />
          </div>
          <div className="col-4 d-flex justify-content-center">
            <Button handleClick={next} text="Next Page" />
          </div>
        </div>
      </div>
    </>
  );

}

export default Cards;

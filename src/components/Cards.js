import { useState, useEffect } from "react";
import Card from "./Card";
function Cards() {
  const [movies, setMovies] = useState([]);
  const [response, setResponse] = useState("");
  const [searchValue, setSearchValue] = useState();
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  // TODO: usar bienvenida con useContext
  const [bienvenida, setBienvenida] = useState(true);
  useEffect(() => {
    async function fetchData() {
      if (bienvenida) {
        return;
      }
      try {
        const apiKey = process.env.REACT_APP_KEY_OMDB;
        const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=pan`;
        const response = await fetch(URL);
        const data = await response.json();
        setResponse(data.Response);
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchValue, type, page]);
  const keys = [];
  return response === "True" ? (
    <div className="row justify-content-center align-items-center">
      {/* let keys = [], */}
      {movies.map((movie) => {
        // const keys  = [];
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
  ) : response === "True" ? (
    <h1 className="text-uppercase text-center text-light">
      sorry No results found
    </h1>
  ) : (
    <></>
  );
}

export default Cards;

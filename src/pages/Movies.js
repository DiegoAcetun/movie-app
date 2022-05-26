import { useState, useEffect, useRef } from "react";
import "./CSS/Movies.css";
import Card from "../components/Card";
export function Movies() {
  const apiKey = process.env.REACT_APP_KEY_OMDB;
  const [search, setSearch] = useState("batman");
  const [movies, setMovies] = useState([]);
  const searchValue = useRef("");
  useEffect(() => {
    async function fetchData() {
      const URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data.Search);
      console.log(data);
    }
    fetchData();
    console.log("Movies.js");
  }, [search]);

  function onSubmit(e) {
    e.preventDefault();
    console.log(searchValue.current.value); 
    setSearch(searchValue.current.value);
    
  }
  const showMovies = movies.map((movie, index) => {
      return (
        // <div className="card" key={index}>
        //   <img src={movie.Poster} className="card-img-top" alt="..." />
        //   <div className="card-body">
        //     <p className="card-text">
        //       {movie.Title}
        //     </p>
        //   </div>
        // </div>
        <Card title={movie.Title} image={movie.Poster} key={movie.imdbID} />
      );
    })
    let a = 0;
  return (
    <div className="container">
      <h1 className="text-light text-center mt-3">MOVIES APP</h1>
      <form onSubmit={onSubmit}>
        <div className="col-md-4 offset-md-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search"
              ref={searchValue}
              // defaultValue={search}
              
            />
            <button
              className="btn btn-info"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
      </form>      
      {
        
        movies.map((movie, index) => {
        if(a===3){
          // console.log(a);
          a = 0;
        }
        console.log(a);
        a = a+1;
          return (
            <Card title={movie.Title} image={movie.Poster} key={movie.imdbID} />
          );
        })}
    </div>
  );

}

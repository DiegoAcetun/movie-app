import { useReducer } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
const State = (props) => {
  const initialState = {
    listMovies: [],
    currentMovie: null,
    currentMovieProps: {Title: "", Actors: "", Awards: "", Country: "", Genre: ""},
    display: "d-none",
    loading: null,
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const updateMovies =  (movies) => {
    // console.log("getUsers");
    dispatch({ type: "updateMovies", payload: movies });
  };
  
  const updateCurrentMovie =  (currentMovie) => {
    dispatch({ type: "updateCurrentMovie", payload: currentMovie });
    // console.log("getProfile");
  };

  const updateDisplay = (display) => {
    dispatch({ type: "updateDisplay", payload: display });
  };

  const updateCurrentMovieProps = (currentMovieProps) => {
    dispatch({ type: "updateCurrentMovieProps", payload: currentMovieProps });
  };

  const updateLoading = (loading) => {
    dispatch({ type: "updateLoading", payload: loading });
  };
  return (
    <Context.Provider
      value={{
        listMovies: state.listMovies,
        currentMovie: state.currentMovie,
        updateMovies,
        updateCurrentMovie,
        display: state.display,
        updateDisplay, 
        currentMovieProps: state.currentMovieProps,
        updateCurrentMovieProps,
        loading: state.loading,
        updateLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;

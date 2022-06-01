import { useReducer } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
const State = (props) => {
  const initialState = {
    listMovies: [],
    currentMovie: null,
    currentMovieProps: {},
    display: "d-none"
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
        updateCurrentMovieProps
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;

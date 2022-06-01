export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "updateMovies":
      return {
        ...state,
        listMovies: payload,
      };
    case "updateCurrentMovie":
      return {
        ...state,
        currentMovie: payload,
      };
    case "updateDisplay":
      return {
        ...state,
        display: payload,
      };
    case "updateCurrentMovieProps":
      return {
        ...state,
        currentMovieProps: payload,
      };
    default:
      return state;
  }
};
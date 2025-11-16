let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  genreList: [],
  loading: true,
};
function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popular,
        topRatedMovies: payload.topRated,
        upComingMovies: payload.upComing,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}
export default movieReducer;

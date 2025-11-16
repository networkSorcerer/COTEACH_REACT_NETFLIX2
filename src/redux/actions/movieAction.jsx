import api from "../api";

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(`/movie/popular`);
      const topRatedApi = api.get("/movie/top_rated");
      const upComingApi = api.get("/movie/upcoming");
      const genreApi = api.get(`/genre/movie/list`);
      let [popular, topRated, upComing, genreList] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
        genreApi,
      ]);
      console.log("p1p1p1p1p1p1", popular);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popular: popular.data,
          topRated: topRated.data,
          upComing: upComing.data,
          genreList: genreList.data.genres,
        },
      });
      console.log("promise popular", popular);
      console.log("promise topRated", topRated);
      console.log("promise upComing", upComing);
    } catch {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
};

import api from "../api";

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = api.get(`/movie/popular`);
    const topRatedApi = api.get("/movie/top_rated");
    const upComingApi = api.get("/movie/upcoming");

    let [popular, topRated, upComing] = await Promise.all([
      popularMovieApi,
      topRatedApi,
      upComingApi,
    ]);
    console.log("p1p1p1p1p1p1", popular);
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popular: popular.data,
        topRated: topRated.data,
        upComing: upComing.data,
      },
    });
    console.log("promise popular", popular);
    console.log("promise topRated", topRated);
    console.log("promise upComing", upComing);
  };
}

export const movieAction = {
  getMovies,
};

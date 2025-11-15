import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );
  console.log("ppppp", popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default Home;

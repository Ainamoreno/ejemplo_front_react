import axios from "axios";
import React, { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import Movie from "../Movie/Movie";

import "./Home.css";

const override = {
  bottom: "50%",
  top: "20%",
};

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:3000/movies/movieTopRated";
  const moviesTopRated = async () => {
    setLoading(true);
    let res = await axios.get(url);
    setLoading(false);
    try {
      setMovie(res.data);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="homeDesign">
      <div onClick={moviesTopRated}>Movies</div>
      <div className="movie">
        {!loading ? (
          <Movie movie={movie} />
        ) : (
          <PuffLoader color="#000000" size={80} cssOverride={override} />
        )}
      </div>
    </div>
  );
};

export default Home;

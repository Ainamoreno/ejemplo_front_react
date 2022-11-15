import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import Movie from "../Movie/Movie";

import "./Movies.css";

// const override = {
//   left: "50%",
//   top: "50%",
// };

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:3000/movies/movieTopRated";

useEffect(()=> {
moviesTopRated()
}, [])

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
    <div className="moviesDesign">
        {!loading ? (
          <div className="movie"><Movie movie={movie} /></div>
        ) : (
          <div className="loading"><PuffLoader color="#000000" size={80} cssOverride /></div>
        )}
      
    </div>
  );
};

export default Movies;

import React, { useState } from "react";
import "./Movie.css";
import { useNavigate } from "react-router-dom";
import Details from "../Details/Details";

function Movie({ movie }) {
  let navigate = useNavigate();
  const [hasRender, setRender] = useState(false);
  const [id, setId] = useState(0);

  const detailsMovie = (param) => {
    setRender(true);
    setId(param);
  };
  return (
    <>
      {movie.map((mov, index) => (
        <div
          key={index}
          className="divMovie"
          onClick={() => detailsMovie(mov.id_article)}
        >
          <p>{mov.id_article}</p>
          <h4>{mov.name}</h4>
          {/* <p className='pMovie'>{mov.description}</p> */}
          <img className="imgMovie" src={`${mov.photo}`} alt="" />
        </div>
      ))}

      {hasRender && <Details id={id} movie={movie} />}
    </>
  );
}

export default Movie;

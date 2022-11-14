import React from "react";
import './Details.css'
import { useNavigate } from "react-router-dom";
// const nav = () => {
//   let navigate = useNavigate();
//   const detailsMovie = (id) => {
//     navigate("/details");
//   };
// };

const Details = ({ id, movie }) => {
  console.log(id)
 
  let mov = movie.filter(mov => mov.id_article === id) 
console.log(mov)
  return <div className="divDetails">
    <h3>{mov[0].name}</h3>
    <h5>Estrenada en: {mov[0].data_premiere}</h5>
    <p>Puntuada en: {mov[0].score}</p>
    <p className="pDetails">{mov[0].description}</p>
    <img className="imgMovie" src={`${mov[0].photo}`} alt="" />
  </div>;
};

export default Details;

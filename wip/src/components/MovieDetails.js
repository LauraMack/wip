import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const key = process.env.REACT_APP_CLIENT_ID;
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [id]);
  console.log(details);
  return (
    <div>
      <div>{details.Title}</div>
      <img src={details.Poster} />
      <div>{details.Plot}</div>
      <div>{details.Actors}</div>
    </div>
  );
};

export default MovieDetails;

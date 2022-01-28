import React, { useEffect, useState } from "react";
import axios from "axios";

const ListOfMovies = () => {
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/movies/classic")
      .then((response) => {
        console.log(response.data);
        console.log("movies :" + response.data[0].title);
        setMovies(response.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div>list of movies</div>
      <ul>{movies.map(movie=><li key={movie.id}>{movie.title}</li>)}</ul>
    </>
  );
};

export default ListOfMovies;
